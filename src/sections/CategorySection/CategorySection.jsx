import "./CategorySection.css";
import TailwindButton from "../../components/TailwindButton";
import CategoryBottomLayer from "./CategoryBottomLayer";

function CategorySection() {
  return (
    <section id="categorysection" className="bg-background">
      <div className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
          <div className="relative w-full lg:w-1/3 overflow-hidden rounded-xl shadow-lg">
            <div className="w-full h-56 sm:h-72 lg:h-full bg-opacity-70 flex items-end p-6 packingimg1">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-accent)] to-transparent opacity-75" />
              <div className="absolute top-4 right-4 z-20 bg-background text-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                YOUR NEW LUNCH BREAK
              </div>
              <h3 className="text-xl sm:text-2xl z-20 font-semibold text-background leading-tight">
                CHEF-CURATED MEALS
                <br />
                ZERO EFFORT
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-primary w-full h-48 sm:h-56 text-background p-6 sm:p-8 rounded-xl flex flex-col justify-end text-left">
              <p className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                7 DAYS BACK
              </p>
              <p className="text-lg sm:text-xl font-medium">
                THE TIME YOU'LL SAVE <br /> ON MEAL PREP
              </p>
            </div>
            <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-xl shadow-lg">
              <div className="w-full h-full relative bg-white flex items-end p-6 packingimg2">
                <div className="absolute top-4 right-4 z-20 bg-background text-foreground text-xs font-semibold border border-background border-opacity-50 px-4 py-1 rounded-full uppercase">
                  HOME-COOKED QUALITY
                </div>
                <div className="absolute h-full inset-0 z-10 bg-gradient-to-t from-[var(--color-accent)] to-transparent opacity-75" />
                <h3 className="z-20 text-lg sm:text-xl font-semibold text-background leading-snug">
                  WHOLESOME INGREDIENTS.
                  <br />
                  AUTHENTIC TASTE.
                </h3>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 flex flex-col justify-between p-2 sm:p-4">
              <div className="text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6 border border-[color:var(--color-accent)] w-fit border-opacity-50 text-[color:var(--color-accent)] px-4 sm:px-5 py-1 rounded-full uppercase tracking-[0.2em]">
                GET FIRST ACCESS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-foreground leading-tight">
                    THE HOME COOKED MEAL <br /> YOU DON'T HAVE TO COOK.
                  </h2>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg sm:text-xl font-semibold text-[#000] mb-3 sm:mb-4">
                    SECURE YOUR SPOT & UNLOCK FOUNDER BENEFITS
                  </h4>
                  <p className="text-sm sm:text-base text-muted mb-4 sm:mb-6">
                    <strong>Priority Access & A Free Gift Awaits.</strong>{" "}
                    Lunchbox Legends delivers authentic, chef-prepared meals
                    right to your door. Join our exclusive waitlist today and be
                    the first to choose your menu, lock in a special founder's
                    rate, and receive a free bonus meal when we launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoryBottomLayer />
    </section>
  );
}

export default CategorySection;
