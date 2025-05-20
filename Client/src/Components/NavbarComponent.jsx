import React from 'react'
import style from '../Styles/Home.module.css'
import Logo from '../assets/logo.svg'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function NavbarComponent() {
  return (
    <>
    <Navbar fluid rounded  className={style.bg}>
      <NavbarBrand href="#">
        <img src={Logo} className="mr-2 h-10" alt="Logo" />
        <span className="text-yellow-400 text-3xl font-bold"style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: 400, fontStyle: 'normal' }}>Excel</span> <span className="text-blue-900 text-2xl font-bold"style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: 400, fontStyle: 'normal' }}>lytics</span>
      </NavbarBrand>

      <div className="flex md:order-2 gap-2">
        <Button className="bg-blue-500 !text-white hover:bg-blue-800 font-medium">Get Started</Button>
        <NavbarToggle />
      </div>
      
      <NavbarCollapse >
  <div className="flex flex-col md:flex-row gap-x-4 md:gap-x-12 items-start md:items-center ">
    {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
      <NavbarLink
        key={item}
        href="#"
        className="!text-zinc-700 hover:!text-blue-700 text-base font-medium !mx-0 !px-0  "
      >
        {item}
      </NavbarLink>
    ))}
  </div>
</NavbarCollapse>

      {/* <NavbarCollapse className= ""style={{ fontFamily: '"Darker Grotesque", san-serif', fontWeight: 400, fontStyle: 'normal',  }}>
        <NavbarLink href="#" active className="!text-zinc-900 hover:!text-blue-700 transition-colors  font-medium text-xl ">
          Home
        </NavbarLink>
        <NavbarLink href="#" className="!text-zinc-900 hover:!text-blue-700 transition-colors  font-medium text-xl ">
          About
        </NavbarLink>
        <NavbarLink href="#" className="!text-zinc-900 hover:!text-blue-700 transition-colors  font-medium text-xl ">
          Services
        </NavbarLink>
        <NavbarLink href="#" className="!text-zinc-900 hover:!text-blue-700 transition-colors  font-medium text-xl ">
          Pricing
        </NavbarLink>
        <NavbarLink href="#" className="!text-zinc-900 hover:!text-blue-700 transition-colors  font-medium text-xl ">
          Contact
        </NavbarLink>
      </NavbarCollapse> */}
    </Navbar>

    

    

    </>

  );
}

export default NavbarComponent;


     {/* <Navbar className='bg-green-500' fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="bg-red-500 hover:bg-red-600">Get started</Button>
        <Button >sign up</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>  */}
{/* <nav class="bg-white dark:bg-transparent fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav> */}
    

    
  



