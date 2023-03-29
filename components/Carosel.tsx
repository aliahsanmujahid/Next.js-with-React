import React, { useEffect, useState } from "react";
import { useLang } from "@/hooks";
import { useRouter } from 'next/router'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

interface UserProps {
  value: any
};

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
  const Carosel = ({ value } : UserProps) => {
    
    const { LangInfo } = useLang();
    const { lang } = LangInfo;



  return (


    

    <div  className='w-[99%] h-[97vh] sm:w-[90%] m-auto item'>
       
    <div className="relative w-[100%] p-2 sm:w-[62%] sm:p-6 z-10">

    <div className=" z-10">
    <h1 className=" theme_h1 text-center sm:text-left">
    { lang === "bang" ? value?.title : "All land services at hand" }
      </h1>
    <p className='z-10 text-center min-[450px]:text-left theme_h3'>
      { lang === "bang" ? value?.details : "All land services at hand" }
    </p>
    </div>

    </div> 



   <div className=" bounce-1 z-0">
      <div className="box z-0">
           <img className="img1" src={value?.img1} alt="" />
     </div>
   </div>

   <div className=" bounce-2 z-0">
      <div className="box2">
           <img className="img2 z-0" src={value?.img2} alt="" />
      </div>
   </div>

   <div className=" bounce-5 z-0">
      <div className="box5"></div>
   </div>

   <div className=" bounce-4 z-0">
      <div className="box4"></div>
   </div>

   <div className=" bounce-3 z-0">
      <div className="box3"></div>
   </div>

   </div>
    



  )
}

export default Carosel;