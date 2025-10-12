import { MdOutlineDeliveryDining } from "react-icons/md";
import "./ServiceSection.css";

function ServiceSection() {
  return (
    <section className="bg-pattern relative w-full h-[800px] sm:h-[700px] md:h-[600px] mb-20 flex flex-col items-center justify-end overflow-hidden bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      {/* Section Heading and Info */}
      <div className="absolute top-12 left-0 w-full h-full text-left px-4 sm:px-6 md:px-12">
        <div className="relative w-full h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-heading font-semibold text-[#000] mb-3">
            Our Service Coverage
          </h2>
          <p className="text-sm   font-body text-[color:var(--color-muted)] mb-4 max-w-xl">
            We’re expanding our trusted local services to communities near you —
            bringing quality, speed, and reliability right to your doorstep.
          </p>

          {/* Bottom left info box */}
          <div className="mt-3 lg:absolute bottom-24 sm:bottom-20 left-0 w-[90%] sm:w-80 border p-4 sm:p-5 rounded-2xl bg-white shadow-md">
            <p className="text-gray-700 text-sm sm:text-base">
              Currently serving areas within{" "}
              <span className="text-[color:var(--color-secondary)] font-semibold flex gap-2 sm:gap-3 justify-center items-center w-fit">
                <MdOutlineDeliveryDining color="var(--color-secondary)" />5 km radius
              </span>{" "}
              expanding soon to reach more people craving authentic, home-style
              cooking.
            </p>
          </div>

          {/* Top right info box */}
          <div className=" z-10 mt-5 lg:absolute top-0 right-0  sm:w-72 md:w-60 border p-1 sm:p-5 rounded-2xl bg-white shadow-md text-center">
            <p className="font-semibold uppercase mb-3 text-lg sm:text-base">
              Currently Serving
            </p>
            <div className="flex flex-col gap-2 sm:gap-3 text-left px-3">
              {["Taramani", "Velachery", "OMR", "Perungudi", "Thoraipakkam"].map(
                (item, index) => (
                  <p
                    key={index}
                    className="mb-1 text-[#000] text-sm cursor-pointer hover:text-[color:var(--color-secondary)]"
                  >
                    {item}
                  </p>
                )
              )}
            </div>
            <p className="italic mt-3 sm:mt-4 text-[color:var(--color-secondary)] text-sm sm:text-base">
              More areas coming soon!
            </p>
          </div>
        </div>
      </div>

      {/* Coverage Visualization */}
     

      <div className="relative h-[600px] sm:h-[700px] md:h-[600px] w-full flex items-end justify-center overflow-hidden pt-20">
 
        <div className="absolute bottom-0 w-[250px] sm:w-[400px] md:w-[500px] h-[125px] sm:h-[200px] md:h-[250px] border-2 sm:border-3 border-dotted border-[color:var(--color-secondary)] rounded-t-full border-b-0">
          <span className="absolute -top-2 left-[20%] text-[color:var(--color-secondary)] font-semibold text-xs sm:text-sm md:text-base">
            5 km
          </span>
          <span className="absolute -top-2 right-[20%] text-[color:var(--color-secondary)] font-semibold text-xs sm:text-sm md:text-base">
            Place 2 
          </span>
        </div>

    
        <div className="absolute bottom-0 w-[175px] sm:w-[300px] md:w-[350px] h-[87px] sm:h-[150px] md:h-[175px] border-2 sm:border-3 border-[color:var(--color-accent)] rounded-t-full border-b-0">
          <span className="absolute -top-4 left-[25%] text-[color:var(--color-accent)] font-semibold text-xs sm:text-sm md:text-base">
            2 km
          </span>
          <span className="absolute -top-4 right-[25%] text-[color:var(--color-accent)] font-semibold text-xs sm:text-sm md:text-base">
            Place 1
          </span>
        </div>

     
        <div className="absolute bottom-[40px] sm:bottom-[50px] z-0 flex justify-center items-center">
          <div className="signal-wave delay-0"></div>
          <div className="signal-wave delay-1"></div>
          <div className="signal-wave delay-2"></div>
        </div>

        <img
          src="/images/shop.png"
          alt="shop"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 object-contain z-10 "
        />
      </div>
     
        {/* <p className="absolute -bottom-1 z-10">LBL</p> */}
    </section>
  );
}

export default ServiceSection;
