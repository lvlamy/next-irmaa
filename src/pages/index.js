import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Service from '@/components/service'
import SimpleChat from '@/components/SimpleChat'
import Contact from '@/components/contact'

import styles from '../styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>

      <Header />

      <Navbar />

      <Service />

      <div className={styles.chatbot}>
        <SimpleChat />

      </div>
      
      <Contact />

      <Footer />

    </>
  )
}
