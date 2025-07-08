import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MonkCI - Up to 8x Faster CI/CD, 75% Cost Savings | GitHub-Compatible",
  description: "MonkCI delivers up to 8x faster builds, 20x faster cache, and 75% cost savings at GitHub pricing. AI-powered log insights and instant SSH access.",
  icons: {
    icon: "/favicon.png",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
