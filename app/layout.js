import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Nunu Sharing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
