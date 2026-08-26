import type { Metadata } from "next";
import Script from "next/script";
import { Martian_Mono } from "next/font/google";
import "./globals.scss";
import { ScrollToHash } from "@/components/ScrollToHash/ScrollToHash";

const GA_MEASUREMENT_ID = "G-4JXJ2F4X8R";

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
