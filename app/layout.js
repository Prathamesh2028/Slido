import localFont from "next/font/local";
import "./globals.css";
import {AppWrapper } from ".";

export const metadata = {
  title: "Slido",
  description: "CReated by Khose",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
        {children}

        </AppWrapper>
      </body>
    </html>
  );
}
