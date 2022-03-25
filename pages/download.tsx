import Layout from 'components/layout'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DownloadPS from 'components/downloadPS'
import DownloadQR from 'components/downloadQR'

export default function Download() {

  const [device, setDevice] = useState('')

  useEffect(() => {

    const getOS = () =>  {
      let userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = '';
    
      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }
    
      return os;
    }
    
    setDevice(getOS())

    return () => { getOS() }

  }, [])


  return(
    <Layout>
         <div className="h-full px-4 pb-2 pt-8 flex flex-col mb-20 items-center justify-start">
        <span className='text-center flex flex-col pb-5 text-xl'>Descarga</span>
        {device == 'Android' ? 
          (<DownloadPS/>)
        : ( <DownloadQR/>)
        }
        {device == 'iOS' && ( <span className='text-xs my-5 text-[#ff8e00]'>*La app todavia no esta disponible para AppStore*</span>)} 
        </div>
    </Layout>
  )
}
