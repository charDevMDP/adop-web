import Layout from 'components/layout'
import React from 'react'
import { termsList } from '../utils/dataTerms';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function terms({terms}) {
  return (
    <Layout>
    <div className="w-full px-4 pb-2 pt-8 mb-20">
        <span className='text-center flex flex-col pb-5 text-xl'>Terminos y condiciones</span>
      <div className="w-full max-w-md md:max-w-2xl mx-auto p-2">
        {terms.map((term:any) => (
          <div key={term.title}>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xs lg:text-sm font-medium text-left text-[#ff8e00] bg-[#fff6eb] rounded-lg hover:bg-[#ffeed8] focus:outline-none focus-visible:ring focus-visible:ring-[#ffcb89] focus-visible:ring-opacity-75">
                    <span>{term.title}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-[#ffcb89]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-sm text-xs text-gray-500">
                      {term.description}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            </div>
        ) 
        )}

      </div>
    </div>
        
    </Layout>
  )
}
    

export const getStaticProps = async () => {
    return {
        props: {
            terms: termsList
        }
    }
}