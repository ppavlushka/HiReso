const axios = require("axios");

export async function verifyRecaptchaV3Token(token, action) {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
      {},
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      }
    );
    const { data } = response;
    console.log("Recapcha response:", data);
    return data.success && data.action === action && data.score >= 0.5;
  } catch (err) {
    console.error(err);
    return false;
  }
}
