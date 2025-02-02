"use client";
import React, { useEffect, useState } from "react";

export default function ScrollingBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundImage: `
          linear-gradient(
            ${45 + scrollY * 0.05}deg,
            rgba(0, 83, 140, 0.9) 0%,
            rgba(0, 140, 140, 0.7) 50%,
            rgba(0, 83, 140, 0.9) 100%
          )
        `,
        transform: `translateY(-${scrollY * 0.2}px)`,
        transition: "transform 0.2s ease-out",
        opacity: 0.15,
      }}
    />
  );
}
