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
        

        <div className="container m-auto flex flex-col pt-[75px] md:pt-[130px]">
        <div className="pb-8">
            <h3 className="h-tag-2">

                {lang === "eng"?"About land services":"ভূমিকা"}

                </h3>
            <p className="text-gray">

                {lang === "eng"?
                 (
                    <>
                    Choose the service you are looking for - From the website or app Choose the 
                    service you are looking for - From the website or app Choose the service you
                     are looking for - Website or not - From the website or app Choose the service you 
                     are looking for - From the website or app Choose the service you are looking for - 
                     from the website or app Choose the service you are looking for - from the website or app
                     </>
                 ):(
                      <>
                      ভূমিসেবা প্লাটফর্মে আপনাকে স্বাগতম। এটি বাংলাদেশের সর্ববৃহৎ সকল ধরনের ভূমি সেবার জন্য একটি সর্বোত্তম পরামর্শক প্লাটফর্ম।    
                      </>
                 )
               }
                 
                
            </p>
            <p className="text-gray">

            {lang === "eng"?
                 (
                    <>
                      Choose the service you are looking for - from the website or app Choose the service you 
                      are looking for - from the website or app
                     </>
                 ):(
                      <>
                    নাগরিক সেবা প্রচারের উদ্দেশে এই প্লাটফর্মটির কার্যক্রম চলমান । ভূমিসেবা প্লাটফর্মে ভূমি বিষয়ে যে কোনো ধরনের সেবা নিতে উক্ত প্লাটফর্মের শর্তাবলির সাথে আপনার সম্মত হওয়া বাধ্যতামূলক।

          
                      </>
                 )
               }
                
            </p>
        </div>


        <div className="pb-8">
            <h3 className="h-tag-2">

                {lang === "eng"?"About land services":"ব্যবহারের শর্তাবলি "}

                </h3>
            <p className="text-gray">

                {lang === "eng"?
                 (
                    <>
                    Choose the service you are looking for - From the website or app Choose the 
                    service you are looking for - From the website or app Choose the service you
                     are looking for - Website or not - From the website or app Choose the service you 
                     are looking for - From the website or app Choose the service you are looking for - 
                     from the website or app Choose the service you are looking for - from the website or app
                     </>
                 ):(
                      <>
                     আমাদের ওয়েবসাইট ব্যবহারের পূর্বে আপনার এবং ভূমিসেবা ওয়েবসাইটের লাইসেন্স চুক্তির শর্তাবলিতে অবশ্যই
                      আপনাকে রাজি থাকতে হবে। ওয়েবসাইটটিতে আপনার প্রবেশের মাধ্যমে আমরা ধরে নেই যে আপনি শর্তাবলি
                       সম্পূর্ণরূপে পড়ে তা গ্রহণ করেছেন। এই পৃষ্ঠায় উল্লেখিত সমস্ত শর্তাবলি স্বীকার করতে আগ্রহী না হলে উপযুক্ত
                        কারণসহ ওয়েবসাইটের কর্তৃপক্ষের সাথে যোগাযোগ করুন। কাজ শুরুর পরবর্তীতে যদি চুক্তিনামায় উল্লেখিত শর্তাবলি
                         ভঙ্গ করা হয় সেক্ষেত্রে কর্তৃপক্ষ প্রয়োজনীয় পদক্ষেপ গ্রহণ করতে পারবেন। আমাদের সাথে কোনো প্রকল্প শুরুর 
                         পূর্বে অবশ্যই সমস্ত শর্তাবলি সম্পর্কে আপনাকে অবগত থাকতে হবে। 

                         <ul className="list-disc ml-6">
                            <li>  <p className="mt-2">সেবা গ্রহণের জন্য প্রথমে অ্যাকাউন্ট তৈরি করতে হবে এবং ব্যবহারকারীর ব্যক্তিগত তথ্য প্রদান করতে হবে।</p> </li>
                           <li><p>ওয়েবসাইট ব্যবহারের পূর্বে সর্বনিম্ন বয়স নির্ধারিত থাকতে পারে। / (ওয়েবসাইট ব্যবহারের ক্ষেত্রে সর্বনিম্ন বয়স উল্লেখ থাকতে পারে।)</p></li>
                         <li> <p>গ্রাওয়েবসাইটে কোনো সন্দেহজনক বা গোপনীয় কাজ করা যাবে না।</p></li>
                        <li> <p>ব্যবসায়িক প্রচারণার জন্য আপনার মোবাইল নাম্বার এবং নাম ব্যবহার করা হতে পারে।</p></li>
                         </ul>
                      </>
                 )
               }
                 
                
            </p>

        </div>



        <div className="pb-8">
            <h3 className="h-tag-2">

            {lang === "eng"?
                 (
                    <>
                      About rules and policies
                     </>
                 ):(
                      <>
                    
                    গোপনীয়তা: 

          
                      </>
                 )
               }

                </h3>
            <p className="text-gray">

                {lang === "eng"?
                 (
                    <>
                    Choose the service you are looking for - From the website or app Choose the 
                    service you are looking for - From the website or app Choose the service you
                     are looking for - Website or not - From the website or app Choose the service you 
                     are looking for - From the website or app Choose the service you are looking for - 
                     from the website or app Choose the service you are looking for - from the website or app
                     </>
                 ):(
                      <>
                     ব্যবহারকারীর ব্যক্তিগত তথ্য এবং ভূমিসেবা গ্রহণে প্রয়োজনীয় কাগজপত্র সবকিছুই গোপন রাখা হয়। এ সকল তথ্য কোনো তৃতীয় ব্যক্তির নিকট হস্তান্তর করা হবে না। অনলাইন ফর্ম সাবমিশন, একাউন্ট তথ্য হালনাগাদ, সেবা অর্ডার এবং ব্যবহারকারীর অন্যান্য সংবেদনশীল তথ্যগুলো সুরক্ষার ক্ষেত্রে সচেতনতা এবং নিরাপত্তা প্রদান করা হবে।
                      </>
                 )
               }
                 
                
            </p>
            <p className="text-gray">

            {lang === "eng"?
                 (
                    <>
                      Choose the service you are looking for - from the website or app Choose the service you 
                      are looking for - from the website or app
                     </>
                 ):(
                      <>
                     আপনি যে পরবাটি খুঁজছেন সেটি বেছে নিন- ওয়েবসাইট বা অ্যাপ থেকেআপনি যে পরিষেবাটি খুঁজছেন সেটি বেছে 
                     নিন- ওয়েবসাইট বা অ্যাপ থেকে
          
                      </>
                 )
               }
                
            </p>
        </div>


        <div className="pb-8">
            <h3 className="h-tag-2">

            {lang === "eng"?
                 (
                    <>
                      About rules and policies
                     </>
                 ):(
                      <>
                    
                    প্রয়োজনীয় কাগজপত্র


          
                      </>
                 )
               }

                </h3>
            <p className="text-gray">

                {lang === "eng"?
                 (
                    <>
                    Choose the service you are looking for - From the website or app Choose the 
                    service you are looking for - From the website or app Choose the service you
                     are looking for - Website or not - From the website or app Choose the service you 
                     are looking for - From the website or app Choose the service you are looking for - 
                     from the website or app Choose the service you are looking for - from the website or app
                     </>
                 ):(
                      <>

<ul className="list-disc ml-6">
                            <li>  <p className="mt-2">জাতীয় পরিচয়পত্রের কপি 
</p> </li>
                           <li><p>সিভি 
</p></li>
                         <li> <p>ভূমি বিষয়ে ইতিপূর্বে  কোন কাজ করা থাকলে তার প্রমানক 
</p></li>
                        <li> <p>প্রফেশনাল সার্টিফিকেটের কপি</p></li>
                        <li> <p>একাডেমিক সার্টিফিকেটের কপি </p></li>
                         </ul>
                     
                      </>
                 )
               }
                 
                
            </p>
            <p className="text-gray">

            {lang === "eng"?
                 (
                    <>
                      Choose the service you are looking for - from the website or app Choose the service you 
                      are looking for - from the website or app
                     </>
                 ):(
                      <>
                     আপনি যে পরবাটি খুঁজছেন সেটি বেছে নিন- ওয়েবসাইট বা অ্যাপ থেকেআপনি যে পরিষেবাটি খুঁজছেন সেটি বেছে 
                     নিন- ওয়েবসাইট বা অ্যাপ থেকে
          
                      </>
                 )
               }
                
            </p>
        </div>






    </div>
      
    </Layout>

  );
  
}
