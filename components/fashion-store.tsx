"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FashionStore() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 30,
    seconds: 16,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Header */}
      <header className="border-b">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="flex space-x-4">
            <Link href="#men" className="text-sm">
              MEN
            </Link>
            <Link href="#women" className="text-sm">
              WOMEN
            </Link>
            <Link href="#sale" className="text-sm">
              SALE
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm">SEARCH</button>
            <button className="text-sm">CART</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="font-['Neue_Montreal'] text-6xl tracking-[-0.04em] leading-[110%] mb-8">
          CHOOSE <span className="text-[#1236DB]">YOUR</span>
          <br />
          FASHION STYLE!
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-12">
          <Image
            src="/placeholder.svg?height=400&width=300"
            height={400}
            width={300}
            alt="Fashion style 1"
            className="object-cover"
          />
          <Image
            src="/placeholder.svg?height=400&width=300"
            height={400}
            width={300}
            alt="Fashion style 2"
            className="object-cover"
          />
          <Image
            src="/placeholder.svg?height=400&width=300"
            height={400}
            width={300}
            alt="Fashion style 3"
            className="object-cover"
          />
        </div>
        <div className="flex justify-center space-x-8 mb-12">
          {[
            "amazon",
            "paypal",
            "aliexpress",
            "zalando",
            "google",
            "jacobs",
          ].map((brand) => (
            <Image
              key={brand}
              src="/placeholder.svg?height=30&width=80"
              height={30}
              width={80}
              alt={brand}
              className="opacity-50"
            />
          ))}
        </div>
        <p className="text-center text-lg font-['Graphik_LCG'] leading-[150%] max-w-2xl mx-auto">
          Since 1987, LOOP has been founded and loved. Continues to create a new
          fashion trends to be the finest products.
        </p>
      </section>

      {/* Product Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-['Neue_Montreal'] text-4xl tracking-[-0.02em] leading-[120%] mb-8">
          Our new collection of sapphire necklaces
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=500&width=400"
              height={500}
              width={400}
              alt="Sapphire necklace model"
              className="object-cover"
            />
          </div>
          <Card className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-['Neue_Montreal'] text-2xl mb-2">
                  Sapphire necklace
                </h3>
                <p className="font-['Graphik_LCG'] text-gray-600">
                  A necklace that combines purity with style
                </p>
              </div>
              <span className="text-[#1236DB] text-2xl font-bold">$55</span>
            </div>
            <Button className="w-full bg-[#1236DB] text-white">
              ADD TO CART
            </Button>
          </Card>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="relative h-[500px] mb-12">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          fill
          alt="Lifestyle"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="font-['Neue_Montreal'] text-5xl tracking-[-0.04em] leading-[110%] mb-4">
              Get everything you need for your fashion look and lifestyle.
            </h2>
            <Button className="bg-white text-black hover:bg-gray-100">
              SHOP NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-['Neue_Montreal'] text-4xl tracking-[-0.02em]">
            The early bird sale
          </h2>
          <Button variant="outline">SEE MORE PRODUCT</Button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Image
            src="/placeholder.svg?height=600&width=500"
            height={600}
            width={500}
            alt="Women's black crop-top"
            className="object-cover"
          />
          <div>
            <h3 className="font-['Neue_Montreal'] text-3xl mb-4">
              Women's black crop-top and leather pants
            </h3>
            <p className="font-['Graphik_LCG'] text-gray-600 mb-4">
              The perfect outfit for any occasion
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold">$123</span>
              <span className="text-gray-500 line-through">$200</span>
            </div>
            <div className="flex space-x-4">
              <Button className="flex-1 bg-[#1236DB]">BUY NOW</Button>
              <Button variant="outline" className="flex-1">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Timer */}
      <section className="bg-[#0A0A0A] text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-['Neue_Montreal'] text-4xl tracking-[-0.02em] mb-8">
            Check it out today's flashsale
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-4xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-4xl">:</div>
            <div className="text-4xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-4xl">:</div>
            <div className="text-4xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
          <Button className="mx-auto mt-8 block bg-white text-black hover:bg-gray-100">
            CHECK COLLECTION
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-['Neue_Montreal'] text-lg mb-4">ABOUT</h3>
            <ul className="space-y-2 font-['Graphik_LCG']">
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Store</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-['Neue_Montreal'] text-lg mb-4">COLLECTION</h3>
            <ul className="space-y-2 font-['Graphik_LCG']">
              <li>
                <Link href="#">Men and Women</Link>
              </li>
              <li>
                <Link href="#">Accessories</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-['Neue_Montreal'] text-lg mb-4">CONTACT</h3>
            <address className="font-['Graphik_LCG'] not-italic">
              2545 Santa Valley,
              <br />
              California USA
            </address>
          </div>
          <div>
            <h3 className="font-['Neue_Montreal'] text-lg mb-4">SOCIAL</h3>
            <ul className="space-y-2 font-['Graphik_LCG']">
              <li>
                <Link href="#">INSTAGRAM</Link>
              </li>
              <li>
                <Link href="#">FACEBOOK</Link>
              </li>
              <li>
                <Link href="#">YOUTUBE</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
