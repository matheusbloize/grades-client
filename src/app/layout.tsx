import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AwardContextProvider } from "@/contexts/AwardContext";
import { GradeContextProvider } from "@/contexts/GradeContext";

const inknut = Inknut_Antiqua({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body
        className={`${inknut.className} bg-[#FDFFFA] flex flex-col text-[#010101] overflow-y-hidden`}
      >
        <Header />
        <AwardContextProvider>
          <GradeContextProvider>{children}</GradeContextProvider>
        </AwardContextProvider>
        <Footer />
      </body>
    </html>
  );
}
