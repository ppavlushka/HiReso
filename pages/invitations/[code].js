import React from "react";
import Layout from "../../components/Layout";
import prisma from "lib/prisma";

export default function Invitations({ invitation }) {
  return (
    <Layout mainClassName="flex items-center" invidationCode={invitation?.code}>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {invitation ? (
          <div>
            Welcome! Please, click &quot;Get Started&quot; to register an
            account
          </div>
        ) : (
          <div className="text-danger text-xl">
            Invitation link is corrupted or has been expired
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { code } = context.query;
  //  check if code is valid
  const invitation = await prisma.invitation.findUnique({
    where: { code },
  });
  if (!invitation || invitation?.usedAt) {
    return {
      props: {
        invitation: null,
      },
    };
  }

  // Pass data to the page via props
  return { props: { invitation } };
}
