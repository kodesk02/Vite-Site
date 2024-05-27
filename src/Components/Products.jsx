import React from 'react'
import UMB from '../assets/UMB.png'


const Products = () => {
  return (
      <div>
           <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
              <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                  <div>
                      <img className='object-scale-down h-49 w-96' src={UMB} alt="" />
                  </div>
                  <div className='md:w-3/5 mx-auto bg-gradient-to-r from-Yellow via-Cherry to-Blue inline-block text-transparent bg-clip-text'>
                      <h2 className='text-4xl font-semibold mb-4 md:w-4/5'>The unseen purchasing nature of umbrellas</h2>
                      <p className='md:w-3/4 text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ipsum sint eligendi! Accusamus velit quaerat architecto modi. Quaerat minima aspernatur facere ratione, ducimus magnam, nisi, beatae quas porro qui neque.</p>
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default Products