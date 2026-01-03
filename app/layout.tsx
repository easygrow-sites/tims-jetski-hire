import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tims Jetski Hire | Gold Coast Jetski Rental & Tours",
  description: "Experience the thrill of the Gold Coast waters with Tims Jetski Hire. Premium jetski rentals, guided tours, and lessons. Book your adventure today!",
  keywords: "jetski hire, jetski rental, gold coast, wave runner, jetski tours, water sports",
  openGraph: {
    title: "Tims Jetski Hire | Gold Coast Jetski Rental & Tours",
    description: "Premium jetski rentals and tours on the Gold Coast. Book your adventure today!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
