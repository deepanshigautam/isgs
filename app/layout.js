import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className="scroll-smooth">
       <head>
        <link rel="icon" href="/assets/isgs_logo.png" type="image/png" />
      </head>
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="overflow-x-hidden w-full">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}