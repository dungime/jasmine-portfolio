import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono, Martian_Mono } from "next/font/google";
import "./globals.scss";
import { ScrollToHash } from "@/components/ScrollToHash/ScrollToHash";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { defaultLocale } from "@/i18n/config";
import { LOCALE_BOOT_SCRIPT, LocaleProvider } from "@/i18n/LocaleProvider";
import { withBasePath } from "@/lib/base-path";
import messages from "../../messages/en.json";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

// Vietnamese-capable face: body font when the page is in Vietnamese (see
// globals.scss) and always for the language switcher.
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "vietnamese"],
  preload: false,
});

// Metadata is baked into the static HTML, so it stays in the default locale;
// the language switch only changes the page content.
const { title, description } = messages.meta;
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
    // suppressHydrationWarning: LOCALE_BOOT_SCRIPT may change lang/class
    // before React hydrates.
    <html
      lang={defaultLocale}
      className={`${martianMono.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: LOCALE_BOOT_SCRIPT }} />
      </head>
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
        <LocaleProvider>
          {children}
          {/* After {children} so Navbar's effect (measures the navbar height
              and sets scroll-padding-top) runs before this one — React fires
              mount effects in tree order, and ScrollToHash needs that offset
              in place before it scrolls to a URL hash on load. */}
          <ScrollToHash />
          <BackToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
