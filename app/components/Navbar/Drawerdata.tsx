import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Beranda', href: '#home', current: true },
  { name: 'Tentang Kami', href: '#about', current: false },
  { name: 'Visi & Misi', href: '#visimisi', current: false },
  { name: 'Layanan & Produk', href: '#services', current: false },
  { name: 'Keunggulan', href: '#advantages', current: false },
  { name: 'Kontak', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black font-semibold' : 'text-bluegray hover:text-black',
                  'px-2 py-2 text-lg font-medium block'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <a 
              href="#contact" 
              className="block text-center bg-blue text-white font-medium py-3 px-4 rounded-lg shadow-sm"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
