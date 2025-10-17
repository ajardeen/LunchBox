import { ArrowSvg } from "../../assets/Svg";
import AboutUsSection from "./AboutUsSection";
import { GiHotMeal } from "react-icons/gi";
import { RiDrinksFill } from "react-icons/ri";
import { PiChefHatBold } from "react-icons/pi";

export default function AboutSection() {
  return (
    <>
      <AboutUsSection />
      <div className="">
        <section id="aboutussection" className=" py-3 flex items-center border shadow-2xl rounded-sm justify-center bg-accent text-white  px-6 ">
          <div className="max-w-6xl w-full ">
            <div className="text-center mb-4 mt-5">
              <div
                className="relative w-fit items-center place-self-center justify-center px-6 py-2 text-sm md:text-base font-medium 
               text-emerald-50 rounded-full border border-emerald-400/40 uppercase"
              >
                About Us
                <span className="absolute inset-0 rounded-full  opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <header className="text-center ">
              <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight">
                How Pure Food Delivery <br /> Works
              </h2>
            </header>

            <div className="rounded-2xl p-8 md:p-7">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
                {/* Step 1 */}
                <article className="flex-1 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    {/* Apply text color using the arbitrary value syntax and your custom CSS variable */}
                    <GiHotMeal
                      size={30}
                      className="text-[var(--color-primary)] "
                    />
                  </div>

                  <h3 className="text-lg text-white font-semibold">
                    Customize Your Meal
                  </h3>
                  <p className="text-sm text-emerald-100/90 mt-2">
                    Start your meal with a bang
                  </p>
                </article>

                {/* Arrow (md & up) */}
                <div className="hidden md:flex items-center" aria-hidden>
                  {ArrowSvg()}
                </div>

                {/* Step 2 */}
                <article className="flex-1 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    {/* Subscription Icon */}
                    <RiDrinksFill
                      size={30}
                      className="text-[var(--color-primary)] "
                    />
                  </div>

                  <h3 className="text-lg text-white font-semibold">
                    Choose Subscription Package
                  </h3>
                  <p className="text-sm text-emerald-100/90 mt-2">
                    Sweet endings to perfect meals
                  </p>
                </article>

                {/* Arrow (md & up) */}
                <div className="hidden md:flex items-center" aria-hidden>
                  {ArrowSvg()}
                </div>

                {/* Step 3 */}
                <article className="flex-1 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <PiChefHatBold
                      size={30}
                      className="text-[var(--color-primary)]"
                    />
                  </div>

                  <h3 className="text-lg text-white font-semibold">
                    Enjoy Your Healthy Food
                  </h3>
                  <p className="text-sm text-emerald-100/90 mt-2">
                    Plant-powered plates
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
