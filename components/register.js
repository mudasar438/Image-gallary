import React from 'react'
import { useState } from 'react'
import {useRouter} from 'next/router'
import {app} from '../firebase/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword   } from "firebase/auth";


const Register = () => {
  const [name, setName] =useState('')
  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('')
  const auth = getAuth();
  const router = useRouter();



    const handleSubmit = (e)=>{
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push('/login')

    alert("You Are Register & Login")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
   


    }
    const handleChange=()=>{

    }
  return (
  <>
   <div className="w-screen-lg mt-20 rounded-xl">
   <div className="text-center w-[20%] mx-auto py-5 mb-5">
        <h1 className='text-center text-4xl text-white'>Register </h1>
        </div>
<div className="w-[27%] mx-auto bgcolor p-10 items-center rounded-xl shadow">
  
    <form action="" className='' onSubmit={handleSubmit}>
      <div className="flex flex-col ">
        <label className='mx-1 text-white bFount text-xl' htmlFor="name">Name :</label>
        <input className='w-full m-2 rounded-sm ' type="text" name='name' value={name} onChange={(event)=>setName(event.target.value)}/>

      </div>
      <div className="flex flex-col">
        <label className='mx-1 text-white bFount text-xl' htmlFor="email" >Email :</label>
        <input className='w-full m-2 rounded-sm ' type="email" name='email' value={email} onChange={(event)=>setEmail(event.target.value)}/>

      </div>
      <div className="flex flex-col">
        <label className='mx-1 text-white bFount text-xl' htmlFor="password"
         >Password:</label>
        <input className='w-full m-2 rounded-sm ' type="password" name='password' value={password} onChange={(event)=>setPassword(event.target.value)}/>

      </div>
      {/* {error ? <p  className='textred bg-white rounded-sm my-3 w-[60%] px-3 mx-auto'>{error}</p> : null} */}
      <div className="className='mx-1 text-white bFount ">
        <button className='w-full p-1 m-2 text-xl bg-blue-400 rounded-lg'  type='submit'>Register</button>
      </div>
    
    </form>

</div>

  </div>
  
  </>
  )
}

export default Register