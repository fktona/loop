"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 md:px-[50px]  lg:px-[70px]"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter group">
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
        <div className="hidden md:flex space-x-6">
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <NavIconButton icon={<Search className="h-5 w-5" />} label="Search" />
          <NavIconButton
            icon={<ShoppingBag className="h-5 w-5" />}
            label="Cart"
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative overflow-hidden group"
              >
                <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <motion.div
                  className="absolute inset-0 bg-gray-200 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                <MobileNavLink href="/men">Men</MobileNavLink>
                <MobileNavLink href="/women">Women</MobileNavLink>
                <MobileNavLink href="/sale">Sale</MobileNavLink>
                <MobileNavLink href="/collections">Collections</MobileNavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 group"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute left-0 bottom-0 w-full h-1 bg-gray-900 rounded-full"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.span
        className="absolute inset-0 bg-gray-100 rounded-md -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-lg font-medium text-gray-700 hover:text-gray-900 group"
    >
      <motion.span
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.span>
      <motion.span
        className="block h-0.5 bg-gray-900"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </Link>
  );
}

function NavIconButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gray-200 rounded-full"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="relative z-10"
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {icon}
      </motion.div>
      <span className="sr-only">{label}</span>
    </Button>
  );
}
