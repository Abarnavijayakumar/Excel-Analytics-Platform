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

     
    </Navbar>

    

    

    </>

  );
}

export default NavbarComponent;


     