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
        
        <section className="w-full mx-auto pt-[130px] mb-8" >

<div className="container p-1 m-auto grid sm:grid-cols-3">
    
  <div className=" p-1 sm:pl-6 sm:p-3 sm:col-span-2">
    <h1 className="about_h1_green mb-2">ভূমিকা </h1>   
    <p className="theme_h3">
    ভূমিসেবা প্লাটফর্মে আপনাকে স্বাগতম। এটি বাংলাদেশের সর্ববৃহৎ সকল ধরনের ভূমি সেবার জন্য একটি সর্বোত্তম পরামর্শক প্লাটফর্ম।    
নাগরিক সেবা প্রচারের উদ্দেশে এই প্লাটফর্মটির কার্যক্রম চলমান । ভূমিসেবা প্লাটফর্মে ভূমি বিষয়ে যে কোনো ধরনের সেবা নিতে উক্ত প্লাটফর্মের শর্তাবলির সাথে আপনার সম্মত হওয়া বাধ্যতামূলক।

    </p>
  </div>

  <div className="sm:col-span-1">
       <img className="" src="/images/policy.png" alt="Modern building architecture" />
     
  </div>
</div>

</section>


        <section className="w-full mx-auto py-5" >

<div className="container p-1 m-auto grid ">
    
  <div className=" p-1 sm:pl-6 sm:p-3">
    <h1 className="about_h1_green mb-2 text-center">ব্যবহারের শর্তাবলি</h1>   
    <p className="theme_h3">
    আমাদের ওয়েবসাইট ব্যবহারের পূর্বে আপনার এবং ভূমিসেবা ওয়েবসাইটের লাইসেন্স চুক্তির শর্তাবলিতে অবশ্যই আপনাকে রাজি থাকতে
     হবে। ওয়েবসাইটটিতে আপনার প্রবেশের মাধ্যমে আমরা ধরে নেই যে আপনি শর্তাবলি সম্পূর্ণরূপে পড়ে তা গ্রহণ করেছেন। এই পৃষ্ঠায় 
     উল্লেখিত সমস্ত শর্তাবলি স্বীকার করতে আগ্রহী না হলে উপযুক্ত কারণসহ ওয়েবসাইটের কর্তৃপক্ষের সাথে যোগাযোগ করুন। কাজ শুরুর 
     পরবর্তীতে যদি চুক্তিনামায় উল্লেখিত শর্তাবলি ভঙ্গ করা হয় সেক্ষেত্রে কর্তৃপক্ষ প্রয়োজনীয় পদক্ষেপ গ্রহণ করতে পারবেন। আমাদের সাথে
      কোনো প্রকল্প শুরুর পূর্বে অবশ্যই সমস্ত শর্তাবলি সম্পর্কে আপনাকে অবগত থাকতে হবে। 
      </p>

      <ul className="theme_h3 mt-2 list-disc ml-6">
             <li> সেবা গ্রহণের জন্য প্রথমে অ্যাকাউন্ট তৈরি করতে হবে এবং ব্যবহারকারীর ব্যক্তিগত তথ্য প্রদান করতে হবে।</li>
            <li>ওয়েবসাইট ব্যবহারের পূর্বে সর্বনিম্ন বয়স নির্ধারিত থাকতে পারে। <strong>/ (ওয়েবসাইট ব্যবহারের ক্ষেত্রে সর্বনিম্ন বয়স উল্লেখ থাকতে পারে।)</strong></li>
          <li> গ্রাহকের সাথে যোগাযোগের ক্ষেত্রে সুসম্পর্ক তৈরি এবং বজায় রাখা।</li>
         <li> ওয়েবসাইটে কোনো সন্দেহজনক বা গোপনীয় কাজ করা যাবে না।</li>
         
         <li> ব্যবসায়িক প্রচারণার জন্য আপনার মোবাইল নাম্বার এবং নাম ব্যবহার করা হতে পারে।</li>
          </ul>
  </div>


</div>

</section>



<section className="w-full mx-auto py-5" >

<div className="container p-1 m-auto grid sm:grid-cols-2">

  <div>
  <img className="" src="/images/image 13.png" alt="Modern building architecture" />
     
  </div>
    
  <div className=" p-1 pt-2 sm:p-3">
    <h1 className="about_h1_green mb-2">গোপনীয়তা:</h1>   
    <p className="theme_h3">ব্যবহারকারীর ব্যক্তিগত তথ্য এবং ভূমিসেবা গ্রহণে প্রয়োজনীয় কাগজপত্র সবকিছুই গোপন রাখা হয়। এ সকল তথ্য কোনো তৃতীয় ব্যক্তির নিকট হস্তান্তর করা হবে না। অনলাইন ফর্ম সাবমিশন, একাউন্ট তথ্য হালনাগাদ, সেবা অর্ডার এবং ব্যবহারকারীর
     অন্যান্য সংবেদনশীল তথ্যগুলো সুরক্ষার ক্ষেত্রে সচেতনতা এবং নিরাপত্তা প্রদান করা হবে।</p>
     
     <br />
    

     
    <h1 className="theme_h1_green mb-2">প্রয়োজনীয় কাগজপত্র</h1>   
    <ul className="theme_h3 list-disc ml-6">
             <li> জাতীয় পরিচয়পত্রের কপি </li>
            <li>সিভি </li>
          <li> ভূমি বিষয়ে ইতিপূর্বে  কোন কাজ করা থাকলে তার প্রমানক </li>
         <li>প্রফেশনাল সার্টিফিকেটের কপি </li>
         
         <li> একাডেমিক সার্টিফিকেটের কপি </li>
          </ul>
  </div>

  
</div>

</section>


{/* <section className="w-full mx-auto py-5" >

<div className="container p-1 m-auto grid ">
    
  <div className="p-1 sm:p-3">
    <h1 className="theme_h1_green mb-2">প্রয়োজনীয় কাগজপত্র</h1>   
    <ul className="theme_h3 list-disc ml-6">
             <li> জাতীয় পরিচয়পত্রের কপি </li>
            <li>সিভি </li>
          <li> ভূমি বিষয়ে ইতিপূর্বে  কোন কাজ করা থাকলে তার প্রমানক </li>
         <li>প্রফেশনাল সার্টিফিকেটের কপি </li>
         
         <li> একাডেমিক সার্টিফিকেটের কপি </li>
          </ul>
  </div>


</div>

</section> */}
      
    </Layout>

  );
  
}
