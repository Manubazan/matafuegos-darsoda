import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Analytics from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://matafuegosdarsoda.com.ar"),
  title: {
    default: "Matafuegos Dar Soda SRL | Venta y Recarga en Rosario",
    template: "%s | Matafuegos Dar Soda SRL",
  },
  description:
    "Venta, recarga y mantenimiento de matafuegos en Rosario, Santa Fe. Mas de 25 anos de experiencia. Matafuegos ABC, CO2, senaletica de seguridad. Servicio profesional certificado IRAM.",
  keywords: [
    "matafuegos rosario",
    "extintores rosario",
    "recarga matafuegos rosario",
    "venta matafuegos santa fe",
    "matafuegos abc",
    "matafuegos co2",
    "senaletica seguridad rosario",
    "seguridad contra incendios",
    "matafuegos drago",
    "matafuegos norbeo",
    "mantenimiento extintores",
    "matafuegos para empresas",
    "matafuegos vehiculares",
  ],
  authors: [{ name: "Matafuegos Dar Soda SRL" }],
  creator: "Matafuegos Dar Soda SRL",
  publisher: "Matafuegos Dar Soda SRL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://matafuegosdarsoda.com.ar",
    siteName: "Matafuegos Dar Soda SRL",
    title: "Matafuegos Dar Soda SRL | Venta y Recarga en Rosario",
    description:
      "Venta, recarga y mantenimiento de matafuegos en Rosario. Mas de 25 anos protegiendo vidas. Certificacion IRAM.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matafuegos Dar Soda SRL - Seguridad contra incendios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matafuegos Dar Soda SRL | Venta y Recarga en Rosario",
    description:
      "Venta, recarga y mantenimiento de matafuegos en Rosario. Mas de 25 anos de experiencia.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "TU_CODIGO_GOOGLE_SEARCH_CONSOLE",
  },
  alternates: {
    canonical: "https://matafuegosdarsoda.com.ar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C0392B" />
        <meta name="geo.region" content="AR-S" />
        <meta name="geo.placename" content="Rosario" />
        <meta name="geo.position" content="-32.9468;-60.6393" />
        <meta name="ICBM" content="-32.9468, -60.6393" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://matafuegosdarsoda.com.ar",
              name: "Matafuegos Dar Soda SRL",
              image: "https://matafuegosdarsoda.com.ar/images/og-image.jpg",
              description:
                "Venta, recarga y mantenimiento de matafuegos en Rosario, Santa Fe. Mas de 25 anos de experiencia.",
              url: "https://matafuegosdarsoda.com.ar",
              telephone: "+54-341-4409972",
              email: "info@matafuegosdarsoda.com.ar",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Balcarce y Jujuy",
                addressLocality: "Rosario",
                addressRegion: "Santa Fe",
                postalCode: "2000",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.9468,
                longitude: -60.6393,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              priceRange: "$$",
              currenciesAccepted: "ARS",
              paymentAccepted: "Efectivo, Transferencia, Tarjetas",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -32.9468,
                  longitude: -60.6393,
                },
                geoRadius: "50000",
              },
              sameAs: [
                "https://www.facebook.com/matafuegosdarsoda",
                "https://www.instagram.com/matafuegosdarsoda",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Productos y Servicios",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Venta de Matafuegos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Recarga de Matafuegos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mantenimiento de Extintores",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Senaletica de Seguridad",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
