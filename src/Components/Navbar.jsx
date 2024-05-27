import React, { useState, useEffect } from 'react'
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        {link: 'Home', path: 'home'},
        {link: 'About', path: 'about'},
        {link: 'Service', path: 'service'},
        {link: 'Product', path: 'product'},
        {link: 'Testimonial', path: 'testimonial'},
        {link: 'FAQ', path: 'faq'},
    ]

  return (
      <header className='w-full bg-neutralSilver md:bg-transparent fixed top-0 left-0 right-0'>
          <nav className={`py-7 lg:px-14 px-7 ${isSticky ? 'sticky top-0 left-0 right-0 border bg-white': ''}`}>
              <div className=' flex justify-between items-center gap-8 text-base'>
                  <div className='flex items-center first:font-medium text-3xl text-Blue italic ' >
                      <FaUmbrellaBeach className=' text-5xl text-Blue' />
                      umb
                  </div>
                  {/* Nav links for large devices */}
                  <ul className=' md:flex space-x-12 hidden'>
                  {navItems.map(({ link, path }) => (
                            <li key={path} data-spy={true} data-smooth={true} offset={-100} to ={path}>
                                <a href={`/${path}`} className="block text-base first:font-medium text-Blue hover:text-brandBlue">{link}</a>
                            </li>
                        ))}
                  </ul> 
                  {/* btn for large devices */}
                  <div className='space-x-12  lg:flex hidden items-center '>
                      <a href="" className='space-x-12 lg:flex items-center text-brandPurple hover:text-brandBlue first:font-medium'>Login</a>
                      <button className='text-bold px-4 py-3 leading-none text-gray-200 transition-all duration-100 border border-neutralSilver rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-neutralPurple from-Blue to-neutralPurple hover:text-neutralPurple hover:font-bold'>Sign-up</button>
                  </div>
                  {/* menu btn for onlu mobile device */}
                  <div className='md:hidden'>
                      <button onClick={toggleMenu} className='text-Blue focus:outline-none focus:text-neutralPurple'>
                          {
                              isMenuOpen ? (<FaXmark className='h-6 w-6 text-Blue'/>) : (<BsThreeDots className=' h-6 w-6 text-Blue'/>)
                          }
                      </button>
                  </div>
              </div>

              {/* navItems for mobile */}
              <div className={`space-y-5 px-4 mt-24 py-7 list-none items-center text-center md:hidden bg-neutralPurple ${ isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                        {navItems.map(({ link, path }) => (
                            <li key={path} data-spy={true} data-smooth={true} offset={-100} to ={path}>
                                <a href={`/${path}`} className="block text-lg first:font-medium text-base text-Blue hover:text-neutralBlue">{link}</a>
                            </li>
                        ))}
              </div>
          </nav>
      </header>
  )
}

export default Navbar