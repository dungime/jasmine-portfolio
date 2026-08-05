import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.scss";
import { ScrollToHash } from "@/components/ScrollToHash/ScrollToHash";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasmine — Frontend Developer",
  description: "Portfolio of Jasmine, a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={martianMono.variable}>
      <body>
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
