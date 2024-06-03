import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/components/modal-provider";
import CrispProvider from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "Genius app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CrispProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
