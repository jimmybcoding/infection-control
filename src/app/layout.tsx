import type { Metadata } from "next";
import { Inter, Libre_Barcode_128_Text } from "next/font/google";
import "./globals.css";
import Nav from "./Nav/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

const lora = Libre_Barcode_128_Text({ subsets: ["latin"],  variable: '--font-lora', weight: "400" }); 

export const metadata: Metadata = {
  title: "Infection Control Quality Indicators",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lora.variable} bg-slate-200`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
