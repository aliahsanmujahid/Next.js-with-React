import React, { useEffect, useState } from "react";
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { useLang } from "@/hooks";
import { useRouter } from 'next/router'

export default function Caroselc() {

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

<div className='item'>
       
       <div className="search_main">
  
       <div className="search_section">
       <h1 className='text-center min-[450px]:text-left'>
         {lang === "bang" ? "হাতের মুঠোয় সকল ভূমি সেবা":"All land services at hand"}
       </h1>
       <div className="searchbox2">
  
                     {/*<input type="text" placeholder={ lang === "bang" ? "যে কোন অনুসন্ধানে":"Any type of search"} />
                      
                      <div className="searchicon" >
                           <i className="fa fa-search" aria-hidden="true"></i>
  </div>*/}

            <form role="form" onSubmit={handleSubmit} className="relative hover:shadow-lg hover:shadow-blue-500/50 flex w-full bg-white rounded-full">
              <input type="text" value={term} placeholder="Search Keyword" className=" px-3 py-1 sm:px-6 sm:py-2
                w-full text-gray-700 focus:outline-none" onChange={(e) => setTerm(e.target.value)} />
              <button onClick={handleSubmit} className="text-[10px]  sm:text-[15px]  absolute right-2 top-2 min-[400px]:right-[16px] text-gray-500  font-semibold focus:outline-none">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>


      </div>
  
      <div className="search_btn justify-center min-[450px]:justify-start  text-center sm:text-left">
  
            <button className="" >{lang === "bang" ? "ভূমিসেবা":"Land service"}</button>
            <button onClick={ goFilter} className="" >{lang === "bang" ? "কনসালটেশন":"Consultation"}</button>
  
      </div>
  
      </div> 
  
       </div> 
  
  
  
      <div className="bounce-1">
         <div className="box">
              <img className="img1" src="../images/slider/img1.png" alt="" />
        </div>
      </div>
  
      <div className="bounce-2">
         <div className="box2">
              <img className="img2" src="../images/slider/img2.png" alt="" />
         </div>
      </div>
  
      <div className="bounce-5">
         <div className="box5"></div>
      </div>
  
      <div className="bounce-4">
         <div className="box4"></div>
      </div>
  
      <div className="bounce-3">
         <div className="box3"></div>
      </div>
  
      </div>

      </>


  )
}