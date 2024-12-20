"use client";
import LogoIcon from "@/assets/icons-svg/logo-icon-svg";
import MenuIcon from "@/assets/icons-svg/menu-icon-svg";
import { useState } from "react";
import Button from "../ui/button/button";

const headerItems = [
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
    <div className="container my-8 ">
      <div className="max-w-[1217px] py-4 px-6 bg-[#0e0e0e] rounded-full">
        <div className=" flex items-center justify-between rounded-full">
          <LogoIcon width={31} height={32} viewBox={"0 0 31 32"} />
          <div className="gap-4 hidden xl:flex shadow-[0px_-1px_1px_0px_rgba(255,255,255,0.03)_inset]">
            {headerItems.map((item) => (
              <a
                href={item.path}
                key={item.name}
                className="link text-[14px] leading-[20px] font-normal"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button className="hidden xl:inline-block xl:w-[109px] xl:rounded-full xl:h-[38px]">
            <span>Contact Us</span>
          </Button>

          <button onClick={toggleMenu} className="xl:hidden ">
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
            {headerItems.map((item) => (
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
