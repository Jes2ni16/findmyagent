import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Find My Agent ",
  description: "Featuring trusted agents who are dedicated to ensuring a smooth transaction, making it easier for you.",
  openGraph: {
    title: "Find My Agent",
    description: "Featuring trusted agents who are dedicated to ensuring a smooth transaction, making it easier for you.",
    images: ['https://findmyagent.net/fma-logo2.webp'],
    url: "https://findmyagent.net", // Replace with your website URL
    type: "website",
 // Replace with your image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
