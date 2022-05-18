import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Register from '../components/register'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="w-[30%] mx-auto text-white text-4xl mt-20  text-center">
      <h1 className='mt-10 '>Welcome to Netixsol Cloud Storage</h1>
     
    </div>

    </>
  )
}
