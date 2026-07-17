import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BSM Logistic | Warehouse Management System",
  description: "Dashboard Warehouse Management System BSM Mandiri Logistic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
