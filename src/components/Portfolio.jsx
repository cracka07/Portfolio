import React from 'react'
import foodUniverse from "./img/FoodsUniverse.png"
import countries from "./img/countries.png"
import breakingBad from "./img/breakingBad.png"

const Portfolio = () => {



  return (
    <div id="portfolio" name="portfolio"
        className='bg-gradient-to-b from-black to-gray-800 w-full 
        text-white md:h-screen'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
        w-full h-full'>
            <div className='sm:mt-10 pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Portfolio
            </p>
            <p className='py-6 text-3xl '>Mirá mis proyectos aquí</p>
            </div>


           
      

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              <div className="shadow-md shadow-gray-600 rounded-lg">
                             <img src={foodUniverse} alt=""
                              className='rounded-md duration-200 hover:scale-105'
                              />
                            <div className='flex items-center justify-center'>
                          
                            <a className=' hover:text-yellow-400  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href="https://food-fast-client.vercel.app/" target="_blank">
                              Demo
                             </a>
                             <a className= '  hover:text-yellow-400  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href="https://github.com/cracka07/Proyecto-Grupal-Food-s-Universe" target="_blank">
                              Código
                             </a>
                             </div>   
                             
              </div>
              <div className="shadow-md shadow-gray-600 rounded-lg">
                             <img src={countries} alt=""
                              className='rounded-md duration-200 hover:scale-105'
                              />
                            <div className='flex items-center justify-center'>
                          
                         
                             <a className='hover:text-yellow-400   w-1/2 px-8 py-3 m-4 duration-200 hover:scale-105' href="https://github.com/cracka07/Proyecto-Individual-Henry-Countries" target="_blank">
                              Código
                             </a>
                             </div>   
                             
              </div>
              <div className="shadow-md shadow-gray-600 rounded-lg">
                             <img src={breakingBad} alt=""
                              className='rounded-md duration-200 hover:scale-105'
                              />
                            <div className='flex items-center justify-center'>
                          
                            <a className=' hover:text-yellow-400  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href=" https://cracka07.github.io/Breaking-Bad-React-Redux/" target="_blank">
                              Demo
                             </a>
                             <a className='hover:text-yellow-400 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href="https://github.com/cracka07/Breaking-Bad-React-Redux" target="_blank">
                              Código
                             </a>
                             </div>   
                             
              </div>
              
           
            {
            /* {
                portfolios.map(({id,src})=>(
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                              <img src={src} alt=""
                              className='rounded-md duration-200 hover:scale-105'
                              />
                        <div className='flex items-center justify-center'>
                          <button  onClick={(e)=>handleClickDemoFood()} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Demo
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Código
                            </button>
                        </div>
                        </div>

                ))} */}
    
           </div>
        </div>
    </div>
  )
}

export default Portfolio