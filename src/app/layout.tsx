import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const inknut = Inknut_Antiqua({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Great Brain School",
  description: "A science-based school to develop anyone through effort",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inknut.className}>{children}</body>
    </html>
  );
}
