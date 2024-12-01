"use client";
import { useEffect, useState } from "react";

export default function Scroll() {
  const [scrolled, setScrolled] = useState("0");

  const handleScroll = () => {
    const top = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrolled(`${(top / height) * 100}%`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[2px]">
      <div
        className="relative top-0 left-0 h-full bg-[#F58A07]"
        style={{ width: scrolled }}
      />
    </div>
  );
}
