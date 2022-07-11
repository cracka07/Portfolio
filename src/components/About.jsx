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
                Soy una persona autodidacta con trabajo en equipo, con desarrollo
                en la comunicación, escucha activa, la inteligencia emocional.
                Estas capacidades las desarrollé a partir de un proyecto grupal titulado como
                Food's Universe que pueden ver en la sección portfolio.
            </p>
            <br/>
            <p className='text-xl'>
                Tengo muchas ganas de seguir trabajando y ampliando mis conocimientos cuyo objetivo 
                es que la empresa crezca gracias a mis aportes haciendo que mis tareas sean productivas y eficaces.

            </p>
            <br/>
            <p className='text-xl'>
                ¿Porqué estudiar programación?
                
                Me inicié en este mundo, en el año 2009 ingresando a estudiar la carrera de ingeniería en sistemas
                en la Universidad Tecnológica Nacional, cuyo avance fue hasta tercer año completo.
                El motivo principal por la cual me inicié en el mundo de la programación fue;  cada vez se van a solicitar más programadores en el mercado laboral.
                Luego con el transcurso del tiempo, me fue interesando otros aspectos asi cómo el poder solucionar problemas en términos de poder ser yo quien le de instrucciones 
                a la máquina y que la misma responda según mi código en este caso.
                De esa forma fui desarrollando la capacidad del pensamiento lógico.
            

            </p>
        </div>
    </div>
  )
}

export default About