"use client";
import { useEffect, useState } from "react";
import Flash from "@/components/sections/flash";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Lifestyle from "@/components/sections/lifestyle";
import { Navbar } from "@/components/sections/navbar";
import Product from "@/components/sections/product";
import Sales from "@/components/sections/sales";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto bg-[#FFFFFF]">
      <Navbar />
      <Hero />
      {showContent && (
        <div className="animate-fade-in">
          <Product />
          <Lifestyle />
          <Sales />
          <Flash />
          <Footer />
        </div>
      )}
    </div>
  );
}
