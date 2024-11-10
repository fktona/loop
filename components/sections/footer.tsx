"use client";

import { Moon, MoveRight, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Component() {
  return (
    <footer className="w-full border-t">
      <style jsx global>{`
        .hover-underline-animation {
          display: inline-block;
          position: relative;
        }
        .hover-underline-animation::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: currentColor;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .hover-underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover-underline-animation">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-underline-animation">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-underline-animation">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-underline-animation">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Collection</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover-underline-animation">
                  Sale of the Day
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-underline-animation">
                  Men and Women
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-underline-animation">
                  Kids Collection
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-underline-animation">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="mailto:contact_us@loop.co.us"
                  className="hover-underline-animation"
                >
                  contact_us@loop.co.us
                </Link>
              </li>
              <li className="max-w-[200px]">
                23433 Sunrise Valley, California 12838
              </li>
            </ul>
          </div>
          <div className="md:text-right">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter group"
            >
              <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                L
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
                Ō
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
                Ō
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                P
              </span>
            </Link>
            <p className="mt-8 text-sm">
              Since 1987, LOOP has been founded and loved. Continues to create a
              new fashion trends to be the finest products.
            </p>
            <div className="flex justify-between items-center min-h-[150px] mt-14">
              <div className="flex flex-col justify-between min-h-[150px] items-start">
                <Link
                  href="#"
                  className="block text-sm hover-underline-animation"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover-underline-animation"
                >
                  FACEBOOK
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover-underline-animation"
                >
                  TIKTOK SHOP
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover-underline-animation"
                >
                  YOUTUBE
                </Link>
              </div>
              <div className="flex  items-center justify-center -rotate-90 sm:hidden lg:flex">
                <Button className="w-10  h-10 text-white aspect-square rounded-full flex items-center justify-center  mr-6 relative z-30">
                  <MoveRight />
                </Button>
                <span className="text-[14px] ">Back to the top</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-8 mt-8 border-t sm:flex-row">
          <p className="text-xs transition-colors duration-300 ease-in-out hover:text-gray-600 dark:hover:text-gray-300">
            Copyright © 2023 LOOP. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-xs hover-underline-animation transition-colors duration-300 ease-in-out hover:text-gray-600 dark:hover:text-gray-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-xs hover-underline-animation transition-colors duration-300 ease-in-out hover:text-gray-600 dark:hover:text-gray-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
