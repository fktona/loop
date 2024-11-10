import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const graphik = localFont({
  src: "./fonts/GraphikLCG-Regular.ttf",
  variable: "--font-graphik",
  weight: "100 900",
});
const neue = localFont({
  src: "./fonts/Neue.otf",
  variable: "--font-neue",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${graphik.variable} ${neue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
