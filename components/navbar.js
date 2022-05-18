import React from 'react'

import Link from 'next/link'

const Navbar = () => {


  return (
 <>
 <div className='w-screen'>
   

 <div className='flex justify-between  bgcolor shadow2'>
     <div className='w-full text-white text-3xl ml-10 bFount'>
         <ul className='flex justify-between p-4'>
             <li>
                 <Link  href="/"><a>Netixsol</a></Link>

             </li>
             <div className="flex">

             <li className='mx-5'>
                 <Link  href="/login"><a>Login</a></Link>

             </li>
             <li className='mx-5'>
                 <Link  href="/Reg"><a>Register</a></Link>

             </li>
             </div>
         </ul>
            
     
     </div>
     

 </div>
 </div>
 
 </>
  )
}

export default Navbar