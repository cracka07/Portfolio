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
                <h2 className=' text-2xl sm:text-5xl font-bold text-white'>Hola, soy Full Stack Developer</h2>
           
            <p className='text-2xl text-gray-500 py-4 max-w-md text-xl'>
                 Graduado de Henry.
                 Formación en distintas tecnologías Front end y Back end.
                 Experiencia comprobable en la capacidad de construir y diseñar proyectos basados en distintas temáticas.
                 Gracias a esta experiencia, pude desarrollar varias soft skills.

                 Tengo estudios realizados en la Universidad Tecnológica Nacional de Córdoba.
                 
                 
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
            className='  rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>

        </div>
    </div>
  )
}

export default Home
