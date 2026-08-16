import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Alex Dev - Portfolio 2024",
  description: "Full Stack Developer Portfolio — Frontend, Backend, React Native, Node.js, UI/UX Engineering, Cloud Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} font-[family-name:var(--font-plus-jakarta)] bg-[#f3f4f6] text-[#18181b] selection:bg-[#1a56db] selection:text-white pb-20`}
      >
        {children}
      </body>
    </html>
  );
}