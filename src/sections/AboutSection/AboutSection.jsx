import React from "react";

export default function AboutSection() {
  return (
    <>
    <div className="p-24">

    <section className=" py-8 flex items-center border shadow-2xl rounded-xl justify-center bg-emerald-600 text-white  px-6 ">
      <div className="max-w-6xl w-full ">
    <div className="text-center mb-4">
  <button
    className="relative inline-flex items-center cursor-pointer justify-center px-6 py-2 text-sm md:text-base font-medium 
               text-emerald-50 rounded-full border border-emerald-400/40 
               bg-gradient-to-r from-emerald-600/80 to-emerald-500/70 
               hover:from-emerald-500 hover:to-emerald-400 
               transition-all duration-300 shadow-md hover:shadow-emerald-400/30
               tracking-wider uppercase"
  >
    About Us
    <span className="absolute inset-0 rounded-full bg-emerald-300/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
  </button>
</div>


        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight">How Pure Food Delivery Works</h2>
        </header>

        <div className="bg-emerald-700 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">

            {/* Step 1 */}
            <article className="flex-1 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 shadow-sm">
                {/* Customize Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                  <path d="M6 8l12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                  <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                </svg>
              </div>

              <h3 className="text-lg text-white font-semibold">Customize Your Meal</h3>
              <p className="text-sm text-emerald-100/90 mt-2">Start your meal with a bang</p>
            </article>

            {/* Arrow (md & up) */}
            <div className="hidden md:flex items-center" aria-hidden>
              <svg className="w-16 h-6" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12h150" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
                <path d="M140 4l10 8-10 8" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2 */}
            <article className="flex-1 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 shadow-sm">
                {/* Subscription Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="text-lg text-white font-semibold">Choose Subscription Package</h3>
              <p className="text-sm text-emerald-100/90 mt-2">Sweet endings to perfect meals</p>
            </article>

            {/* Arrow (md & up) */}
            <div className="hidden md:flex items-center" aria-hidden>
              <svg className="w-16 h-6" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12h150" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
                <path d="M140 4l10 8-10 8" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3 */}
            <article className="flex-1 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 shadow-sm">
                {/* Enjoy Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7 12a5 5 0 0 0 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="text-lg text-white font-semibold">Enjoy Your Healthy Food</h3>
              <p className="text-sm text-emerald-100/90 mt-2">Plant-powered plates</p>
            </article>

          </div>

          {/* Mobile arrows between stacked items */}
          <div className="md:hidden mt-6 space-y-6">
            <div className="flex items-center justify-center">
              <svg className="w-12 h-6" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M0 12h40" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 4l8 8-8 8" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-12 h-6" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M0 12h40" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 4l8 8-8 8" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>

    </>
  );
}
