'use client';
import Features from "@/Features";
//import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from './page.module.css'

//const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./Header";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <ChakraProvider>
           <Header/>
           <Pricing/>
           <Features/>
    </ChakraProvider>
      
  )
}
