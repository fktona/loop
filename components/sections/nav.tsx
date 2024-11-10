"use client";

import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoBagHandle } from "react-icons/io5";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-black"
      } text-white px-4 md:px-8 lg:px-[100px] py-4`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex gap-[1px] items-center justify-start">
          <span className="font-bold text-2xl md:text-3xl">L</span>
          <span className="w-5 md:w-6 relative aspect-square bg-white rounded-full"></span>
          <span className="w-5 md:w-6 relative aspect-square rounded-full border border-white"></span>
          <span className="font-bold text-2xl md:text-3xl">P</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8">
          <NavLink href="#men">MEN</NavLink>
          <NavLink href="#women">WOMEN</NavLink>
          <NavLink href="#sale">SALE</NavLink>
          <NavLink href="#others">OTHERS</NavLink>
        </div>

        {/* Mobile and tablet menu */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full w-full bg-black/95 backdrop-blur-md pt-20 px-8">
            <NavLink href="#men" mobile onClick={() => setIsMenuOpen(false)}>
              MEN
            </NavLink>
            <NavLink href="#women" mobile onClick={() => setIsMenuOpen(false)}>
              WOMEN
            </NavLink>
            <NavLink href="#sale" mobile onClick={() => setIsMenuOpen(false)}>
              SALE
            </NavLink>
            <NavLink href="#others" mobile onClick={() => setIsMenuOpen(false)}>
              OTHERS
            </NavLink>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <NavButton icon={<Search size={16} />} text="SEARCH" />
          <NavButton icon={<IoBagHandle size={16} />} text="CART" />
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  mobile = false,
  onClick = () => {},
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-all duration-300 ease-in-out
        ${
          mobile
            ? "block py-4 border-b border-white/20 hover:pl-2"
            : "relative overflow-hidden group"
        }`}
      onClick={onClick}
    >
      {children}
      {!mobile && (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
      )}
    </Link>
  );
}

function NavButton({ icon, text }: { icon: React.ReactElement; text: string }) {
  return (
    <div className="flex items-center gap-1 group">
      <button className="text-sm font-medium transition-colors duration-300 group-hover:text-gray-300">
        {text}
      </button>
      <div className="w-6 aspect-square rounded-full flex items-center justify-center bg-white group-hover:bg-gray-200 transition-colors duration-300">
        {React.cloneElement(icon, { className: "text-black" })}
      </div>
    </div>
  );
}
