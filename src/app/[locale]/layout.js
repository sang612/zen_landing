import { BigLayout } from "@/components/BigLayout";
import { Footer } from "@/components/Footer";
import { ScrollButton } from "@/components/ScrollButton";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "jp" }];
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
  }

  return (
    <html lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <BigLayout component={children} />
          <Footer />
          <ScrollButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
