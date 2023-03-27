import React, { useEffect, useState } from "react";
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { useLang } from "@/hooks";
import { useRouter } from 'next/router'

export default function Carosel() {

   const { LangInfo } = useLang();
   const { lang } = LangInfo;


   
   const [term, setTerm] = useState('')

   const router = useRouter()
 
   const handleSubmit = (e) => {
     e.preventDefault()
     if(term){
       router.push(`/search?search=${term}&offset=0`)
     }
   }

   const goFilter = ()  => {
       router.push(`/search?search=${term}&offset=0`)
   }


  return (
      <>

<div className='w-[99%] h-[97vh] sm:w-[90%] m-auto item'>
       
       <div className="w-[100%] p-2 sm:w-[62%] sm:p-6 z-10">
  
      
       <div className="relative z-10">
       <h1 className=" theme_h1 text-center sm:text-left">আপনি কি নিষ্কন্টক (ভেজালবিহীন) জমি ক্রয়ের কথা ভাবছেন ?</h1>
       <p className='z-10 text-center min-[450px]:text-left theme_h3'>
         {lang === "bang" ? "জমি ক্রয়ে মালিকানা যাচাই, রেকর্ড অর্থাৎ খতিয়ান, মৌজা, দাগ নম্বর এবং নকশা যাচাই করে জমি ক্রয় করতে এক্ষুনি রেজিস্ট্রেশন করে আমাদের ভূমি বিশেষজ্ঞদের পরামর্শ নিন।":"All land services at hand"}
       </p>
       </div>

       <div className="w-[100%]">
       <div className="py-4">


            <form role="form" onSubmit={handleSubmit} className="z-10 relative hover:shadow-lg hover:shadow-blue-500/50 flex w-full bg-white rounded-full">
              <input type="text" value={term} placeholder="Search Keyword" className="rounded px-3 py-1 sm:px-6 sm:py-2
                w-full text-gray-700 focus:outline-none" onChange={(e) => setTerm(e.target.value)} />
              <button onClick={handleSubmit} className="text-[10px]  sm:text-[15px]  absolute right-2 top-3 min-[400px]:right-[16px] text-gray-500  font-semibold focus:outline-none">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>


      </div>
  
      <div className="search_btn justify-center min-[450px]:justify-start  text-center sm:text-left">
  
            <button className="z-10" >{lang === "bang" ? "ভূমিসেবা":"Land service"}</button>
            <button onClick={ goFilter} className="z-10" >{lang === "bang" ? "কনসালটেশন":"Consultation"}</button>
  
      </div>

        
     </div> 
  
       </div> 
  
  
  
      <div className="bounce-1 z-0">
         <div className="box z-0">
              <img className="img1" src="../images/slider3.png" alt="" />
        </div>
      </div>
  
      <div className="bounce-2 z-0">
         <div className="box2">
              <img className="img2 z-0" src="../images/slider/img2.png" alt="" />
         </div>
      </div>
  
      <div className="bounce-5 z-0">
         <div className="box5"></div>
      </div>
  
      <div className="bounce-4 z-0">
         <div className="box4"></div>
      </div>
  
      <div className="bounce-3">
         <div className="box3"></div>
      </div>
  
      </div>

      </>


  )
}