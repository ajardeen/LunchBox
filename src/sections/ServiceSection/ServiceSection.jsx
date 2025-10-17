import { MdOutlineDeliveryDining, MdOutlineMyLocation } from "react-icons/md";
import "./ServiceSection.css"; 
// Assuming 'var(--color-secondary)' is your main brand color (e.g., Green)

const servedLocations = [
  "Injambakkam",
  "Kottivakkam",
  "Neelangarai",
  "Pallavakkam",
  "Perungudi",
  "Sholinganallur",
  "Taramani",
  "Thiruvanmiyur",
];

function ServiceSection() {
  return (
    // Adjusted height/padding as the large visualization is removed
    <section 
      className="bg-pattern relative w-full py-5 h-full lg:min-h-[80vh] flex flex-col  gap-30 overflow-hidden"
    >
      
      {/* Container for Layout */}
      <div className="container lg:h-[70vh] mx-auto px-4 md:px-12 flex flex-col  items-center">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-heading font-bold text-gray-800 mb-4">
            Our Service Zones
          </h2>
          
          
          {/* Tagline */}
          <p className="text-base font-body text-gray-600 mb-8 max-w-xl">
            We’re expanding our trusted local service from our kitchen to you,
            ensuring **fresh, home-style meals** with unmatched speed and reliability.
          </p>

          {/* Actionable Pincode/Address Check (CTA) */}
          {/* <div className="mb-10 p-5 rounded-xl bg-white shadow-xl max-w-sm">
            <p className="font-semibold text-lg mb-3 text-gray-700">
              Check Your Delivery Availability
            </p>
            <div className="flex space-x-2">
              <input 
                type="text"
                placeholder="Enter Pincode or Locality..."
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[color:var(--color-secondary)] focus:border-transparent text-sm"
              />
              <button 
                className="flex items-center justify-center p-3 bg-[color:var(--color-secondary)] text-white rounded-lg hover:bg-[color:var(--color-primary)] transition-colors text-sm font-semibold shadow-md"
              >
                <MdOutlineDeliveryDining className="w-5 h-5 mr-1" /> Check
              </button>
            </div>
          </div> */}


        </div>

        {/* ====================================================================== 
            1. TEXT CONTENT & CTA (Left/Top)
            ====================================================================== */}
        <div className="flex flex-col justify-center items-center md:flex md:flex-row md:gap-5 lg:justify-between md:items-center w-full lg:px-30">

          {/* Local Kitchen Info Box */}
          <div className=" p-5 h-fit rounded-2xl bg-white shadow-lg border-l-4 border-[color:var(--color-secondary)] max-w-sm">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <MdOutlineMyLocation className="inline w-5 h-5 mr-2 text-[color:var(--color-secondary)]"/>
              Our dedicated kitchen is buzzing in{" "}
              <span className="font-bold text-[color:var(--color-secondary)]">
                Injambakkam
              </span>
              . We focus on delivering fresh, home-style meals to the surrounding
              neighborhoods fast.
            </p>
          </div>
        {/* ====================================================================== 
            2. ZONE LIST (Right/Bottom)
            ====================================================================== */}
        <div className="flex my-5 justify-start lg:justify-end">
          
          {/* List of Zones */}
          <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-2xl">
            <p className="font-bold uppercase mb-4 text-sm tracking-wider text-gray-800 border-b pb-2">
              Currently Serving These Localities
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-left text-base text-gray-700">
              {servedLocations.map((item) => (
                <li 
                  key={item} 
                  className="flex items-center hover:text-[color:var(--color-secondary)] transition-colors"
                >
                  <span className="text-[color:var(--color-secondary)] mr-2">•</span> {item}
                </li>
              ))}
            </ul>
            <p className="italic mt-4 text-[color:var(--color-secondary)] text-base font-semibold">
              More areas coming soon!
            </p>
          </div>
        </div>
        </div>

        
      </div>
    </section>
  );
}

export default ServiceSection;