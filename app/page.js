'use client';

import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
      <HeroSection/>
      <Footer/>
    </>
  );
}