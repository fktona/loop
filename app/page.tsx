import Flash from "@/components/sections/flash";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Lifestyle from "@/components/sections/lifestyle";
import Nav from "@/components/sections/nav";
import { Navbar } from "@/components/sections/navbar";
import Product from "@/components/sections/product";
import Sales from "@/components/sections/sales";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto  bg-[#FFFFFF] ">
      <Navbar />
      <Hero />
      <Product />
      <Lifestyle />
      <Sales />
      <Flash />
      <Footer />
    </div>
  );
}
