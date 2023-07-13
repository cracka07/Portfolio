import React from 'react'
import js from "./img/js.png"
import html from "./img/html.png"
import css from "./img/css.png"
import mysql from "./img/mysql.png"
import reat from "./img/react.png"
import node from "./img/node js.png"
import git from "./img/github.jpg"
import java from "./img/java.jpg"
import springboot from "./img/spboot.jpg"
import angular from "./img/angular.png"
const Experience = () => {
 
  const tech=[
    {
      id:1,
      src:html,
      title:"HTML",
      style:"shadow-orange-500"
    },
    {
      id:2,
      src:js,
      title:"JAVASCRIPT",
      style:"shadow-yellow-500"
    },
    {
      id:3,
      src:css,
      title:"CSS",
      style:"shadow-blue-500"
    },
    {
      id:4,
      src:reat,
      title:"REACT JS",
      style:"shadow-blue-500"
    },
    {
      id:5,
      src:node,
      title:"NODE JS",
      style:"shadow-green-500"
    },
    {
      id:6,
      src:mysql,
      title:"MySQL",
      style:"shadow-blue-500"
    },
    {
      id:7,
      src:git,
      title:"GITHUB",
      style:"shadow-gray-400"
    },
    {
      id:8,
      src:java,
      title:"Java",
      style:"shadow-red-400"
    },
    {
      id:9,
      src:springboot,
      title:"Spring boot",
      style:"shadow-green-400"
    },
    {
      id:10,
      src:angular,
      title:"Angular",
      style:"shadow-red-400"
    },
    
  ]

  return (
    <div
      id="experience"
      name="experience"
      className='h-auto bg-gradient-to-b from-gray-800 to-black w-full h-screen'
    >
      <div
     className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
     w-full h-full text-white'
      >
        <div className='sm:mt-44'>
          <p className='text-4xl font-bold border-b-4 border-gray-500  p-2 inline'>
            Experiencia
          </p>
          <p className='py-6 text-2xl'>Tecnologías más relevantes </p>
        </div>

      <div className='w-full  grid grid-cols-2  sm:grid-cols-4 gap-8  text-center py-8 px-12 sm:px-0'>
      {
        tech.map(({id,src,title,style})=>(
            <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className='w-10 h-10  mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>
          
        ))
      }
      </div>

      </div>

    </div>
  )
}

export default Experience