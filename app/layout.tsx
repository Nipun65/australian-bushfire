import type { Metadata } from "next";
import { Cousine } from "next/font/google";
import "./globals.css";

const cousine = Cousine({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Australian Bushfire",
  description: "Australian Bushfire data visulization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cousine.className}`}>{children}</body>
    </html>
  );
}
