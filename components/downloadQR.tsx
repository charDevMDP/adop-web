import Image from 'next/image'
import React from 'react'

export default function downloadQR() {

  return (
    <>
      <div className='text-center'>
            <p>La app de Adop ya se encuentra disponible para dispositivos con Android</p>
            <p>puedes escanear con tu celular el codigo qr para ser redirigido al Play Store</p>
        </div>

        <div className='mt-8'>
          <Image
            src='/img/qr_img2022.png'
            height={200}
            width={200}
            layout='fixed'
            >
          </Image>
        </div>
    </>

  )
}
