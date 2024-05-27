import React from 'react'
import PIC from '../assets/PIC.png'
import { BsFillPeopleFill } from "react-icons/bs";
import { GiJugglingClubs } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";


const About = () => {
  return (
    <div>
          {/* About text  */}
          <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
              <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                  <div>
                      <img className='object-scale-down h-49 w-96' src={PIC} alt="" />
                  </div>
                  <div className='md:w-3/5 mx-auto bg-gradient-to-r from-Yellow via-Cherry to-Blue inline-block text-transparent bg-clip-text'>
                      <h2 className='text-4xl font-semibold mb-4 md:w-4/5'>The unseen purchasing nature of umbrellas</h2>
                      <p className='md:w-3/4 text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ipsum sint eligendi! Accusamus velit quaerat architecto modi. Quaerat minima aspernatur facere ratione, ducimus magnam, nisi, beatae quas porro qui neque.</p>
                  </div>
                  </div>
          </div>
          
          {/* Company Stats  */}
          <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'> 
              <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                  <div className='md:w-1/2'>
                      <h2 className='text-4xl text-Cherry font-semibold'>
                          Charts of your <br /> <span className='text-Yellow'>local umbrella scales</span>
                      </h2>
                      <p className='text-Cherry font-semibold'>
                          Providing umbrellas for the needy is hardwork.
                      </p>
                  </div>
                  {/* Stats  */}
                  <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                      <div className='space-y-8'>
                          <div className='flex items-center gap-4  transition-all hover:-translate-y-5 duration-300'>
                              <BsFillPeopleFill className='text-Cherry text-4xl' />
                              <div>
                                  <h4 className='text-2xl text-Yellow font-semibold'>2,222,222</h4>
                                  <p className='text-Cherry'>Members</p>
                              </div>
                          </div>
                          <div className='flex items-center gap-4  transition-all hover:-translate-y-5 duration-300'>
                              <GiJugglingClubs className='text-Cherry text-4xl' />
                              <div>
                                  <h4 className='text-2xl text-Yellow font-semibold'>222,222</h4>
                                  <p className='text-Cherry'>Clubs</p>
                              </div>
                          </div>
                      </div>
                    
                      <div className='space-y-8'>
                          <div className='flex items-center gap-4 transition-all hover:-translate-y-5 duration-300'>
                              <MdOutlineEventAvailable className='text-Cherry text-4xl' />
                              <div>
                                  <h4 className='text-2xl text-Yellow font-semibold'>22,222</h4>
                                  <p className='text-Cherry'>Event planning</p>
                              </div>
                          </div>
                          <div className='flex items-center gap-4 transition-all hover:-translate-y-5 duration-300'>
                              <MdOutlinePayment className='text-Cherry text-4xl' />
                              <div>
                                  <h4 className='text-2xl text-Yellow font-semibold'>2,222</h4>
                                  <p className='text-Cherry'>Payment</p>
                              </div>
                          </div> 
                        </div>
                  </div>
              </div>
          </div>
         
          </div>
  )
}

export default About