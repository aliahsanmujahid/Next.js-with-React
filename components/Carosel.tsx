import React, { useEffect, useState } from "react";
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { useLang } from "@/hooks";
import { useRouter } from 'next/router'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Carosel({data}) {


  console.log("datadatadatadata   ",data);

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

   const options3 = {
    responsiveClass: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:3000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    startPosition: 0,
    center: true,
    mouseDrag:false,
    touchDrag:false,
    pullDrag:false,
    freeDrag:false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        500: {
          items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    },
   };


  return (
      <div className="relative">


        <OwlCarousel className="h-[75vh] slider-items owl-carousel" {...options3}>

          {data?.map((data , index) =>  
    

    <div key={index} className='w-[99%] h-[97vh] sm:w-[90%] m-auto item'>
       
    <div className="w-[100%] p-2 sm:w-[62%] sm:p-6 z-10">

    <div className=" z-10">
    <h1 className=" theme_h1 text-center sm:text-left">{data?.title}</h1>
    <p className='z-10 text-center min-[450px]:text-left theme_h3'>
      {lang === "bang" ? data?.details:"All land services at hand"}
    </p>
    </div>

    </div> 



   <div className="bounce-1 z-0">
      <div className="box z-0">
           <img className="img1" src={data?.img1} alt="" />
     </div>
   </div>

   <div className="bounce-2 z-0">
      <div className="box2">
           <img className="img2 z-0" src={data?.img2} alt="" />
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
    
          )} 

        </OwlCarousel>

    <div className="absolute left-[8%] top-[50%] bottom-[50%] w-[80%] sm:w-[40%] m-auto">
    <div className="py-4">


         <form role="form" onSubmit={handleSubmit} className="z-10 relative hover:shadow-lg hover:shadow-blue-500/50 flex w-full bg-white rounded-full">
           <input type="text" value={term} placeholder="Search Keyword" className="rounded px-3 py-1 sm:px-6 sm:py-2
             border-2 border-gray-300 w-full text-gray-700 focus:outline-none" onChange={(e) => setTerm(e.target.value)} />
           <button onClick={handleSubmit} className="text-[10px]  sm:text-[15px]  absolute right-2 top-3 min-[400px]:right-[16px] text-gray-500  font-semibold focus:outline-none">
             <i className="fa-solid fa-magnifying-glass"></i>
           </button>
         </form>


   </div>

   <div className="search_btn justify-center min-[450px]:justify-start  text-center sm:text-left">

         <button className="z-10 text-white" >{lang === "bang" ? "ভূমিসেবা":"Land service"}</button>
         <button onClick={ goFilter} className="z-10 text-white" >{lang === "bang" ? "কনসালটেশন":"Consultation"}</button>

   </div>

     
    </div> 


      </div>




  )
}