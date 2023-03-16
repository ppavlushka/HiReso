import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <AuthProvider session={session}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <ReCaptchaProvider
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          >
            <Component {...pageProps} />
          </ReCaptchaProvider>
        </ThemeProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}
