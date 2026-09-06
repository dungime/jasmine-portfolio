import type { Metadata } from "next";
import Script from "next/script";
import { Martian_Mono } from "next/font/google";
import "./globals.scss";
import { ScrollToHash } from "@/components/ScrollToHash/ScrollToHash";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { withBasePath } from "@/lib/base-path";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const title = "Jasmine — Frontend Developer";
const description = "Portfolio of Jasmine, a frontend developer.";
const profileImage = withBasePath("/assets/images/profile-2.jpg");

export const metadata: Metadata = {
  metadataBase: new URL("https://dungime.github.io"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [profileImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [profileImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={martianMono.variable}>
      <body>
        {GA_MEASUREMENT_ID && (
          <>
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
          </>
        )}
        <ScrollToHash />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
