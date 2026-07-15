import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "สภาเภสัชกรรม - ลงชื่อเข้าใช้เครือข่าย",
  description: "The Pharmacy Council of Thailand - Guest WiFi Login Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${sarabun.variable} ${sarabun.className}`}>
      <body>{children}</body>
    </html>
  );
}
