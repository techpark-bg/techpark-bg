import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techpark Engineering",
  description: "Engineering, Procurement & Construction",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
