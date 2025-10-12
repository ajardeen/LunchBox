import "./CategorySection.css";
import TailwindButton from "../../components/TailwindButton";
import CategoryBottomLayer from "./CategoryBottomLayer";

function CategorySection() {
  return (
    <section className="bg-background">
      <div className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
          {/* Card 1: Image Left */}
          <div className="relative w-full lg:w-1/3 overflow-hidden rounded-xl shadow-lg">
            <div className="w-full h-56 sm:h-72 lg:h-full bg-opacity-70 flex items-end p-6 packingimg1">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-accent)] to-transparent opacity-75" />
              <div className="absolute top-4 right-4 z-20 bg-background text-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                CATEGORY
              </div>
              <h3 className="text-xl sm:text-2xl z-20 font-semibold text-background leading-tight">
                NUTRITIOUS MEALS
                <br />
                RIGHT TO YOUR DOOR
              </h3>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 2 */}
            <div className="bg-primary w-full h-48 sm:h-56 text-background p-6 sm:p-8 rounded-xl flex flex-col justify-end text-left">
              <p className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">1200 +</p>
              <p className="text-lg sm:text-xl font-medium">
                MEAL THAT FITS <br /> YOUR LIFESTYLE
              </p>
            </div>

            {/* Card 3: Image */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-xl shadow-lg">
              <div className="w-full h-full relative bg-white flex items-end p-6 packingimg2">
                <div className="absolute top-4 right-4 z-20 bg-background text-foreground text-xs font-semibold border border-background border-opacity-50 px-4 py-1 rounded-full uppercase">
                  CATEGORY US
                </div>
                <div className="absolute h-full inset-0 z-10 bg-gradient-to-t from-[var(--color-accent)] to-transparent opacity-75" />
                <h3 className="z-20 text-lg sm:text-xl font-semibold text-background leading-snug">
                  EAT HEALTHY, LIVE HAPPY
                  <br />
                  WITH OUR SERVICE
                </h3>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-1 sm:col-span-2 flex flex-col justify-between p-2 sm:p-4">
              <div className="text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6 border border-[color:var(--color-accent)] w-fit border-opacity-50 text-[color:var(--color-accent)] px-4 sm:px-5 py-1 rounded-full uppercase tracking-[0.2em]">
                CATEGORY US
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-foreground leading-tight">
                    DELICIOUSLY <br /> MADE, PERFECTLY SERVED
                  </h2>
                </div>

                <div className="flex flex-col">
                  <h4 className="text-lg sm:text-xl font-semibold text-[#000] mb-3 sm:mb-4">
                    QUALITY WITHOUT COMPROMISE
                  </h4>
                  <p className="text-sm sm:text-base text-muted mb-4 sm:mb-6">
                    We're more than just a meal delivery service; we're a
                    community dedicated to helping you achieve your health and
                    wellness goals. By subscribing, you're not just getting
                    delicious meals — you're investing in a healthier, happier
                    you.
                  </p>
                  <TailwindButton className={"w-fit text-sm sm:text-base"}>
                    GET STARTED
                  </TailwindButton>
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
