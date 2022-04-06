import React from 'react'
import Image from 'next/image'

export default function AuthHeader() {
  return (
    <div className='justify-center flex flex-col items-center'>
        <div className='w-36 md:w-72 mt-5'>
        <Image 
        src= '/img/logoTextoHome.png'
        height={100}
        width={100}
        layout='responsive'
        alt='ADOP LOGO LOGIN'
        className=''
        ></Image>
        </div>
    </div>
  )
}
