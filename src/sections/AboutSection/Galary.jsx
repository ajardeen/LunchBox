import React from 'react';
// Your six image imports:
import riceandPanner from "../../../public/images/Gemini_Generated_Image_bwu0dcbwu0dcbwu0.png"
import fishCarry from "../../../public/images/Gemini_Generated_Image_kjpg6ikjpg6ikjpg.png"
import vagetableRice from "../../../public/images/Gemini_Generated_Image_ttkt2mttkt2mttkt.png"
import womanImg from "../../../public/images/Generated Image October 12, 2025 - 5_02PM.png"
import chapati from "../../../public/images/Generated Image October 12, 2025 - 5_19PM.png"
import sambarRice from "../../../public/images/WhatsApp Image 2025-10-12 at 4.36.40 PM.jpeg"
 

export default function Galary (){
    // 1. UPDATED: Using a 3-column, 4-row base to perfectly fit the collage style.
    const images = [
        // Image 1: Tall (Spans 2 rows) - Corresponds to the Thali/Plate
        { src: riceandPanner, alt: "Indian Thali Plate", class: "col-span-1 row-span-2" },
        
        // Image 2: Standard size - Corresponds to the Chicken Salad
        { src: fishCarry, alt: "Grilled Chicken Salad", class: "col-span-1 row-span-1" },
        
        // Image 3: Standard size - Corresponds to the Vegetable Rice
        { src: vagetableRice, alt: "Vegetable Pulao or Rice", class: "col-span-1 row-span-1" },
        
        // Image 4: Wide (Spans 2 columns) - Corresponds to the Woman Packing
        { src: womanImg, alt: "Woman preparing food boxes", class: "col-span-2 row-span-1" }, // ***NOTE: row-span-2 for height***
        
        // Image 5: Standard size - Corresponds to the Multiple Boxes
        { src: chapati, alt: "Multiple meal prep boxes", class: "col-span-1 row-span-1" }, // ***NOTE: row-span-2 for height***
        
        // Image 6: Standard size - Corresponds to the Single Box
        { src: sambarRice, alt: "Single meal box on desk", class: "col-span-1 row-span-1" }, // ***NOTE: row-span-2 for height***
    ];
    
    return(
        <section className="py-16 px-6 md:px-24">
            {/* Header Content */}
            <button className="bg-white font-runde text-green-600 uppercase text-sm font-medium px-4 py-2 rounded-3xl border border-green-500 shadow hover:bg-green-50 transition">
                Gallery
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8 md:mb-0">
                    From Our Kitchen To <br /> Your Table
                </h2>
                <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">NOURISH YOUR BODY, NOURISH YOUR LIFE</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Discover the transformative power of food. By making conscious choices about what you eat, you can improve your energy levels, boost your mood, and enhance your overall quality of life.
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>

            {/* --- Refined Unique Image Grid --- */}
            <div className="mt-16 max-w-5xl mx-auto">
            
                <div className="grid grid-cols-3 grid-rows-4 gap-4 auto-rows-fr">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            // Apply the unique class for spanning rows/columns, plus standard styling
                            className={`${image.class} overflow-hidden rounded-xl shadow-lg transform hover:shadow-xl hover:scale-[1.01] transition duration-500 ease-in-out`}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                // Ensure image covers its assigned grid area
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}