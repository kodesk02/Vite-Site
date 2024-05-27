import React from 'react'
import { Carousel } from "flowbite-react";
import umb1 from '../assets/pngwing.com.png'
import rain from '../assets/rain.png'
import red from '../assets/red.png'

const Home = () => {
  return (
      <div className='bg-neutralSilver'>
          <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
          <Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row md:row-reverse items-center justify-between gap-12">
            <div className='h-auto max-w-xs '>
              <img src={umb1} alt="umbrella" />
            </div>
            <div className="md:w-1/2">
              {/* Content on the left side of the image */}
              <h1 className='bg-gradient-to-r from-Blue via-brandPurple to-brandBlue inline-block text-transparent bg-clip-text text-5xl font-semibold mb-4 text-Blue md:w-4/4 leading-snug'>The concept of umbrellas <span className='text-neutral'>dates back</span></h1>
              <h3 className='text-Blue text-medium text-xl'>thousands of years, with early versions made 
              from materials like leaves, feathers, or animal skins. Modern umbrellas evolved over time, with improvements in design, materials, and functionality.
              </h3>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row md:row-reverse items-center justify-between gap-12">
            <div className='h-auto max-w-xs '>
              <img src={rain} alt="umbrella" />
            </div>
            <div className="md:w-1/2">
              {/* Content on the left side of the image */}
              <h1 className='bg-gradient-to-r from-Yellow via-brandPurple to-brandBlue inline-block text-transparent bg-clip-text text-5xl font-semibold mb-4 text-Blue md:w-4/4 leading-snug'>Umbrellas have cultural significance<span className='text-neutral'>in various societies.</span></h1>
              <h3 className='text-brandYellow text-medium text-xl'>
              They are often associated with symbolism related to protection, elegance, and even social status. In some cultures, umbrellas are also used as props in traditional ceremonies or rituals.
              </h3>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row md:row-reverse items-center justify-between gap-12">
            <div className='h-auto max-w-xs '>
              <img src={red} alt="umbrella" />
            </div>
            <div className="md:w-1/2">
              {/* Content on the left side of the image */}
              <h1 className='bg-gradient-to-r from-Cherry via-brandPurple to-brandBlue inline-block text-transparent bg-clip-text text-5xl font-semibold mb-4 text-Blue md:w-4/4 leading-snug'>The main components of an umbrella include<span className='text-neutral'>the canopy </span></h1>
              <h3 className='text-brandRed text-medium text-xl'>
              (the protective fabric), ribs (the structural supports), the shaft (the central rod or handle), and sometimes additional features like a mechanism for automatic opening/closing.
              </h3>
            </div>
        </div>
      </Carousel>
          </div>
      </div>
  )
}

export default Home