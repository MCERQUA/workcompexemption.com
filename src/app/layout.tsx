import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "workers comp exemption",
    "workers compensation exemption",
    "WC exemption Florida",
    "Florida workers comp exemption",
    "Arizona WC exemption",
    "Texas workers comp exemption",
    "sole proprietor workers comp exemption",
    "LLC workers comp exemption",
    "corporate officer exemption",
    "contractor workers comp exemption",
    "exemption renewal",
    "independent contractor exemption",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Workers' compensation exemption filing for contractors — Florida DFS certificates, Arizona ICA exemptions, Texas non-subscriber guidance, sole proprietor, LLC, and corporate officer exemptions. Licensed all 50 states. 15-minute consultations.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — WC exemption filing for contractors` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Workers' comp exemption filing for contractors. Florida, Arizona, Texas, sole proprietor, LLC, corporate officer, and renewal — filed correctly for all 50 states. 15-minute consultations.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Florida Workers Compensation Exemption Filing",
      "Arizona ICA Workers Compensation Exemption",
      "Texas Non-Subscriber Workers Compensation Guidance",
      "Contractor Workers Compensation Exemption",
      "Sole Proprietor Workers Compensation Exemption",
      "LLC Member Workers Compensation Exemption",
      "Corporate Officer Workers Compensation Exemption",
      "Workers Compensation Exemption Renewal",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
