import { SearchCircleIcon } from "@heroicons/react/solid";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
export default NextAuth({
   providers:[
     Credentials({
        name: 'Custom Login',
        credentials:{
            email: { label: 'Correo', type: 'email', placeholder: 'Ingresar correo'},
            password: { label: 'Contraseña', type: 'password', placeholder: 'Ingresar contraseña'}
        },
       async authorize(credentials) {
           console.log({credentials})
            return { name: 'pepe', email: 'pepe@gmail.com'};
        }
     })
   ],

   callbacks:{

        async jwt({ token, account, user }){
            console.log('Desde jwt')
            if(account){
                token.accessToken = account.access_token;

                switch (account.type) {
                    case 'oauth':
                        // check si existe en db
                        break;
                    case 'credentials':
                        token.user = user;
                        break;
                    default:
                        break;
                }

            }

            return token
        },

        async session({ session, token, user }){
            session.accessToken = token.accessToken;
            session.user = token.user as any
            
            return session 
        }
   }
})