import React from 'react'
import TailwindButton from '../../components/TailwindButton'

function FooterSection() {
  // Define the main green color variable for clarity and easy reuse
  const accentColor = 'var(--color-accent)' 

  return (
    <div className='flex flex-col min-h-screen font-body'>

      {/* ========================================================
        TOP HALF: Hero Section (Matching the top 50vh of the image)
        ======================================================== 
      */}
      <div 
        className='z-10 h-[40vh] flex items-center bg-gray-50' 
        style={{ 
          // Set a light background for the text area and use a placeholder image for the right side
          backgroundImage: "url('/images/footerbg.png",
          backgroundSize: '150% 150%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          // A crude way to simulate the image background's general tone
        }}
      >
        <div className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex '>
          
          {/* Left Side: Text and Button (Taking roughly 50% width) */}
          <div className='w-full lg:w-1/2 p-4'>
            
            {/* Title */}
            <h1 className='text-3xl font-heading font-bold mb-4 leading-tight text-foreground'>
              CUSTOMIZE DELIVERY MEAL <br />FOR A HEALTHY LIFESTYLE
            </h1>
            
            {/* Body Text */}
            <p className='text-muted max-w-lg mb-8 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
            
            {/* Button */}
            <TailwindButton 
              
            >
              GET 50% OFF TODAY
            </TailwindButton>
          </div>

          {/* Right Side: Image Placeholder (Taking roughly 50% width) */}
          {/* NOTE: The actual image is complex. This uses padding to push the left content to the side */}
          <div className='hidden lg:block lg:w-1/2 p-4 relative'>
            {/* This is where the food image would be. 
              The padding and background color of the main div simulate the layout.
            */}
          </div>

        </div>
      </div>

      {/* ========================================================
        BOTTOM HALF: Footer Section (Matching the image)
        ======================================================== 
      */}
      <div 
        className='sticky bottom-0 z-0 bg-[var(--color-accent)] text-white h-[60vh] flex items-center justify-center' 
        style={{ flexShrink: 0 }} // Ensure the footer doesn't shrink
      >
        {/* Footer Content Wrapper - Centering the content */}
        <div className=' max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8'>
          
          {/* Logo and Navigation Section */}
          <div className='flex flex-col items-center justify-center text-center'>
            
            {/* Logo/Brand Name (Using a placeholder leaf icon) */}
            <div className='flex items-center space-x-2 mb-6'>
             <img src='/images/logo.png' className='w-96 h-40 object-contain' />
            </div>

            {/* Navigation Links */}
            <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm font-medium mb-6'>
              <a href='#' className='hover:opacity-80 transition-opacity p-2'>
                About Us
              </a>
              <a href='#' className='hover:opacity-80 transition-opacity p-2'>
                Category
              </a>
              {/* Food & Drink link with chevron */}
              <div className='relative group'>
                <a href='#' className='flex items-center hover:opacity-80 transition-opacity p-2'>
                  Food & Drink
                  <svg
                    className='ml-1 w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </a>
              </div>
              <a href='#' className='hover:opacity-80 transition-opacity p-2'>
                Resources
              </a>
              <a href='#' className='hover:opacity-80 transition-opacity p-2'>
                Gallery
              </a>
            </nav>
          </div>

          {/* Copyright Notice */}
          <div className='text-center text-sm pt-2 border-t border-white border-opacity-30 mt-4'>
            Copyrighted © 2024 LunchBox Legends
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection