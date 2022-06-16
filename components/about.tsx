import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div className='flex flex-col items-center mb-20'>
        <div className='w-56 md:w-72 mt-5 mb-8'>
        <Image 
        src= '/img/logoTextoHome.png'
        height={300}
        width={300}
        layout='responsive'
        alt='ADOP LOGO HOME'
        className='pt-5 '
        ></Image>
        </div>


        <div className='text-center mx-8 md:mx-32'>
        <p>Esta es la web oficial de Adop.</p>
        <p>
            Adop es una aplicación móvil desarrollada por la necesidad de crear un medio útil para la adopción de mascotas.
            Adop conecta a aquellas personas que quieren adoptar con las que dan en adopción.
            Sencilla, diseñada para apoyar y encontrar hogares a mascotas, pensada para Mar del Plata y la zona
        </p>


        </div>
    </div>
  )
}
