import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Сортовые пеларгонии",
  description: "Сортовые пеларгонии",
  //  icons: [{ rel: "shortcut icon", url: "../public/favicon.ico" }, { rel: "icon", url: "../public/favicon.ico" }]
  // <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head> */}
      {/* <link rel="shortcut icon" href={favicon} /> */}
      {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> */}
      {/* </Head> */}
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <main className="main"> {children}</main>
        {/* <div id="modal-root"></div> */}
      </body>
    </html>
  );
}
