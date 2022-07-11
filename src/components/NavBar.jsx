import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links=[
    {
        id:1,
        link:"Inicio"
    },
    {
        id:2,
        link:"Sobre mí"
    },
    {
        id:3,
        link:"Portfolio"
    },
    {
        id:4,
        link:"Experiencia"
    },
    {
        id:5,
        link:"Contacto"
    },
 ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Mariano Ferrer</h1>
      </div>

      <ul className=" text-2xl  hidden md:flex">
      <li
            className="  hover:text-yellow-400 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500"
          >
            <a href="#home">Inicio</a>
            </li>
            <li
            className="  hover:text-yellow-400 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500"
          >
            <a href="#about">Sobre mi</a>
            </li>
            <li
            className="  hover:text-yellow-400 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500"
          >
            <a href="#portfolio">Portfolio</a>
            </li>
            <li
            className="  hover:text-yellow-400 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500"
          >
            <a href="#experience">Experiencia</a>
            </li>
            <li
            className="  hover:text-yellow-400 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500"
          >
            <a href="#contact">Contacto</a>
            </li>
            
      </ul>
      {/* <ul className=" text-2xl  hidden md:flex">
        {links.map(({ id, link }) => (
         
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul> */}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

