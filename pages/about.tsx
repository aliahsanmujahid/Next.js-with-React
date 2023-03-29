import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CurdProps from '@/models/Card';
import { useLang } from "@/hooks";
import  Contact  from "@/components/Contact";
import { useRouter } from 'next/router'



export default function Home() {

  const { LangInfo,HandleChange } = useLang();
  const { lang } = LangInfo;


 
  return (
  
    <Layout>

              
<section className="mx-auto pt-[130px]">
    
<div className="p-1 sm:px-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div>
            <h3 className="about_h1_green">

{ lang === "eng" ? "About Us" : "আমাদের সম্পর্কে"}
 
 </h3> 
<p className="theme_h3 sm:mt-3">

{lang === 'eng' ? (
         <>
         "Choose the service you are looking for - From the website or app Choose the service you are looking for - From
         the website or app Choose the service you are looking for - Website or not
          - From the website or app Choose the service you are looking for - From the website or app Choose the
           service you are looking for - from the website or app Choose the service you are looking for - from the
           website or app"
         </>
      ) : (
         <>
         
         ভূমিসেবা বাংলাদেশের একটি সর্বপ্রথম এবং সর্ববৃহৎ ডিজিটাল সেবাদানকারী প্লাটফর্ম। ভূমি সংক্রান্ত সকল সেবাকে একই প্লাটফর্মে আনা এবং সকল ধরনের ভূমি সমস্যার সুষ্ঠ সমাধান সহ মানসম্মত ভূমিসেবা প্রদান করার উদ্দেশ্য নিয়ে এই প্লাটফর্মের যাত্রা শুরু হয়। ভূমি নিবন্ধন, নামজারি, ভূমি উন্নয়ন কর ও শুল্ক, ই-পর্চা, মিসকেস মামলা, দেওয়ানি মামলা, ভূমি রাজস্ব মামলা, খাস জমি এবং ভূমি জরিপ সংশ্লিষ্ট ভূমিসেবা প্রদানের মাধ্যমে আমরা অত্যন্ত সফলতার সাথে  গ্রাহকদের সেবা প্রদান করে আসছি। 
         কেবলমাত্র স্বীকৃত ভূমি বিশেষজ্ঞরাই আমাদের সিস্টেমে নিবন্ধন করে সেবা দিয়ে থাকেন।
         </>
       )
}


 


</p><br></br>
<p className="para-3">


{lang === 'eng' ? (
         <>
         " Choose the service you are looking for - from the website or app Choose the service you are looking for 
- from the website or app"
         </>
      ) : (
         <>
         
        <div className="flex flex-col">
        <h1 className="about_h1_green">আমাদের অঙ্গীকারসমূহ:</h1>
          <ul className="theme_h3 list-disc ml-6">
             <li>  গ্রাহকের  ভূমি সংক্রান্ত সমস্যা উপলব্ধি। </li>
            <li>গ্রাহকের তথ্য সংক্রান্ত গোপনীয়তা রক্ষা।</li>
          <li> গ্রাহকের সাথে যোগাযোগের ক্ষেত্রে সুসম্পর্ক তৈরি এবং বজায় রাখা।</li>
         <li> ভূমি মালিকদের প্রতি সম্মানসূচক ও মর্যাদাপূর্ণ আচরণ।</li>
         
         <li> নির্ভরযোগ্য সমাধান প্রদান।</li>
          </ul>
        </div>
         </>
       )
}
  </p>
            </div>

            <div className="p-3">
            <img src="../images/Group22.png" alt="" />
            </div>
        </div>
</section>


<section>
    <div className="grid grid-cols-1 sm:grid-cols-2 p-1 sm:px-8 ">

            <div className="col-span-1 p-4">
            <img src="../images/Group 23.png" alt="" />
            </div>

            <div className="col-span-1 sm:pt-10 sm:pb-10 flex flex-col justify-evenly ">

                <div className="flex p-2">
                <img className="w-[40px] h-[40px] mt-auto mb-auto sm:w-[80px] sm:h-[80px] mt-auto mb-auto" src="../images/logoService.png" alt="" />
      <div className="ml-1 sm:ml-4 text-sm">
         <h2 className="about_h2">লগইন / রেজিস্ট্রেশন</h2>
         <p className="theme_h3">
                            ভূমিসেবা পেতে প্রথমে আপনার নাম, মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন করুন।
        </p>
      </div>
                </div>

                <div className="flex  p-2">
                <img className="w-[40px] h-[40px] mt-auto mb-auto sm:w-[80px] sm:h-[80px] mt-auto mb-auto" src="../images/Group5.png" alt="" />
      <div className="ml-1 sm:ml-4 text-sm">
         <h2 className="about_h2">কনসালটেন্ট নির্বাচন</h2>
         <p className="theme_h3">
              আপনার প্রয়োজনীয় সেবা পেতে পছন্দের পরামর্শক নির্বাচন করুন।
        </p>
      </div>
                </div>

                <div className="flex  p-2">
                <img className="w-[40px] h-[40px] mt-auto mb-auto sm:w-[80px] sm:h-[80px] mt-auto mb-auto" src="../images/Group6.png" alt="" />
      <div className="ml-1 sm:ml-4 text-sm">
         <h2 className="about_h2">সমস্যার বিবরণ</h2>
         <p className="theme_h3">
               ভূমি সংক্রান্ত সমস্যার বিস্তারিত তুলে ধরুন এবং কাঙ্খিত সেবা গ্রহণ করুন। 
        </p>
      </div>
                </div>

                <div className="flex  p-2">
                <img className="w-[40px] h-[40px] mt-auto mb-auto sm:w-[80px] sm:h-[80px] mt-auto mb-auto" src="../images/Group6.png" alt="" />
      <div className="ml-1 sm:ml-4 text-sm">
         <h2 className="about_h2">মতামত</h2>
         <p className="theme_h3">
         সেবা গ্রহণের পর আপনার অভিজ্ঞতা শেয়ার করুন। 
        </p>
      </div>
                </div>
            </div>

            
    </div>
</section>



    <section className="w-full mx-auto py-5" >

<div className="p-1 sm:px-8 m-auto grid sm:grid-cols-2">

  <div>
  <img className="" src="/images/image 13.png" alt="Modern building architecture" />
     
  </div>
    
  <div className="sm:p-2 pt-3 sm:pt-0">
    <h1 className="theme_h1_green mb-2 ">আপনি কি ভূমিসেবা গ্রহণে একজন দক্ষ ভূমি বিশেষজ্ঞ খুঁজছেন?</h1>   
    <p className="theme_h3">আমাদের সাথে রয়েছেন অভিজ্ঞ ভূমি পরামর্শকবৃন্দ যারা সততার সাথে এবং তথ্যের গোপনীয়তা রক্ষার মাধ্যমে ভূমিসেবাগ্রহীতাকে বিশ্বাসযোগ্য ভূমিসেবা প্রদান করে যাচ্ছে। আমাদের পরামর্শকরা সবসময় গ্রাহকের দুশ্চিন্তার বিষয়ে গভীর মনোনিবেশ করেন এবং সঠিক দিকনির্দেশনা প্রদান করেন। সুপরিচিত প্রতিষ্ঠান, অভিজাত কোম্পানি এবং ব্যাংক সমূহ আমাদের সেবাগ্রহীতাদের মধ্যে অন্যতম।
</p>
  </div>
</div>

</section>



<section className="w-full mx-auto py-5" >

<div className="p-1 sm:px-8 m-auto grid ">

    <h1 className="theme_h1_green mb-2">কেন আমাদের নির্বাচন করবেন?</h1>   

    <p className="theme_h2">ডিজিটাল বাংলাদেশের একটি সর্বাপেক্ষা সুপরিচিত এবং উল্লেখযোগ্য ভূমিসেবা প্রদানকারী প্লাটফর্ম এটি।</p>
  <div className="flex flex-col">
        <h1 className="theme_h3">ভূমিসেবা প্রদানে আমরা যে সকল বিষয়ে গুরুতারোপ করি:</h1>
          <ul className="theme_h3 list-disc ml-6">
             <li> গ্রাহকের  ভূমি সংক্রান্ত সমস্যা উপলব্ধি। </li>
            <li>গ্রাহকের তথ্য সংক্রান্ত গোপনীয়তা রক্ষা।</li>
          <li> গ্রাহকের সাথে যোগাযোগের ক্ষেত্রে সুসম্পর্ক তৈরি এবং বজায় রাখা।</li>
         <li>ভূমি মালিকদের প্রতি সম্মানসূচক ও মর্যাদাপূর্ণ আচরণ।</li>
         
         <li>  নির্ভরযোগ্য সমাধান প্রদান।</li>
          </ul>
        </div>



</div>

</section>



<section>
    
<div className="container mx-auto flex justify-center">
        <h3 className="about_h1_green text-center ">মিডিয়া ও খবর</h3>
    </div>



    <div className="p-1 sm:px-8 image_box_container mx-auto grid justify-items-center grid-cols-2 gap-1 sm:gap-4 pb-5 md:grid-cols-4 ">
         
        <div className="image_box">
            <h1 className="w-[94%] md:w-[50%] text-[15px] sm:text-[30px] break-all break-words">সেবা নির্বাচন করুন</h1>
            <img className="" src="../images/Rectangle_30.png" alt="" />
        </div>

        <div className="image_box">
            <h1 className="w-[94%] md:w-[50%] text-[15px] sm:text-[30px] break-all break-words">সেবা নির্বাচন করুন</h1>
            <img className="" src="../images/Rectangle_30.png" alt="" />
        </div>

        <div className="image_box">
       
        <h1 className="w-[94%] md:w-[50%] text-[15px] sm:text-[30px] break-all break-words">সেবা নির্বাচন করুন</h1>
           
            <img className="" src="../images/Rectangle_30.png" alt="" />
        </div>

        <div className="image_box">
        <h1 className="w-[94%] md:w-[50%] text-[15px] sm:text-[30px] break-all break-words">সেবা নির্বাচন করুন</h1>
           
            <img className="" src="../images/Rectangle_30.png" alt="" />
        </div>
    
    
    </div>
</section>



      
   
    </Layout>

  );
  
}
