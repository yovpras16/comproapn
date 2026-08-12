"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { getImagePath } from "../../../lib/utils";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Beranda", href: "#home", current: true },
  { name: "Tentang Kami", href: "#about", current: false },
  { name: "Visi & Misi", href: "#visimisi", current: false },
  { name: "Layanan & Produk", href: "#services", current: false },
  { name: "Keunggulan", href: "#advantages", current: false },
  { name: "Kontak", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeHref, setActiveHref] = React.useState("#home");
  const isManualClickRef = React.useRef(false);
  const clickTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    isManualClickRef.current = true;

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    clickTimerRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 800);
  };

  // Deteksi section aktif saat halaman di-scroll (diabaikan jika sedang klik manual)
  React.useEffect(() => {
    const handleScroll = () => {
      if (isManualClickRef.current) return;

      const sectionIds = navigation.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHref(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:py-4 lg:px-6">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center cursor-pointer">
                <Link href="/" className="flex items-center gap-3">
                  <img
                    src={getImagePath("/assets/logo/apn-official-logo.png")}
                    alt="PT Arta Perdana Nusantara"
                    className="h-10 sm:h-12 w-auto object-contain shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-sm sm:text-base font-extrabold text-navyblue leading-tight tracking-tight whitespace-nowrap">
                      ARTA PERDANA NUSANTARA
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-darkgray/90 tracking-wide leading-tight whitespace-nowrap mt-0.5">
                      Retail, Distribution & Supply Partner
                    </span>
                  </div>
                </Link>
              </div>

              {/* LINKS DENGAN HOVER & SELECT INSTAN SAAT KLIK */}
              <div className="hidden lg:block m-auto ml-8 lg:ml-12 xl:ml-16">
                <div className="flex items-center space-x-2 xl:space-x-4">
                  {navigation.map((item) => {
                    const isSelected = activeHref === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className={classNames(
                          isSelected
                            ? "text-blue font-extrabold border-b-2 border-blue bg-lightblue/40"
                            : "text-navyblue/80 hover:text-blue hover:border-b-2 hover:border-blue/40 font-bold",
                          "px-3.5 py-2 text-base whitespace-nowrap rounded-t-lg transition-all duration-200"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="bg-blue hover:bg-navyblue text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-md text-sm tracking-wide"
              >
                Hubungi Kami
              </a>
            </div>

            {/* DRAWER ICON FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 text-navyblue cursor-pointer"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
