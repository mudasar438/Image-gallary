import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
   <>
   <div className="w-screen fbg">
       <div className="w-full flex flex-col md:flex-row justify-between py-12">
         <div className="w-full md:w-[35%] px-3 ">
           <p className='htext text-3xl p-4 tracking-wide text-center'>Get the latest updates</p>
          <div className="flex w-[90%] mx-auto md:w-full flex-col md:flex-row ">
        
          <input className=' w-full md:w-[60%] rounded-sm p-3 ' type="text" placeholder='Email' />

          
          {/* <div className="bg-blue-400 border-2  w-full md:w-[30%] gobtn text-center text-xl rounded-sm"> */}

          <button className="bg-blue-400   p-3 mt-4 md:mt-0 w-full md:w-[25%] gobtn text-center text-xl rounded-sm">Go</button>
          {/* </div> */}
          </div>
         </div>
         <div className="w-[60%] text-center md:text-left mx-auto   md:w-[25%] text-white   flex mt-10 ">
           <div className=" md:w-[50%] md:border-r-2">
             <ul className='pr-5'>
              <li><Link href=""><a ><h3 className='text-xl font-bold pb-2'>Sitemap</h3></a></Link></li>
              <li><Link href=""><a ><p>Overview</p></a></Link></li>
              <li><Link href=""><a ><p>Metahuts</p></a></Link></li>
              <li><Link href=""><a ><p>Team</p></a></Link></li>
              <li><Link href=""><a ><p>Platform</p></a></Link></li>
              <li><Link href=""><a ><p>Tokenomics</p></a></Link></li>
              <li><Link href=""><a ><p>Token Audit</p></a></Link></li>
              <li><Link href=""><a ><p>Whitepaper</p></a></Link></li>
              <li><Link href=""><a ><p>Keepface</p></a></Link></li>
              <li><Link href=""><a ><p>Blog</p></a></Link></li>
              </ul>
           
           </div>
           <div className="">
           <ul className='md:ml-10 md:pl-5'>
              <li><Link href=""><a ><h3 className='text-xl font-bold pb-2'>Community</h3></a></Link></li>
              <li><Link href=""><a ><p>Overview</p></a></Link></li>
              <li><Link href=""><a ><p>Metahuts</p></a></Link></li>
              <li><Link href=""><a ><p>Team</p></a></Link></li>
              <li><Link href=""><a ><p>Platform</p></a></Link></li>
              <li><Link href=""><a ><p>Tokenomics</p></a></Link></li>
              <li><Link href=""><a ><p>Token Audit</p></a></Link></li>
              <li><Link href=""><a ><p>Whitepaper</p></a></Link></li>
              <li><Link href=""><a ><p>Keepface</p></a></Link></li>
              <li><Link href=""><a ><p>Blog</p></a></Link></li>
              </ul>

           </div>
         </div>
         <div className="w-[80%] mx-auto  md:w-[30%] text-white mt-20 mr-10">
           <div className="text-2xl md:text-xl text-center md:text-right">
             <p className=' ftext p-3'>Metafluence – Influence To Earn</p>
             <p className='ftext p-3'>Incubated by – <Link a href=""><a className='text-white font-bold'>Master Venture</a></Link></p>
             <p className=' ftext p-3'>Secured by – <Link a href=""><a className='text-white font-bold'> Hacken</a></Link></p>
             <p className=' ftext p-3'>Powerd by – <Link a href=""><a className='text-white font-bold'> Keepface</a></Link></p>
           
                                                

           

            
           </div>
           <div className=""></div>
           

         </div>

           
       </div>
       <div className="w-[100%] text-sm md:xl md:w-[50%] text-center mx-auto p-10 text-white ">
         <p >Contract: 0xa78775bba7a542F291e5ef7f13C6204E704A90Ba</p>
         <p>300 Cluster R, Jumeirah Lakes Towers, Dubai, United Arab Emirates</p>
         <p>© Metafluence.com, all rights reserved.</p>

       </div>


   </div>

   </>
  )
}

export default Footer