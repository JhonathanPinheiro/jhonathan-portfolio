import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ContactForm, Footer, Header } from "../components/molecules";
import { Toaster } from "@/components/atoms";

export const metadata = {
  title: {
    default: 'Home',
    template: "%s | Jhonathan",
  },
  icons: [
    {
      url: '/favicon.svg'
    }
  ]
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster/>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
