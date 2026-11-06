import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adetade Hospital | Ado-Ekiti",
  description:
    "Welcome to Adetade Hospital, 55 Okebola Street, Ado-Ekiti, Ekiti State, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
