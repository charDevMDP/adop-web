import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function downloadPS() {

   function goPlayStore(){
     if(typeof window !== 'undefined') {
      window.location.href='market://details?id=com.adop.char.dev'
     }
   }

  return (

    <>
      <div className='text-center'>
            <p>La app de Adop ya se encuentra disponible para dispositivos con Android</p>
            <p>toca el boton para ser redirigido al Play Store</p>
        </div>

        <div className='mt-8'>

          <a onClick={() => goPlayStore()}>
            <Image
            src='/img/logoPlayStore.png'
            height={80}
            width={200}
            layout='fixed'
            >
            </Image></a>
        </div>
    </>

  )
}
