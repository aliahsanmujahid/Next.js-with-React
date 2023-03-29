import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useLang } from "@/hooks";
import { useRouter } from 'next/router';
import  Carosel  from "@/components/Carosel";
import  Home_Carosel  from "@/components/Home_Carosel";
import  Accordion  from "../components/Accordion";
import { AxiosResponse } from 'axios';
import { fetchFaqs } from '../http';

// if (typeof window !== 'undefined') {
//     window.$ = window.jQuery = require('jquery');
// }

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

import {
    IFaq,
    IFaqApi
  } from '../models/Faq';

interface IPropTypes {
    data: IFaqApi
  }
  

  const Home: NextPage<IPropTypes> = ({ data }) => {

  const { LangInfo,HandleChange } = useLang();
  const { lang } = LangInfo;
  const router = useRouter();

  const [nagorik, setNagorik] = useState<IFaq[]>([]);

  const [carosel, setCarosel] = useState([
    {img1:'../images/slider/img2.png',img2:'../images/slider/img2_.png',title:'সম্পূর্ণ ভূমিসেবা।',details:'দক্ষ ভূমি পরামর্শকদের সহায়তায় নাগরিকদের বিভিন্ন ধরনের ভূমিসেবা প্রদান করাই প্লাটফর্মটির মূল লক্ষ্য।'},
    {img1:'../images/slider/img1.png',img2:'../images/slider/img1_.png',title:'আপনি কি নিষ্কন্টক (ভেজালবিহীন) জমি ক্রয়ের কথা ভাবছেন ?',details:'জমি ক্রয়ে মালিকানা যাচাই, রেকর্ড অর্থাৎ খতিয়ান, মৌজা, দাগ নম্বর এবং নকশা যাচাই করে জমি ক্রয় করতে এক্ষুনি রেজিস্ট্রেশন করে আমাদের ভূমি বিশেষজ্ঞদের পরামর্শ নিন।'},
   {img1:'../images/slider/img3.png',img2:'../images/slider/img3_.png',title:'আপনি কি জমি রেজিস্ট্রেশনের খরচ নিয়ে চিন্তিত?',details:'কীভাবে আপনার জমি রেজিস্ট্রেশন করবেন বুঝতে পারছেন না? নির্ধারিত রেজিস্ট্রি ফি অনুযায়ী জমি রেজিস্ট্রি করতে এবং সেরা পরামর্শ পেতে যোগাযোগ করুন আমাদের ভূমি পরামর্শকদের সাথে।'},
    {img1:'../images/slider/img4.png',img2:'../images/slider/img4_.png',title:'জমি ক্রয়ের পর নামজারি নিয়ে ভাবছেন?',
       details:'যথা সময়ে, সঠিক উপায়ে এবং নির্ধারিত খরচে জমি নামজারি / খারিজ করতে এবং নামজারির অবস্থা জানতে আজই আমাদের ভূমি পরামর্শকদের পরামর্শ নিন।'},
    {img1:'../images/slider/img3.png',img2:'../images/slider/img4_.png',
     title:'আপনি কি আপনার জমির পর্চা/ খতিয়ান হারিয়ে ফেলেছেন?',
     details:'আপনি জমির পর্চা / খতিয়ান, মৌজা ম্যাপ হারিয়ে ফেললে অথবা নতুন করে তুলতে আমাদের ভূমি পরামর্শকদের সাথে যোগাযোগ করুন। '},
     {img1:'../images/slider/img4.png',img2:'../images/slider/img4_.png',
     title:'আপনি কি ভূমি কর বা খাজনা পরিশোধ নিয়ে চিন্তিত?',
     details:'ভূমি কর পরিশোধের সময় যেকোনো জটিলতায় এবং একের অধিক মালিকানাধীন জমির কর বা খাজনা প্রদানে নির্ভরযোগ্য এবং বিশ্বস্ত সেবা পেতে আমাদের ওয়েবসাইটে রেজিস্ট্রেশন করুন এবং নির্ভুল ভূমিসেবা গ্রহণ করুন। বিস্তারিত জানতে আমাদের পরামর্শকদের সাথে যোগাযোগ করুন। '},
  
   
  ]);

    
  const [curds, setCurds] = useState([
    {img:'../images/clips/img1.png',title:'ভূমি রেজিস্ট্রেশন'}, {img:'../images/clips/img2.png',title:'ভূমি নামজারি'},
    {img:'../images/clips/img3.png',title:'ভূমি উন্নয়ন কর'}, {img:'../images/clips/img4.png',title:'নামজারি রিভিউ'},
    {img:'../images/clips/img5.png',title:'ই-পর্চা/খতিয়ান '}, {img:'../images/clips/img6.png',title:' মিসকেস মামলা'},
    {img:'../images/clips/img6.png',title:'দেওয়ানি মামলা '}, {img:'../images/Vector.png',title:'ভূমি রাজস্ব মামলা'},
    // {img:'../images/clips/img6.png',title:'ভাড়ার সনদ ব্যবস্থাপনা'}, {img:'../images/clips/img7.png',title:'খাস জমি'},
    // {img:'../images/clips/img6.png',title:'অর্পিত সম্পত্তি'}, 
    // {img:'../images/clips/img6.png',title:' লিজ সম্পত্তি '},
    // {img:'../images/clips/img6.png',title:'রেন্ট সার্টিফিকেট মামলা'},
    // {img:'../images/clips/img6.png',title:'জমির দলিল খরচ সম্পর্কিত'},
    // {img:'../images/clips/img6.png',title:' উত্তরাধিকার সূত্রে সম্পদের বণ্ঠন সম্পর্কিত'}, 
    // {img:'../images/clips/img6.png',title:'মৌজা ম্যাপ সম্পর্কিত'},
    // {img:'../images/clips/img7.png',title:'মৌজা ম্যাপ সম্পর্কিত'},{img:'../images/Vector.png',title:'মৌজা ম্যাপ সম্পর্কিত'},
    // {img:'../images/Vector.png',title:'মৌজা ম্যাপ সম্পর্কিত'},
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
const options2 = {
    responsiveClass: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:2000,
    //animateOut: 'fadeOut',
    smartSpeed: 1000,
    startPosition: 1,
    center: true,
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

useEffect(() => {
  
    if( data.error == '404' ){
        router.push('/404');
  }
  if(data?.error !== '404'){
    setNagorik([...data?.data?.filter(i => i.category_name == 'citizen').slice(0,2),
    ...data?.data?.filter(i => i.category_name == 'consultant').slice(0,2)]);
   }

  }, []);
 
  return (
  
    <Layout>
         
   <section className="w-full h-[99vh] slidersection p-0 pt-[160px] md:pt-[130px] mb-8">


          <Carosel  data={carosel} />


   </section>
     








<section className="w-full sm:w-[90%] m-auto">
<div className="mt-12 mb-[20px] text-center">
    <p className="theme_h2 pb-2">

        {
            lang === 'eng' ? "Our":"আমাদের"
        }

    </p>
    <h1 className="theme_h1">
        
        { lang === 'eng' ? "Service Department":" পরিষেবা বিভাগ" }
        
        </h1>
</div>
<div className="grid grid-cols-2 justify-items-center md:grid-cols-4 gap-1 sm:gap-2 md:gap-6 text-center">
   

{curds?.map((item , index) => 

<div key={index} className="cursor-pointer group w-full pt-6 pb-6 flex flex-col justify-center border border-solid border-[#0094E7] rounded  mb-5 hover:text-[#0094E7] transform transition ease-in-out duration-700">
           
<div className="text-center">
   <img src={item.img} className="group-hover:scale-x-[1.18] hover:scale-y-[1.18] w-20 m-auto" alt="" />
</div>
 <p className="text-[15px] mt-3 font-bold">{item.title}</p>

</div>
  

)} 







</div>

<div className="text-center mb-8 mt-4">
    <button className="button font-bold text-white">আরো দেখুন</button>
</div>
</section>

<section className="w-full sm:relative sm:mt-[0px] mb-[30px]">

<img src="../images/Group 17.png" className="sm:absolute -right-[2vw] bottom-0 w-[90vw] sm:w-[50vw] m-auto" alt="" />
  

<div className="w-[99%] sm:w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 text-left">
    <div className="pb-2 sm:pb-5">
            
            <h1 className="theme_h1 mb-3">
            আপনার কি ভূমিসেবার প্রয়োজন?
            </h1>
            <p className=" theme_h3">
                ভূমি সংক্রান্ত সেবার জন্য আবেদন করুনভূমি সংক্রান্ত সেবার জন্য 
                আবেদন করুনসংক্রান্ত সেবার জন্য আবেদন করুন ভূমি সংক্রান্ত সেবার
                জন্য আবেদন করুনghyuভূমি সংক্রান্ত সেবার জন্য আবেদন করুনভূমি 
                সংক্রান্ত সেবার জন্য আবেদন করুনসংক্র
            </p>

    </div>
</div>
<div className="w-full py-6 justify-start bg-[#348739]">
 
   <div className=" w-[99%] sm:w-[90%] m-auto flex flex-col justify-start">
    <h3 className="text-[17px] sm:text-[20px] tracking-widest text-white">সেবার জন্য</h3>
    <div className="block">
      <button className="px-8 py-2 bg-white leading-none rounded-md text-[#348739] text-[15px] font-bold">
         <i className="text-[17px] fa-solid fa-phone mr-2"></i>
        বিস্তারিত
      </button>
      <i className=" text-[20px] text-white ml-3 fa-brands fa-facebook-messenger"></i>
      <i className=" text-[20px] ml-3 fa-brands fa-whatsapp text-white"></i>
     

    </div>
     
   
   </div>

</div>


</section>




<section className="w-full mx-auto py-5" >

      <div className="container p-1 m-auto grid sm:grid-cols-2">

        <div>
        <img className="h-50 sm:w-6/12 md:w-full m-auto object-cover md:h-full md:w-50" src="/images/image15.png" alt="Modern building architecture" />
           
        </div>
          
        <div className="mt-auto mb-auto sm:p-4">
          <h1 className="theme_h1 mb-2">সম্পত্তি বেদখলে আপনার উপযুক্ত পদক্ষেপ কি ?</h1>   
          <p className="theme_h3">মালিকানা ব্যক্তি সম্পত্তি জোরপূর্বক দখল এবং উচ্ছেদ করে, অননুমোদিতভাবে সেখানে উপস্থিতি প্রতিষ্ঠা করাকে বেদখল বলা হয়। জোরপূর্বক আপনার জমি দখল করা হলে প্রতিকারমূলক পদক্ষেপ যত দ্রুত সম্ভব নেয়া উচিত। "তামাদি আইন" অনুসারে, যদি কোন সম্পত্তি নির্দিষ্ট সময় কালীন, 
তথা ১২ বছরের উর্ধে বেদখল থাকে এবং ইতিমদ্ধে যদি কোনও মামলা না করা হয় তবে উক্ত সম্পত্তির উপর বেদখলকারীর এক ধরণের মালিকানা স্বত্ব সৃষ্টি হয়। এ ধরনের মামলাকে সাধারণত স্বত্ব সাব্যস্ত খাস দখলের মামলা বলা হয়। </p>
        </div>
      </div>

</section>




<section className=" mx-auto py-5 bg-[url('../public/images/faqbg.png')] h-[434px] overflow-hidden" >
<div className="grid grid-cols-1 justify-items-center">
<h3 className="theme_h1 text-[#ffffff!important] font-bold py-3">সচরাচর জিজ্ঞাসা</h3>
</div>

<div className="accodion md:col-span-2 ">
    <div className="acdionlist">
        

    <div className="accordion grid gap-4" id="">


   
       <Accordion values={nagorik} />



</div>

      </div>

      <div className="grid justify-items-center p-5">
<Link legacyBehavior href='/faq'>
<button className="button font-bold bg-[#ffffff!important] text-gray-600">আরো দেখুন</button>
</Link>
</div>
</div>

</section>



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



<section className="bg-[#348739] pt-4 pb-4 sm:p-8 mt-8 max-[300px]:mt-2">
 
<div className="grid place-items-center grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-8 sm:gap-0 lg:w-3/4 m-auto">

<div className="card"> 
  <img src="../images/current_days_service_receiver_count.png" alt="" className="m-auto" />
  <h1 className="text-white text-xl font-bold md:text-2xl text-center my-2">২১১২৪</h1>
  <div className="text-center text-white">
    <span className="text-center text-lg">আজকের সেবা গ্রহীতা</span>
  </div>
  
</div>

<div className="card"> 
  <img src="../images/total_service_receiver.png" alt="" className="m-auto" />
  <h1 className="text-white text-xl font-bold md:text-2xl text-center my-2">২১১২৪</h1>
  <div className="text-center text-white">
    <span className="text-center text-lg">আজকের সেবা গ্রহীতা</span>
  </div>
  
</div>

<div className="card"> 
  <img src="../images/total_visitor.png" alt="" className="m-auto" />
  <h1 className="text-white text-xl font-bold md:text-2xl text-center my-2">২১১২৪</h1>
  <div className="text-center text-white">
    <span className="text-center text-lg">আজকের সেবা গ্রহীতা</span>
  </div>
  
</div>

<div className="card"> 
  <img src="../images/consultant.png" alt="" className="m-auto" />
  <h1 className="text-white text-xl font-bold md:text-2xl text-center my-2">২১১২৪</h1>
  <div className="text-center text-white">
    <span className="text-center text-lg">আজকের সেবা গ্রহীতা</span>
  </div>
  
</div>

</div>
</section>




<section className="mb-[20px]">
<div className="container mx-auto grid grid-cols-1 p-2 md:p-12 justify-items-center md:grid-cols-3">
<div className="grid grid-cols-1 justify-items-center gap-2 md:gap-0 md:justify-items-start ">
<h3 className="theme_h1 md:pt-12">
     ডাউনলোড করুন এখনই
    </h3>
<p className="theme_h3 text-justify">
আপনার মোবাইল অ্যাপ এর গুগল প্লে স্টোর থেকে ভূমি সেবা অ্যাপটি ডাউনলোড করুন এবং সেবা গ্রহণ করুন আজই। 
    
    </p>
<img className="pb-12" src="../images/playstore.png" alt="" />
</div>
<div className="grid grid-cols-1 justify-items-center p-12 gap-2">
<h4>ডাউনলোডের জন্য </h4>
<img src="../images/qrcode.png" alt="" />
<h4>স্ক্যান</h4>
</div>
<div>
<img src="../images/hand_mobile.png" alt="" />
</div>
</div>
</section>




 <section className=" bg-[url('../public/images/image10.png')] h-[500px] bg-cover flex flex-col justify-center p-1 sm:p-0 m-auto">
   <OwlCarousel className="slider-items owl-carousel" {...options2}>

       <Home_Carosel />
       <Home_Carosel />
       <Home_Carosel />
      

    </OwlCarousel>
</section>


<section>

<div className=" mx-auto p-5 grid grid-cols-1 justify-items-center md:pt-12">
<h3 className="theme_h1 md:pb-3">আমাদের সেরা পরামর্শ পদ্ধতি</h3>
<p className="theme_h2 ">বিশেষজ্ঞ পরিষেবা প্রদানকারীর  সমস্যার সমাধান নির্ধারণ</p>
</div>

<div className=" grid sm:grid-cols-2 justify-center p-2 sm:p-6">


<div className="p-2 md:mt-[30px] md:p-8" >
  <div className="grid gap-4">
    <h3 className="theme_h1 text-justify">জমি সংক্রান্ত সমস্যার সর্বোত্তম সমাধানের জন্য জমি সেবা সাথে যুক্ত হোন</h3>
    <p className="theme_h2 text-left">পর্যালোচনা এবং সেবা গ্রহণ. আমরা আপনার জন্য বিশেষজ্ঞ পরিষেবা প্রদানকারীর  সমস্যার সমাধান নির্ধারণ</p>
</div>

<button type="button" className="bg-[#348739] text-white font-bold  mt-2 p-2 px-4 py-[5px]  rounded-md md:hover:bg-[#FFFFFF] md:hover:text-[#0094E7] border-2 border-[#348739] ">ভূমিসেবা যুক্ত হোন </button>
</div>

<div className="p-2">


<iframe src="https://www.youtube.com/embed/ZSk6oH-rsEM" title="CUSTOM SOFTWARE DEVELOPMENT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-auto md:mx-0 pb-5 md:pb-0 w-full h-full"></iframe>


</div>


</div>
</section>

      
   
    </Layout>

  );
  
}


export async function getServerSideProps({  }) {

    const {
             data:faqs
          }: AxiosResponse<IFaqApi> =
             await fetchFaqs();           
  
    return {
          props: {
              data : faqs
          }
    }
  
   }
   
   
   export default Home;
  