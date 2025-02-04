"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ScrollingBackground() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lightGradient = `
    linear-gradient(
      ${45 + scrollY * 0.05}deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(249, 250, 251, 0.7) 50%,
      rgba(255, 255, 255, 0.9) 100%
    )
  `;

  const darkGradient = `
    linear-gradient(
      ${45 + scrollY * 0.05}deg,
      rgba(0, 83, 140, 0.9) 0%,
      rgba(0, 140, 140, 0.7) 50%,
      rgba(0, 83, 140, 0.9) 100%
    )
  `;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundImage: theme === 'dark' ? darkGradient : lightGradient,
        transform: `translateY(-${scrollY * 0.2}px)`,
        transition: "transform 0.2s ease-out, background-image 0.3s ease-in-out",
        opacity: 0.15,
      }}
    />
  );
}
