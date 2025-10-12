import TailwindButton from "../../components/TailwindButton";

export default function Galary() {


  const images = [
    // Image 1: Top-Left (Original 5-boxes, top-left of the collage)
    {
      src: "./images/Gemini_Generated_Image_bwu0dcbwu0dcbwu0.png",
      alt: "Multiple individual meal prep boxes in foil containers",
      class: "col-span-1 row-span-3",
    },

    // Image 2: Top-Center (Original Fig Toast, top-middle of the collage)
    {
      src: "./images/Gemini_Generated_Image_kjpg6ikjpg6ikjpg.png",
      alt: "Fig and cheese on toast",
      class: "col-span-1 row-span-2",
    },

    // Image 3: Right Side (Original Man Packing, spans the right side of the collage)
    {
      src: "./images/Generated Image October 12, 2025 - 5_02PM.png",
      alt: "Chef preparing and packing meal boxes for delivery",
      class: "col-span-1 row-span-4", // Spans the full height on the right
    },

    // Image 4: Bottom-Left (Original Chicken & Salad, bottom-left of the collage)
    {
      src: "./images/Gemini_Generated_Image_ttkt2mttkt2mttkt.png",
      alt: "Sliced chicken breast with a large green salad on a white plate",
      class: "col-span-1 row-span-2",
    },

    // Image 5: Bottom-Center (Original Delivery Bag, center of the collage)
    {
      src: "./images/Generated Image October 12, 2025 - 5_19PM.png",
      alt: "Brown paper delivery bag next to various meal boxes",
      class: "col-span-1 row-span-3",
    },

    // Image 6: Bottom-Center-Right (Original Chicken on Plate, bottom-right of the collage)
    // NOTE: Using the 6th available import for the bottom right slot.
    {
      src: "./images/WhatsApp Image 2025-10-12 at 4.36.40 PM.jpeg",
      alt: "Grilled chicken with a sauce and garnish on a white plate",
      class: "col-span-1 row-span-2",
    },

    // The 7th import is unused to match the 6-image collage layout.
    {
      src: "./images/Gemini_Generated_Image_of1u83of1u83of1u.png",
      alt: "Grilled chicken with a sauce and garnish on a white plate",
      class: "col-span-1 row-span-2",
    },
  ];

  // Filter out the extra image to ensure only 6 are used in the 3x2 grid
  const displayImages = images.slice(0, 7);

  return (
    <section className="py-8 p-10">
      {/* Header Content */}
      <button className="bg-background font-runde tracking-[0.2em] uppercase text-sm font-medium px-10 py-2 rounded-3xl  border-accent border-2 shadow ">
        Gallery
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6">
        <h2 className="text-4xl md:text-5xl font-runde font-bold uppercase  text-foreground leading-tight mb-8 md:mb-0">
          From Our Kitchen To <br /> Your Table
        </h2>
        <div className="md:w-1/2">
          <h3 className="text-xl font-heading text-[#000] mb-4">
            NOURISH YOUR BODY, NOURISH YOUR LIFE
          </h3>
          <p className="text-muted leading-relaxed mb-6">
            Discover the transformative power of food. By making conscious
            choices about what you eat, you can improve your energy levels,
            boost your mood, and enhance your overall quality of life.
          </p>
          <TailwindButton>Get Started</TailwindButton>
        </div>
      </div>

      {/* --- Refined Unique Image Grid --- */}
      {/* The grid is 3 columns wide and 2 rows tall */}
      <div className="mt-12 grid grid-cols-3 grid-rows-6   gap-4  px-2 auto-rows-fr h-[300px] lg:h-[600px]">
        {displayImages.map((image, index) => (
          <div
            key={index}
            // Apply the unique span class and standard styling
            className={`${image.class} overflow-hidden rounded-xl bg-no-repeat shadow-lg transform hover:shadow-xl hover:scale-[1.01] transition duration-500 ease-in-out`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}