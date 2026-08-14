import type { Metadata } from "next";
import { title, description } from "./constants";
import { inter, geistSans, geistMono } from "./fonts";
import Header from "./components/Header/Header";
import "./variables.css";
import "./globals.css";

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
