import React, { useState } from 'react'
import AuthHeader from './authHeader'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useRouter } from 'next/router';
import Alert from '../alert';
import { signIn } from 'next-auth/react';
export default function LoginForm({providerid}) {

  //const [message, setMessage] = useState('')
  //const [showNotification, setShowNotification] = useState(false)
  //const [type, setType] = useState('')
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  //const { push } = useRouter()

  const changeUser = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  /*
  const login = async (e:any) => {
    e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        showMessage('Login existoso','success')
        push('/')
      } catch ({message}) {
        if(message === 'Firebase: Error (auth/wrong-password).'){
          showMessage('Usuario o contraseña incorrecta','alert')
        }
        if(message === 'Firebase: Error (auth/user-not-found).'){
          showMessage('El usuario ingresado no existe','alert')
        }
      }
  }
  

  const showMessage = (msg, type) => {
    setMessage(msg);
    setShowNotification(true);
    setType(type)
    setTimeout(()=> {
      setShowNotification(false)
      setType('')
    },5500)
  }
*/
  return (
    <div className='flex flex-col items-center mb-5'>
      
    <div className="max-w-md w-full space-y-8 px-8">
          
          <form className="mt-8 space-y-6" onSubmit={() => 
            signIn(providerid, { email: credentials.email, password: credentials.password, redirect: false, callbackUrl: '/' })
            
          }>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo Electronico
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#ff8e00] focus:border-[#ff8e00] focus:z-10 sm:text-sm"
                  placeholder="Ingresa tu correo"
                  onChange={changeUser}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#ff8e00] focus:border-[#ff8e00] focus:z-10 sm:text-sm"
                  placeholder="Ingresa la contraseña"
                  onChange={changeUser}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#f58d0a] focus:ring-[#ff8e00] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Recordar
                </label>
              </div>

              <div className="text-xs md:text-sm">
                <a href="#" className="font-medium text-[#f58d0a] hover:text-[#ff8e00]">
                  Olvidaste la contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f58d0a] hover:bg-[#f58d0a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff8e00]"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        </div>
  )
}
