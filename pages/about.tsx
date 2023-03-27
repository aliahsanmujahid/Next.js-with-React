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

              
<div className="container mx-auto grid grid-cols-1 p-5 pt-[60px] md:pt-[130px] md:grid-cols-2">
        <div className="grid gap-4">
            <h3 className="h-tag-3">

               { lang === "eng" ? "About Us" : "আমাদের সম্পর্কে"}
                
                </h3> 
            <p className="para-3">

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
                       <p className="text-[20px] font-bold"> আমাদের অঙ্গীকারসমূহ:</p>
                         <ul className="list-disc ml-6">
                            <li>  <p className="mt-2">গ্রাহকের  ভূমি সংক্রান্ত সমস্যা উপলব্ধি।</p> </li>
                           <li><p>গ্রাহকের তথ্য সংক্রান্ত গোপনীয়তা রক্ষা।</p></li>
                         <li> <p>গ্রাহকের সাথে যোগাযোগের ক্ষেত্রে সুসম্পর্ক তৈরি এবং বজায় রাখা।</p></li>
                        <li> <p>ভূমি মালিকদের প্রতি সম্মানসূচক ও মর্যাদাপূর্ণ আচরণ।</p></li>
                        
                        <li> <p> নির্ভরযোগ্য সমাধান প্রদান।</p></li>
                         </ul>
                       </div>
                        </>
                      )
            }
                 </p>

            <img src="../images/Group 23.png" alt="" />
        </div>
        <div className="grid">
            <img src="../images/Group22.png" alt="" />


            <div className="grid gap-4 pt-12 md:pt-0 md:gap-0 md:mb-[100px] text-gray-500">
                <div className="grid grid-cols-3  text-gray-500">
                    <img className="md:pl-[110px]" src="../images/logoService.png" alt="" />
                    <div className="col-span-2 md:mt-1">
                           <h3 className="h-tag-3">লগইন / রেজিস্ট্রেশন</h3>
                        <div className="text-justify md:text-left">
                            <p className="para-3">
                            ভূমিসেবা পেতে প্রথমে আপনার নাম, মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন করুন।
                            </p>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-3">
                    <img className="md:pl-[110px]" src="../images/Group5.png" alt="" />
                    <div className="col-span-2 md:mt-1">
                        <h3 className="h-tag-3">কনসালটেন্ট নির্বাচন</h3>
                        <div className="text-justify md:text-left">
                            <p className="para-3">
                            আপনার প্রয়োজনীয় সেবা পেতে পছন্দের পরামর্শক নির্বাচন করুন।
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <img className="md:pl-[110px]" src="../images/Group6.png" alt="" />
                    <div className="col-span-2 md:mt-1">
                        <h3 className="h-tag-3">সমস্যার বিবরণ</h3>
                        <div className="text-justify md:text-left">
                            <p className="para-3">
                               ভূমি সংক্রান্ত সমস্যার বিস্তারিত তুলে ধরুন এবং কাঙ্খিত সেবা গ্রহণ করুন।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>



    <div className="container mx-auto flex justify-center">
        <h3 className="font-kalpurush text-[26px] text-[#0094E7] text-center font-bold">মিডিয়া ও খবর</h3>
    </div>



    <div className="container image_box_container mx-auto grid justify-items-center grid-cols-2 gap-1 sm:gap-4 p-2 pb-5 md:grid-cols-4 md:pl-12 md:pr-12">
         
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



      
   
    </Layout>

  );
  
}
