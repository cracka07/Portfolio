import React from 'react'
import perfil from "./img/perfil.png"

import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div id="home" name="home" 
         className='  h-screen w-full bg-gradient-to-b from-black via-black
         to-gray-800 '>
      
        <div className=' max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className=' flex flex-col justify-center h-full'>
                <h2 className='   sm:text-4xl font-bold text-white'>Hola, soy Full Stack Developer</h2>
           
            <p className='text-2xl text-gray-500 py-4 max-w-md text-xl'>
            Soy un graduado de Henry especializado en desarrollo backend con Java con Spring Boot. 
            Con sólidos conocimientos en tecnologías full stack, ofrezco experiencia
            y pasión por crear soluciones robustas. Descubre cómo puedo potenciar tu equipo
            y proyectos en mi portfolio y github.
            </p>

            <div>
                <button className=' group text-white w-fit px-4 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r from-cyan-500
                to-blue-500  cursor-pointer' >
                    <a href="#portfolio">Portfolio</a>
                    <span className='group-hover:rotate-90 duration-300'>
                        <RiArrowRightSLine size={30}
                        className="ml-1 "/>
                    </span>
                </button>
            </div>
        </div>
        <div>
            
            <img src={perfil} alt="mi foto de perfil" 
            className=' rounded-2xl mx-auto w-60 first-letter:h-36  md:w-30'/>
        </div>

        </div>
    </div>
  )
}

export default Home
