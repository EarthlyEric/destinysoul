import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Favicon from "@/components/metadata/favicon";


export const metadata: Metadata = {
  title: "DestinySoul Studio",
  description: "DestinySoul Studio 官方網站，",
  keywords: ["DestinySoul", "DestinySoul Studio", "EarthlyEric6"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Favicon />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
