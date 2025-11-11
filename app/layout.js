import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Spice Table | Authentic Indian Restaurant in Bangalore",
  description:
    "Dine in or order from The Spice Table — a modern Indian restaurant serving authentic flavors with a contemporary touch.",
  keywords: [
    "Restaurant Bangalore",
    "Indian cuisine",
    "Butter chicken",
    "Paneer tikka",
    "Dining Bangalore",
  ],
  openGraph: {
    title: "The Spice Table | Modern Indian Dining",
    description: "Experience authentic Indian flavors at The Spice Table.",
    url: "https://the-spice-table.vercel.app",
    siteName: "The Spice Table",
    images: [
      {
        url: "/images/hero-bg.png", 
        width: 1200,
        height: 630,
        alt: "The Spice Table Restaurant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
