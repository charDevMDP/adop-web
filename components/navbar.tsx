import React, { useEffect, useRef, useState } from 'react'
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const  Navbar = () =>  {

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenOpUser, setIsOpenOpUser] = useState(false)
  const [user, setUser] = useState(null)

  const Menu = [
      {
          route: '/',
          name: 'Home'
      },
      {
        route: '/download',
        name: 'Descarga'
    },
    {
        route: '/terms',
        name: 'Terminos'
    },
]
  const MenuUser = ['Salir','Perfil']

  const refMenu = useRef<HTMLButtonElement>(null);
  const refUser = useRef<HTMLButtonElement>(null);

  const router = useRouter();

  useEffect(() => {
    const clickoutside = e => {
        if(isOpen && refMenu.current && !refMenu.current.contains(e.target)){
            setIsOpen(false)
        }          
    }
    document.addEventListener('mousedown', clickoutside, { capture: true })
    return () => {
      document.removeEventListener('mousedown', clickoutside, { capture: true })
    }
  }, [isOpen])
  
  useEffect(() => {
    const clickoutside = e => {
        if(isOpenOpUser && refUser.current && !refUser.current.contains(e.target)){
            setIsOpenOpUser(false)
        }          
    }
    document.addEventListener('mousedown', clickoutside, { capture: true })
    return () => {
      document.removeEventListener('mousedown', clickoutside, { capture: true })
    }
  }, [isOpenOpUser])

  return (
    <>
      <nav className="bg-[#ff8e00]" >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" >
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
              {/* Mobile menu button*/}
              <button onClick={()=> setIsOpen(!isOpen)} ref={refMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-[#ff8e00] text-white hover:bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    /* Icon Heroicon name: outline/menu -Menu open: "hidden", Menu closed: "block" */
                      <svg className="block  h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )
                  : (
                    /* Icon Heroicon name: outline/x - Menu open: "block", Menu closed: "hidden" */
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                }
              </button>

            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
              <div className="flex-shrink-0 flex items-center">
                  <div className="lg:hidden w-auto justify-center flex items-center ">
                        <Image layout='fixed' src="/img/logo.png" width={30} height={30} alt="Adop-Logo"></Image>
                  </div>
                <div className="hidden lg:flex h-8 w-auto justify-center items-center">
                <Image layout='fixed' src="/img/logo.png" width={22} height={22} alt="Adop-Logo"></Image>
                <span className='text-black text-sm mt-1'>ADOP</span>
                </div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {Menu.map(op => {
                    return <Link href={op.route} key={op.route}>
                        <a className= {` ${router.pathname == op.route ? 'text-white' : 'text-black'} hover:bg-white hover:text-[#ff8e00] px-3 py-2 rounded-md text-sm font-medium`}>{op.name}</a>
                        </Link>
                  })}
               
                </div>
              </div>
            </div>
             
            { user ? (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/*Heroicon name: outline/bell*/}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button onClick={()=> setIsOpenOpUser(!isOpenOpUser)} ref={refUser} type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
               
                  <Transition
                show={isOpenOpUser}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="origin-top-right absolute right-0 mt-5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">

                  {MenuUser.map(op => {
                    return <Link href={op} key={op} ><a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">{op}</a></Link>
                  })}
                </div>
              </Transition>

              </div>
            </div>
            ) : (
                <div className='hidden lg:block'>
                  {/* 
                    <Link href='/login' >
                        <a className="text-[#ff8e00] bg-white hover:scale-105 transition-all ease-out  block px-3 py-2 rounded-md text-base font-medium">Iniciar Sesion</a>
                        </Link>
                      */}
                </div>
            )}

          </div>
        </div>
 
        {/* Mobile menu, show/hide based on menu state. 
        <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1v text-center">
            {Menu.map(op => {
                    return <Link href={op.route} key={op.route} >
                        <a className={` ${router.pathname === op.route ? 'text-white' : 'text-black'} hover:bg-white hover:text-[#ff8e00] block px-3 py-2 rounded-md text-base font-medium`}>{op.name}</a>
                        </Link>
                  })}

          </div>
        </div>
        </Transition>
*/}
      </nav>
    </>
  )
}

export default Navbar
