"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const readyMessage = "Get Ready";

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [readyText, setReadyText] = useState("");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const hideLoading = () => {
      hideTimer = setTimeout(() => setIsLoading(false), 1800);
    };

    if (document.readyState === "complete") {
      hideLoading();
    } else {
      window.addEventListener("load", hideLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", hideLoading);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (!isReady || readyText.length >= readyMessage.length) {
      return;
    }

    const typeTimer = setTimeout(() => {
      setReadyText(readyMessage.slice(0, readyText.length + 1));
    }, 70);

    return () => clearTimeout(typeTimer);
  }, [isReady, readyText]);

  const revealButton = () => {
    setReadyText("");
    setIsReady(true);
  };

  const openComingSoon = () => setShowComingSoon(true);

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black font-sans text-white">
      {showComingSoon ? (
        <section
          aria-labelledby="coming-soon-title"
          className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="coming-soon-glow absolute left-1/2 top-1/2 h-88 w-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e31b23]/10 blur-[100px]" />
            <div className="coming-soon-line absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#e31b23]/70 to-transparent" />
          </div>

          <div className="coming-soon-content relative z-10">
            <p className="coming-soon-item mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#e31b23] sm:text-sm">
              TEDx Universitas Andalas
            </p>
            <h1
              id="coming-soon-title"
              className="coming-soon-item text-5xl font-bold tracking-[-0.06em] sm:text-7xl md:text-8xl"
            >
              Coming <span className="text-[#e31b23]">Soon</span>
            </h1>
            <p className="coming-soon-item mx-auto mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Something exciting is on the way.
            </p>
            <button
              aria-label="Back to home"
              className="coming-soon-item mt-10 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/6 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#e31b23]/70 hover:bg-[#e31b23]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e31b23]"
              onClick={() => setShowComingSoon(false)}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] stroke-width-2"
                viewBox="0 0 24 24"
              >
                <path d="m15 18-6-6 6-6M9 12h12" />
              </svg>
              Back to Home
            </button>
          </div>
        </section>
      ) : (
        <div className="relative flex items-center justify-center">
          <button
            aria-label="Tampilkan tombol Get Ready"
            className="border-0 bg-transparent p-0"
            onClick={revealButton}
            type="button"
          >
            <Image
              alt="TEDx Universitas Andalas"
              className="block h-64 w-64 animate-bounce object-contain [animation-duration:3.2s] motion-reduce:animate-none"
              height={256}
              priority
              src="/TEDxUniversitasAndalas.webp"
              width={256}
            />
          </button>
          <button
            aria-label="Get Ready, lihat informasi Coming Soon"
            className={`group absolute left-1/2 top-[calc(100%+18px)] z-10 flex min-w-30 -translate-x-1/2 isolate items-center justify-center gap-[0.7rem] whitespace-nowrap rounded-[1.1rem] border-[1.5px] border-[#2d2d2d] bg-[#232323] px-[1.4rem] py-2 text-[1.1rem] font-medium tracking-[0.04em] text-white [box-shadow:6px_6px_18px_#181818cc,-6px_-6px_18px_#353535cc,inset_2px_2px_8px_#18181899,inset_-2px_-2px_8px_#35353599] [text-shadow:0_1px_4px_#0005] transition-[opacity,box-shadow,transform] duration-250 before:absolute before:left-1/2 before:top-0 before:z-0 before:h-full before:w-0 before:rounded-[1.2rem] before:bg-[#d61a1ad1] before:content-[''] before:transition-[width,left] before:duration-400 before:ease-in-out hover:before:left-0 hover:before:w-full focus-visible:before:left-0 focus-visible:before:w-full ${
              isReady
                ? "pointer-events-auto scale-[1.03] opacity-100 [box-shadow:8px_8px_24px_#181818cc,-8px_-8px_24px_#353535cc,inset_2px_2px_8px_#18181899,inset_-2px_-2px_8px_#35353599]"
                : "pointer-events-none opacity-0"
            }`}
            onClick={openComingSoon}
            tabIndex={isReady ? 0 : -1}
            type="button"
          >
            <Image
              alt="X Icon"
              className="relative z-10 h-8 w-8 flex-none object-contain transition-transform duration-250 group-hover:scale-[1.18] group-focus-visible:scale-[1.18]"
              height={32}
              src="/favicon.ico"
              width={32}
            />
            <span className="relative z-10">{readyText}</span>
            <svg
              aria-hidden="true"
              className="relative z-10 h-6 w-6 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] stroke-width-2"
              viewBox="0 0 24 24"
            >
              <path d="m8 5 8 7-8 7" />
            </svg>
          </button>
        </div>
      )}

      {isLoading && (
        <div
          aria-label="Memuat halaman"
          className="fixed inset-0 z-100 flex items-center justify-center bg-black"
          role="status"
        >
          <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-[#ffffff30] border-t-[#e31b23] motion-reduce:animate-none" />
        </div>
      )}
    </main>
  );
}
