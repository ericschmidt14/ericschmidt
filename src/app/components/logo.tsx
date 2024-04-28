"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Logo() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const logo = document.getElementById("logo")!;
    logo.style.transform = `rotate(-${window.scrollY / 3}deg)`;
  };

  return (
    <div className="fixed top-2 z-5 w-full flex justify-center items-center mix-blend-difference">
      <Image
        id="logo"
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={200}
        className="cursor-pointer"
        onClick={() => {
          document.querySelector("#top")!.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />
      <Image
        id="coffee"
        src="/coffee.svg"
        alt="Coffee"
        width={160}
        height={160}
      />
    </div>
  );
}
