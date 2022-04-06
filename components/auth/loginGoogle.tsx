import React from 'react';
import Image from 'next/image'
import { signIn } from 'next-auth/react'
export default function loginGoogle({providerid}){

  return (
    <div className='mt-30 text-center flex flex-col justify-center items-center mb-20'>
    <p className='text-black/75'>- o utiliza una red social -</p>
    <div onClick={ () => signIn(providerid, { callbackUrl: "/"})}>
      <button  className="w-100 flex justify-center mx-8 border border-[#4285f4] text-[#4285f4] mt-5 px-8 pb-1 pt-2 rounded-md hover:bg-[#4285f4] hover:text-white" >
          <div className=''>
            <Image className="" width={14} height={14} layout='fixed' src="/img/GoogleG-Logo.svg" alt='Login con Google'/>
          </div>
        <span className='font-bold ml-2 text-sm'>Iniciar con Google</span>
        </button>
    </div>
    </div>
  )
}
