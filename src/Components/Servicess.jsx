import React from 'react'
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { LiaCloudRainSolid } from "react-icons/lia";
import { MdWaterDrop } from "react-icons/md";
import { PiUmbrellaBold } from "react-icons/pi";
import { GiUmbrellaBayonet } from "react-icons/gi";
import { FaShoePrints } from "react-icons/fa";
import { MdOutlineSnowshoeing } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { BsBuildingsFill } from "react-icons/bs";
import { FaObjectGroup } from "react-icons/fa6";

const Servicess = () => {
    const services = [
        {
            id: 1,
            title: 'People Usage',
            description: ' People have been using the umbrella since the beginning of time and continued ',
            icon : <SlPeople />,
    }    ,    {
        id: 1,
        title: 'City Usage',
        description: 'People have been using the umbrella since the beginning of time and continued ',
        icon : <BsBuildingsFill />,
}     ,   {
    id: 1,
    title: 'Group Usage',
    description: 'People have been using the umbrella since the beginning of time and continued ',
    icon : <FaObjectGroup />,
}
]
  return (
      <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
          <div className='text-center my-8'>
          <h2 className='text-4xl text-Blue font-medium mb-2'>
           Our clients
          </h2>
          <p className='text-Blue '>
              We have been loyal to this amazing clients
          </p>
          </div>
          <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
              <BsCloudRainHeavyFill className=' text-5xl text-Blue'/>
              <LiaCloudRainSolid className=' text-5xl text-Blue'/>
              <MdOutlineSnowshoeing className=' text-5xl text-Blue'/>
              <MdWaterDrop className=' text-5xl text-Blue'/>
              <PiUmbrellaBold className=' text-5xl text-Blue'/>
              <GiUmbrellaBayonet className=' text-5xl text-Blue'/>
              <FaShoePrints className=' text-5xl text-Blue'/>
          </div>

          {/* Service cards */}
          <div className='mt-20 md:w-1/2 mx-auto text-center'>
              <h2 className='text-4xl text-Blue font-semibold mb-2'>
                  Usage and management of your unique umbrellas 
              </h2>
              <p className='text-neutralPurple'>
                  Umbrella has been able to protect over 20000+ people from the rain 
              </p>
          </div>
          {/* Card  */}
          <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
              {
                  services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto
                  md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-Blue
                  transition-all duration-300 flex items-center justify-center h-full'>
                      <div>
                          <div className='text-4xl text-Blue h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                              <div className='-ml-5'>
                                {service.icon}
                              </div>
                          </div>
                          <h4 className='text-bold text-2xl text-neutralPurple mb-2 px-2'>{service.title}</h4>
                          <p className='text-sm text-neutralPurple '>{service.description}</p>
                      </div>
                  </div>)
            }
          </div>
    </div>
  )
}

export default Servicess