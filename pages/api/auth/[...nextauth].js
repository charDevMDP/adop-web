import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"

import { db,auth, app } from '../../../firebase.config';
import * as firestoreFunctions from 'firebase/firestore'

import { signInWithEmailAndPassword } from 'firebase/auth';

import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
          email: {
              label: "email",
              type: "email",
              placeholder: "..@gmail.com",
          },
          password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          res = await signInWithEmailAndPassword(auth, credentials.email, credentials.password).then( (e) => { console.log('WW',e) })
          console.log('fff',hola)
        } catch (error) {
          console.log(error)
          req = error
        }

        const user = await res.json()
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return res
      }
  }),
  ],
  callbacks: {
    async jwt({token, user}){
      if(user){
        token.idToken = user.idToken
        token.uid = user.uid
      }
      return token
    },
    async session({session, token}){
     session.user.tag = session.user.name
      .split(' ')
      .join('')
      .toLocaleLowerCase()

      session.user.uid = token.sub

      return session;
    },
  },
  adapter: FirebaseAdapter({
      db:db,
      ...firestoreFunctions
  }),
  session:{
    strategy: 'jwt'
  },
  pages:{
    error: '../../signin',
    signIn: '../../signin'
  }
})