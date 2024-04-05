"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import dark from "@/public/dark.svg";
import light from "@/public/light.svg";
import audioclick from "@/public/click.mp3";

const Toggle = () => {
  const [theme, setTheme] = useState("");

  const handleClick = (value?: string) => {
    if (theme === "light" || value === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    if (!value) new Audio(audioclick).play();
  };

  useEffect(() => {
    const value = localStorage.getItem("theme");
    handleClick(value as string);
  }, []);

  return (
    <button
      className="rounded p-1 bg-white dark:bg-[#171717] shadow-md items-center flex justify-center right-2 top-2 absolute overflow-hidden"
      onClick={() => handleClick()}
    >
      {!!theme && (
        <Image
          key={Math.random()}
          src={theme === "dark" ? light : dark}
          alt="icon"
          className="xs:size-6 sm:size-7 animate-toggle"
        />
      )}
    </button>
  );
};
export default Toggle;
