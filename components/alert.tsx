import React, { useEffect, useState } from 'react'

export default function alert({error, type=''}) {
  
  const [showNotification, setShowNotification] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)

  console.log('ERROR', error)

  const errors = {
  Signin: "Error: Intente iniciar con otra cuenta.",
  OAuthSignin: "Error: Intente iniciar con otra cuenta.",
  OAuthCallback: "Error: Intente iniciar con otra cuenta.",
  OAuthCreateAccount: "Error: Intente iniciar con otra cuenta.",
  EmailCreateAccount: "Error: Intente iniciar con otra cuenta.",
  Callback: "Error: Intente iniciar con otra cuenta.",
  OAuthAccountNotLinked:
    "Al parecer ya usaste esta cuenta con otro proveedor.",
  EmailSignin: "Revisa tu correo electronico.",
  CredentialsSignin:
    "Revisa los datos ingresados, al parecer no son correctos.",
  default: "Imposible acceder con esta cuenta.",
};

useEffect(() => {
  setErrorMsg(error && (errors[error] ?? errors.default))
  setTimeout(()=> {
   setShowNotification(false)
  },4500)
}, [])
  
  return (
    <div className={ showNotification ? 'ease-in flex justify-center' : 'hidden'}>
      <div className={type === 'alert' ? "text-orange-700 bg-orange-100 px-4 py-2 border-0 rounded relative mb-4 mt-2 " : "text-teal-700 bg-teal-100 px-4 py-4 border-0 rounded relative mb-4 mt-2" }>
        <span className="text-xl inline-block mr-5 align-middle">
          <i className="fas fa-bell" />
        </span>
        <span className="inline-block align-middle mr-8 text-xs">
          {errorMsg}
        </span>
        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none">
          <span>×</span>
        </button>
      </div>
    </div>
  )
}
