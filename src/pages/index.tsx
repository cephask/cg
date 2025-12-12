"use client";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-3xl px-4 flex flex-col items-center">
        <header>
          <h1
            className="
              w-full
              text-center
              font-bold
              text-white
              leading-snug
              tracking-tight
              whitespace-nowrap
              overflow-hidden
              text-[clamp(18px,6vw,56px)]
            "
          >
            <span className="text-[#C9A66B] font-semibold">Creativity</span>{" "}
            <span className="text-white">Meets</span>{" "}
            <span className="text-[#C9A66B] font-semibold">Commerce.</span>
          </h1>
        </header>

        <footer
          className="w-full mt-10 text-center text-sm text-gray-400 font-medium tracking-wide select-none"
          aria-label="Copyright notice"
        >
          ©&nbsp;{new Date().getFullYear()} CG Agency™. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
