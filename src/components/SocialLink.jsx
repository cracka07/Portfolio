import React from 'react'
import { IoLogoWhatsapp,
    IoLogoLinkedin,
    IoLogoGithub,
    } from "react-icons/io";
import {HiOutlineMail} from "react-icons/hi"
import {BsPersonLinesFill} from "react-icons/bs"

const SocialLink = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                 LinkedIn <IoLogoLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/mariano-ferrer/",
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                 GitHub <IoLogoGithub size={30}/>
                </>
            ),
            href:"https://github.com/cracka07",
         
        },
        {
            id:3,
            child:(
                <>
                 Email <HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:mariano_fferrer@hotmail.com",
         
        },
        {
            id:4,
            child:(
                <>
                 WhatsApp <IoLogoWhatsapp size={30}/>
                </>
            ),
            href:"https://wa.me/543516148935",
         
        },
        {
            id:5,
            child:(
                <>
                 C.V <BsPersonLinesFill size={30}/>
                </>
            ),
            href:"/CV-Mariano Ferrer.pdf",
            style:"rounded-br-md",
            download:true
         
        },
        

    ]


    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-8 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default SocialLink