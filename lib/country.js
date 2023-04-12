import requestIp from "request-ip";
import IPinfoWrapper from "node-ipinfo";
import prisma from "lib/prisma";
const ipinfoWrapper = new IPinfoWrapper(process.env.IPINFO_TOKEN);

export default async function getUserCountryWithUpdate(req, user) {
  try {
    let clientIp, countryCode;
    console.log(`Saving user country`);
    clientIp = requestIp.getClientIp(req);
    clientIp =
      process.env.NODE_ENV === "production"
        ? requestIp.getClientIp(req)
        : "213.179.246.240";
    console.log(`Client IP: ${clientIp}`);
    const ipInfo = await ipinfoWrapper.lookupIp(clientIp);
    console.log(ipInfo);
    countryCode = ipInfo.countryCode || ipInfo.country || "";
    // save country code
    if (countryCode) {
      console.log(
        `Saving country code: ${countryCode} for user: ${user.email}`
      );
      console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
      await prisma.user.update({
        where: { email: user.email },
        data: { country: countryCode },
      });
      return countryCode;
    }
  } catch (error) {
    console.log(`Unable to get user country. Error: ${error.message}`);
    return null;
  }
}
