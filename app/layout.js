import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ISGS | Imaginative Strong Global Sustainable",
  description: "Providing cutting-edge technology solutions through imaginative, strong, global, and sustainable approaches. Specializing in system integration, software development, and IT consulting.",
  keywords: ["technology solutions", "IT services", "system integration", "software development", "IT consulting", "imaginative", "strong", "global", "sustainable"],
  authors: [{ name: "ISGS Team" }],
  creator: "ISGS",
  publisher: "ISGS",
  openGraph: {
    title: "ISGS | Imaginative Strong Global Sustainable",
    description: "Providing cutting-edge technology solutions through imaginative, strong, global, and sustainable approaches.",
    url: "https://isgs.com",
    siteName: "ISGS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISGS | Imaginative Strong Global Sustainable",
    description: "Cutting-edge technology solutions with imaginative, strong, global, and sustainable methodologies.",
    creator: "@isgs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}