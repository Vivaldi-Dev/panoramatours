import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <title>Panorama Tours - Viagens e Turismo</title>
        <meta name="description" content="Explore o mundo com a Panorama Tours. Panorama, PanoramaTours, panoramatours - sua agência de viagens confiável para destinos incríveis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Panorama, Panorama Tours, panoramatours, panorama tours, viagens, turismo, pacotes de viagem, explorar o mundo, destinos turísticos" />
        <meta name="author" content="Panorama Tours" />


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>

        <Header />

        <main className="flex-1">

          {children}

        </main>

        <Footer />
      </body>
    </html>
  );
}
