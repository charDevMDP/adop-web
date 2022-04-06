import { getProviders, signIn } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from '../components/layout'
import AuthHeader from '../components/auth/authHeader'
import LoginForm from '../components/auth/loginForm';
import LoginGoogle from '../components/auth/loginGoogle'
import Alert from '../components/alert'
export default function SignIn({ providers }){

  const router = useRouter()
  const { error } = router.query
  
  console.log('EROORE',error)

  return (
    <Layout>

      {error && <Alert error={error} type={'alert'}/> }   

      <AuthHeader/>
 
      {Object.values(providers).map((provider) => (
          <div key={provider.name}>
              {provider.name === 'credentials' &&
                <LoginForm providerid={provider.id} />
              }
          </div>
        ))}
      {Object.values(providers).map((provider) => (
          <div key={provider.name}>
              {provider.name !== 'credentials' &&
                <LoginGoogle providerid={provider.id} />
              }
          </div>
        ))}
        
    </Layout>
  )
}


// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
   props: { providers },
  }
}
