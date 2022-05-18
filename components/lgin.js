import React from 'react'
import { useState } from 'react';
import {app} from '../firebase/firebaseConfig'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router';

const Lgin = () => {
  const [email, setEmail]= useState();
  const [password, setPassword] = useState();
  const auth = getAuth();
  const router = useRouter();
  


   
 

    const handleSubmit = (e)=>{
      e.preventDefault();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
         
          router.push('/Uplode')

          // ...
        } else {
          // User is signed out
          // ...
        }
      });


    }
    const handleChange=()=>{

    }

  return (
    <>
    <div className="w-screen-lg mt-20 rounded-xl">
        <div className="text-center w-[20%] mx-auto py-5 mb-5">
        <h1 className='text-center text-4xl text-white'>Login </h1>
        </div>
 
<div className="w-[27%] mx-auto bgcolor  p-10 items-center rounded-xl shadow">
  
    <form action="" className='' onSubmit={handleSubmit}>
      
      <div className="flex flex-col">
        <label className='mx-1 text-white bFount text-xl' htmlFor="email" >Email :</label>
        <input className='w-full m-2 rounded-sm ' type="email" name='email' value={email} onChange={handleChange}/>

      </div>
      <div className="flex flex-col">
        <label className='mx-1 text-white bFount text-xl' htmlFor="password" >Password:</label>
        <input className='w-full m-2 rounded-sm ' type="password" name='password' value={password} onChange={handleChange}/>

      </div>
      {/* {error ? <p  className='textred bg-white rounded-sm my-3 w-[60%] px-3 mx-auto'>{error}</p> : null} */}
      <div className="className='mx-1 text-white bFount ">
        <button className='w-full p-1 m-2 text-xl bg-blue-400 rounded-lg'  type='submit'>Login</button>
      </div>
    
    </form>

</div>

  </div>
    </>
  )
}

export default Lgin