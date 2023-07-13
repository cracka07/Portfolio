import React from 'react'

const About = () => {
  return (
    <div  id="about" name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'
    >

        <div className='  max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='sm:mt-8 pb-8'>
                <p className='   text-4xl font-bold inline border-b-4
                border-gray-500'>
                    Sobre mi
                    </p>
            </div>
            <p className='text-xl mt-20'>
                Soy un apasionado desarrollador con una base sólida en tecnología.
                Comencé mis estudios en Ingeniería en Sistemas de Información en 2009 y,
                después de adquirir tres años de conocimientos, decidí tomar un enfoque más
                práctico para mi crecimiento profesional. Fue  entonces cuando surgió la oportunidad
                de unirme a Henry,una experiencia que me atrajo inmediatamente.
            </p>
            <br/>
            <p className='text-xl'>
                Me gradúe en Henry en 2022, obteniendo habilidades en desarrollo web full stack.
                Durante los proyectos que realicé en Henry, me han ayudado a desarrollar mis capacidades de
                ser autodidacta, de trabajar en equipo, de tomar una actitud positiva y proactiva.
                Desde entonces, me especialicé en el desarrollo backend con Java y he seguido comprometido
                con mi crecimiento profesional y me mantengo actualizado en las últimas tecnologías.
                
            </p>
            <br/>
            <p className='text-xl'>
                Mi enfoque radica en construir soluciones y mi experiencia previa en Ingeniería en Sistemas de Información
                me brinda una base sólida para comprender los desafios técnicos y empresariales.
                Estoy emocionado de continuar desarrollándome y aportar mi experiencia y pasión al éxito de
                su equipo y proyecto.

            </p>
        </div>
    </div>
  )
}

export default About