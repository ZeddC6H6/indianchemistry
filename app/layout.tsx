import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Indian Chemistry Reaction Intelligence",
  description: "NCERT + MS Chauhan + Vlayden ke liye smart chemistry platform"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto min-h-screen w-full max-w-7xl px-4 pb-16 pt-8 md:px-8">{children}</main>
      </body>
    </html>
  );
}
