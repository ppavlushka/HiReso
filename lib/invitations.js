import prisma from "lib/prisma";

export async function addInvitationEmail({ email, code }) {
  // check if user exists with this email
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!existingUser) {
    const invitation = await prisma.invitation.findUnique({
      where: { code },
    });
    if (invitation && !invitation?.usedAt) {
      //   update invitation with new email
      await prisma.invitation.update({
        where: { id: invitation.id },
        data: { email },
      });
    }
  }
}

export async function processInvitationUser({ email }) {
  //   get invitation by email
  const invitation = await prisma.invitation.findFirst({
    where: { email },
  });
  if (!invitation || invitation.userId) return;
  //   get user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) return;
  //   update user quota
  const quota = Math.max(user.quota, Number(invitation.quota));
  await prisma.user.update({
    where: { id: user.id },
    data: { quota },
  });
  //   update invitation
  await prisma.invitation.update({
    where: { id: invitation.id },
    data: { usedAt: new Date(), userId: user.id },
  });
  // return user
  return quota;
}
