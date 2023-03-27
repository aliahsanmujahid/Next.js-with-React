import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CurdProps from '@/models/Card';
import  Cards  from "../components/Cards";
import { useLang } from "@/hooks";
import  Contact  from "@/components/Contact";
import { useRouter } from 'next/router'


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Home() {

  const { LangInfo,HandleChange } = useLang();
  const { lang } = LangInfo;

  const [curds, setCurds] = useState<CurdProps[]>([
    {id:0,img:'/images/Vector1.png',stitle:'Namazira1 Service',name:'anianto',title:'Namazira Service',vari:'Namazira Service',count:23},
    {id:1,img:'/images/Vector3.png',stitle:'Namazira2 Service',name:'basir',title:'Namazira Service',vari:'Namazira Service',count:24},
    {id:2,img:'/images/Vector1.png',stitle:'Namazira3 Service',name:'tamil',title:'Namazira Service',vari:'Namazira Service',count:45},
    {id:3,img:'/images/Vector2.png',stitle:'Namazira4 Service',name:'karii',title:'Namazira Service',vari:'Namazira Service',count:34},
    {id:4,img:'/images/order.png',stitle:'Namazira5 Service',name:'bob',title:'Namazira Service',vari:'Namazira Service',count:56},
    {id:5,img:'/images/vector.png',stitle:'Namazira6 Service',name:'salim',title:'Namazira Service',vari:'Namazira Service',count:22},

  ]);

  const options = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
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
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,

        }
    },
};

  const [term, setTerm] = useState('')

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(term){
      router.push(`/search?search=${term}&offset=0`)
    }
  }

 
  return (
  
    <Layout>

         <div className=" mx-auto pt-[75px] md:pt-[130px] mb-8">

          <div className="lists text-center">

            <div className="flex flex-wrap flex-col mx-auto">
                <div className="title ">
                    
                    {lang === 'eng' ? (
                
                <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 font-semibold">
                    All land related services
                    </h4>
              ) : (
                
                <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 font-semibold">
                      ভূমি সংক্রান্ত সমস্ত সেবা
                    </h4>
              )}

                </div>
                <div className="searchbox">

                  {/*<input type="text" required placeholder="যে কোন অনুসন্ধানে" onChange={(e) => setTerm(e.target.value)} />
                    
                    <div className="searchicon"  onClick={handleSubmit}>
                        <i className="fa fa-search" aria-hidden="true"></i>
              </div>*/}

            <form role="form" onSubmit={handleSubmit} className="relative hover:shadow-lg hover:shadow-blue-500/50 flex w-full bg-white rounded-full">
              <input type="text" value={term} placeholder="Search Keyword" className=" px-3 py-1 sm:px-6 sm:py-2
                w-full text-gray-700 focus:outline-none" onChange={(e) => setTerm(e.target.value)} />
              <button onClick={handleSubmit} className="text-[10px]  sm:text-[15px]  absolute right-2 top-3 sm:top-2 min-[400px]:right-[16px] text-gray-500  font-semibold focus:outline-none">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>


                </div>

            </div>

              <div className="box-container grid-cols-3 gap-3">

            
                <Cards values={curds} />


              </div>

            <div className="loadmore">
              
              <button className="">
                 আরো দেখুন
              </button>
            </div>

        </div>





        <section className="py-8">
      
      <h1 className="theme_h1 text-center p-4">ভূমি সংক্রান্ত অন্য সেবা সমূহ</h1>
    <div className="w-[98%] md:w-[70%] m-auto">



<OwlCarousel className="slider-items owl-carousel" {...options}>

<div className='p-4 m-4 border min-h-[40vh] max-[400px]:min-h-[30vh] flex flex-col justify-center  p-1 sm:p-0 m-auto'>
    <img className="w-[50%!important] m-auto" src="images/channels4_profile 1.png" alt="" />
    <p className="text-center text-[20px] text-[green] font-bold pb-2">ভূমিসেবা</p>
</div>

<div className='p-4 m-4 border min-h-[40vh] max-[400px]:min-h-[30vh] flex flex-col justify-center  p-1 sm:p-0 m-auto'>
<img className="w-[50%!important] m-auto" src="images/logo-v32.png" alt="" />
<p className="text-center text-[20px] text-[green] font-bold pb-2">ভূমিসেবা</p>
</div>

<div className='p-4 m-4 border min-h-[40vh] max-[400px]:min-h-[30vh] flex flex-col justify-center  p-1 sm:p-0 m-auto'>
<img className="w-[50%!important] m-auto" src="images/image7.png" alt="" />
<p className="text-center text-[20px] text-[green] font-bold pb-2">দলিল ক্যালকুলেটর</p>
</div>

<div className='p-4 m-4 border  min-h-[40vh] max-[400px]:min-h-[30vh] flex flex-col justify-center  p-1 sm:p-0 m-auto'>
<img className="w-[50%!important] m-auto" src="images/channels4_profile 1.png" alt="" />
<p className="text-center text-[20px] text-[green] font-bold pb-2">ভূমিসেবা</p>
</div>




</OwlCarousel>

    </div>
</section>





            <Contact vari={1} />



</div>

      
   
    </Layout>

  );
  
}
