"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-x-cursor");
    if (!cursor) return;

    const moveCursor = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX - 24}px`;
      cursor.style.top = `${event.clientY - 24}px`;
      cursor.style.display = window.matchMedia("(min-width: 768px)").matches
        ? "block"
        : "none";
    };
    const hideCursor = () => {
      cursor.style.display = "none";
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-9999 hidden h-12 w-12 md:block"
      id="custom-x-cursor"
    >
      <Image
        alt=""
        className="h-12 w-12 select-none object-contain"
        draggable={false}
        height={48}
        src="/tedunand.webp"
        width={48}
      />
    </div>
  );
}
