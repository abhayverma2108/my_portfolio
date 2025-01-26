import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhay Verma | Portfolio",
  description: "Personal portfolio of Abhay Verma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative`}>
          <div className="bg-[#CF9FFF] absolute top-[-6rem] -z-10 right-[1rem] h-[51.25rem] w-[41.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-[#F08000] absolute top-[10rem] -z-10 left-[-10rem] h-[31.25rem] w-[50.25rem] rounded-full blur-[14rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:elft-[-5rem] "></div>
        {children}
      </body>
    </html>
  );
}
