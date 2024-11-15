"use client";
import LogoIcon from "@/icon/logo-icon-svg";
import MenuIcon from "@/icon/menu-icon-svg";
import { useState } from "react";

const menuItems = [
  { name: "Home", path: "/#!" },
  { name: "About", path: "/#!" },
  { name: "Product", path: "/#!" },
  { name: "Pricing", path: "/#!" },
  { name: "Blog", path: "/#!" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-4 px-6">
      <div className="w-full h-16 bg-[#0e0e0e] rounded-full">
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#141414] rounded-full">
          <LogoIcon width={31} height={32} viewBox={"0 0 31 32"} />
          <button onClick={toggleMenu} className="xl:hidden">
            <MenuIcon width={24} height={24} viewBox={"0 0 24 24"} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          />
          <div className="fixed inset-y-0 right-0 text-center bg-black text-white w-full shadow-lg mt-2">
            {menuItems.map((item) => (
              <a
                href={item.path}
                key={item.name}
                className="block px-4 py-2  hover:bg-slate-700 hover:bg-gradient-to-r from-[#FCD5BF] to-[#FFA9CC]"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-5" onClick={toggleMenu}>
              Back
            </div>
          </div>
        </>
      )}
    </div>
  );
}
