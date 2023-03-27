import React, { useEffect, useState } from "react";
import { AxiosResponse } from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import moment from "moment";
import Link from 'next/link'
import Layout from '@/components/Layout'
import  Star  from "../../components/Star";
import { useRouter } from 'next/router'
import qs from 'qs'
import  Reviews  from "../../components/Reviews";
import Image from 'next/image'
import {
      ISingleUserApiResponse,
      IUser,
    } from '../../models/SingleUser';

import { fetchSingleUser } from '../../http';


interface IPropTypes {

      data: IUser[];
      error:string;

}
    
    
 const User: NextPage<IPropTypes> = ({ data,error }) => {
      

      
      // console.log("=========Single Data FROM API------------------",data);

      const router = useRouter();
      var SINGLE_USER : IUser;

      if( data?.length > 0){
            SINGLE_USER = data[0];
      }
  
      useEffect(() => {
            if( error == '404' || data?.length == 0 || data == undefined){
                  router.push('/404');
            }
      }, []);

  const [imageError, setImageError] = useState(false);

  return (
  
    <Layout>           

      <section className="pt-[60px] md:pt-[130px] w-full">
            <div
                  className="container border border-solid border-[#DFDFDF] rounded-tr-lg rounded-bl-lg md:h-[290px] mx-auto overflow-hidden">
                  <div className="relative flex">
                        <div className=" absolute container mx-auto flex hidden md:block top-[-40px] left-[-40px]">
                              <div className="bg-[#EAF7FF] w-[216px] h-[194px] rounded-full"></div>
                        </div>
                        <div className=" absolute container mx-auto md:flex hidden md:block md:justify-end top-[120px] left-[100px]">
                              <div className="bg-[#EAF7FF] w-[288px] h-[259px] rounded-full"></div>
                        </div>

                        <div className="relative md:flex justify-between p-6">
                              <div className="flex pl-3 md:pl-[72px]">

                                    <div className="single_img">
                                    <Image
                                        src={ imageError ? "/images/profile.png" : 'https://land-consultancy.gsmcltd.com/'+SINGLE_USER?.profile_image }
                                        width={180}
                                        height={100}
                                        alt={'img'}
                                        onLoadingComplete={(result) => {
                                            if (result.naturalWidth === 0) setImageError(true)
                                        }}
                                        onError={(event) => setImageError(true)}
                                        onEmptied={() => setImageError(true)}
                                    /> 


                                    </div>


                                    <div className="ml-2 md:ml-9 md:mt-7">
                                          <div className="flex">
                                                <h3
                                                      className="font-NotoSansBengali leading-[48px] text-titleSize md:text-[36px] font-semibold">
                                                     {SINGLE_USER?.name}
                                                      </h3>

                                                      {SINGLE_USER?.active_status === 1 &&
                                                            <div className="flex">
                                                               <i className="fa-solid fa-circle pl-2 md:pl-4 text-[#4EC200] pt-[14px]"></i>
                                                               <p className="hidden sm:block text-paragrapSize pl-1 pt-[10px] font-medium">Active</p>
                                                           </div>
                                                      }

                                          </div>
                                          <div>
                                                <p
                                                      className="text-semiTitleSize font-NotoSansBengali font-normal leading-7 tracking-[5%]">
                                                      
                                                      {
                                                         SINGLE_USER?.current_profession   
                                                      }</p>
                                                <p className="font-NotoSansBengali text-paragrapSize">

                                                      {SINGLE_USER?.experiances[0].institute_name}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                              <div className="pl-10 md:pl-[334px] pt-5 pb-4 md:pb-0">
                                    <p className="font-NotoSansBengali font-medium text-paragrapSize">কনসালটেশন ফি</p>
                                    <div className="flex">
                                          <h3 className="font-NotoSansBengali text-semiTitleSize md:text-titleSize font-bold">২৫০ টাকা</h3>
                                          <p
                                                className="font-NotoSansBengali font-normal text-paragrapSize text-[#828282] pl-[6px] pt-[6px]">
                                                (সংযুক্ত ভ্যাট)</p>
                                    </div>
                                    <button
                                          className="font-NotoSansBengali font-normal text-paragrapSize bg-PrimaryColor py-1 md:py-3 px-5 md:px-8 rounded-full text-white">
                                          <span className="pr-4">
                                                <i className="fa-solid fa-video"></i>
                                          </span>
                                          পরামর্শ নিন
                                    </button>
                              </div>
                        </div>

                  </div>
            </div>
      </section>

      <section className="mt-5 w-full">
            <div className="container mx-auto">
                  <div className="grid md:grid-cols-3 gap-5">
                        <div
                              className="md:col-span-2 border border-solid border-[#DFDFDF] rounded-lg pt-9 pl-8 md:pl-[72px] pr-8 md:pr-[62px] pb-8 md:pb-[78px]">
                              <h3 className="font-NotoSansBengali font-semibold text-titleSize text-PrimaryColor">সাধারণ
                                    তথ্য</h3>
                              <p className="font-NotoSansBengali font-semibold text-paragrapSize">সিনিয়র জেলা ও দায়রা জজ
                              </p>
                              <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6 pt-2">তিনি পরিবেশগত
                                    আইন, প্রবিধান এবং অধ্যাদেশ মেনে চলার প্রচেষ্টায় নাগরিক, ছোট ব্যবসা, প্রতিবেশী এবং
                                    সম্প্রদায়ের গোষ্ঠীর প্রতিনিধিত্ব করেন। তিনি সেই সমস্ত সত্ত্বাকে রক্ষা করার জন্য
                                    সচেষ্ট হন যারা অন্যদের মৌলিক নীতি মেনে চলার ব্যর্থতার কারণে ক্ষতিগ্রস্থ হয়েছে যে
                                    আমাদের অন্যদের প্রতি করা উচিত যেমন আমরা তাদের আপনার প্রতি করতে চাই। তদনুসারে, তিনি
                                    জোনিং সমস্যা, উপদ্রব এবং অনুপ্রবেশ, পানির অধিকার, ক্লিন ওয়াটার অ্যাক্ট, সুপারফান্ড
                                    এবং অন্যান্য ফেডারেল পরিবেশগত আইন, উপকূলীয় উন্নয়ন, বনায়ন, ভূমি ব্যবহার, বায়ু
                                    দূষণ, শব্দ এবং গন্ধ সংক্রান্ত সমস্যাগুলির সাথে জড়িত ছিলেন। বিষাক্ত টর্ট এবং খারাপ
                                    উন্নয়ন অনুশীলন। তার ক্লায়েন্টদের জন্য বাস্তবসম্মত, সাশ্রয়ী, সময়োপযোগী এবং অর্থবহ
                                    ফলাফল অর্জনের উপর তার জোর দেওয়া হয়</p>
                        </div>
                        <div className="border border-solid border-[#DFDFDF] rounded-lg pt-9 px-5 md:px-9">
                              <div className="container flex justify-between">
                                    <div>
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">
                                                অভিজ্ঞতা</h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">{
                                                SINGLE_USER?.years_of_experience
                                          }</p>
                                    </div>
                                    <div>
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">
                                                রেটিং(4561)</h3>

                                          <div className="flex items-center">

                                                 
                                               <Star stars={SINGLE_USER?.rates} />  
                              
                                                <p className="ml-2 text-sm font-medium dark:text-gray-400">{
                                                      SINGLE_USER?.rates
                                                }</p>
                                          </div>

                                    </div>
                              </div>
                              <div className="mt-6">
                                    <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">কর্মস্থল
                                    </h3>
                                    <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">
                                       
                              
                                       {SINGLE_USER?.address}
                                          
                                   
                                    </p>
                              </div>
                              <div className="mt-6 mb-4 md:mb-0">
                                    <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">বিশেষত্ব
                                    </h3>

                                    {SINGLE_USER?.services.map((item , index) => 

                                      <button key={index} className="mb-1 font-NotoSansBengali font-normal text-[14px] bg-[#E4F8FF] mr-2 py-1 px-2 rounded-full">
                                              {
                                                item.title
                                              }
                                      </button>
 
                                     )} 






                              </div>
                        </div>
                  </div>
            </div>
      </section>


      <section className="mt-5 mb-5 w-full">
            <div className="container mx-auto">
                  <div className="grid md:grid-cols-5 gap-5">
                        <div className="md:col-span-2 border border-solid border-[#DFDFDF] rounded-lg pt-6 px-5 md:px-9">
                              <h3 className="font-NotoSansBengali font-semibold text-titleSize text-PrimaryColor">সংক্ষিপ্ত
                                    বিবরণ</h3>
                              {/* <div className="container grid grid-cols-2 justify-between mt-7 pb-4">
                                    <div>
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">
                                                কনসালটেশন ফি</h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">250
                                          </p>
                                    </div>
                                    <div className="pl-5 md:pl-12">
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">ফলো-আপ
                                                ফি</h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">200
                                                (14 দিনের মধ্যে)</p>
                                    </div>
                              </div> */}
                              <div className="container grid grid-cols-2 justify-between mt-7 pb-4">
                                    <div>
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">সেবা
                                                প্রদান</h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">25650
                                          </p>
                                    </div>
                                    <div className="pl-5 md:pl-12">
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">
                                                রেটিং(4561)</h3>

                                          <div className="flex items-center">
                                                
                                                <Star stars={SINGLE_USER?.rates} />


                                                <p className="ml-2 text-sm font-medium dark:text-gray-400">{SINGLE_USER?.rates}</p>
                                          </div>
                                    </div>
                              </div>
                              {/* <div className="container grid grid-cols-2 justify-between mt-7 pb-4">
                                    <div>
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">সেবা
                                                প্রদান (দিন)</h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">শনি,
                                                রবি, সোম, মঙ্গল, বুধ, বৃহস্পতি, শুক্র </p>
                                    </div>
                                    <div className="pl-5 md:pl-12">
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">সেবা
                                                সময় </h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">11:55
                                                am - 11:50 pm</p>
                                    </div>
                              </div> */}
                              <div className="container grid grid-cols-2 justify-between mt-7 pb-4">
                                    <div>
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">
                                                কনসালটেশন কোড</h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">
                                                
                                                    {SINGLE_USER?.otp_code || 'No Data'}
                                                
                                                </p>
                                    </div>
                                    <div className="pl-5 md:pl-12">
                                          <h3 className="font-NotoSansBengali font-bold text-semiTitleSize leading-7">যোগদান
                                                সময় </h3>
                                          <p className="font-NotoSansBengali font-medium text-paragrapSize leading-6">
                                               
                                                 {moment(SINGLE_USER?.created_at).format("MMM Do YYYY")}

                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="md:col-span-3 border border-solid border-[#DFDFDF] rounded-lg pt-6 px-5 md:px-9">
                              <h3 className="font-NotoSansBengali font-semibold text-titleSize text-PrimaryColor">কর্মস্থল
                                    অভিজ্ঞতা</h3>
                              <div className="w-full sm:w-[90%] mt-7">
                                          <ol className="relative border-l-4 border-PrimaryColor ">

                                          {SINGLE_USER?.experiances.map((item , index) => 

                                          <li key={index} className="mb-14 ml-9 flex justify-between flex-wrap">

                                                <div>
                                                      <span
                                                            className="absolute flex items-center justify-center w-6 h-6 bg-PrimaryColor rounded-full left-[-14px] ">

                                                      </span>
                                                      <h3
                                                            className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                                            কর্মস্থল </h3>
                                                      <p
                                                            className=" font-NotoSansBengali font-medium text-paragrapSize leading-6">
                                                            {item?.institute_name}</p>
                                                      <p
                                                            className="mb-4 font-NotoSansBengali font-medium text-paragrapSize leading-6">
                                                            পদবী: {item?.designation}</p>
                                                </div>





                                                  <div className="mb-14 ml-9 mobileL:pt-8 md:pt-7">
   
                                                   <p
                                                className=" font-NotoSansBengali font-medium text-paragrapSize leading-6">
                                                    কর্মসংস্থানের সময়কাল</p>
                                                  <p
                                                      className="mb-4 font-NotoSansBengali font-medium text-paragrapSize leading-6">
                                                              
                                                              <span className="mr-1">

                                                                  {moment(item.start_date).format("MMM Do YYYY")}
                                                                  
                                                              </span>

                                                              <span className="text-[green] text-[20px] font-bold">-</span>

                                                              <span className="ml-1" >{moment(item.end_date).format("MMM Do YYYY") || 'চলমান'}</span>
                                                              
                                                              </p>
                                                </div>     

                                                </li>

                                          )}


                                          </ol>



                              </div>
                        </div>
                  </div>
            </div>
      </section>

      <section className="mt-10 mb-8 w-full">
            <div className="container border border-solid border-[#DFDFDF] rounded-lg mx-auto">
                  <div className="text-center my-6">
                        <h3 className="font-NotoSansBengali font-semibold text-titleSize text-PrimaryColor">সেরা রিভিউ </h3>
                  </div>
                  
                 <Reviews id={SINGLE_USER?.id} />

            </div>
      </section>



    {/* <section className="text-center mb-10">

        <Link legacyBehavior href={`/reviews/${SINGLE_USER?.id}`}>
           <button className="text-PrimaryColor py-2 px-5  border border-solid border-PrimaryColor rounded font-NotoSansBengali font-bold text-paragrapSize leading-6 ">আরো দেখুন</button>
         </Link>

    </section> */}



   
    </Layout>

  );
  
}



export async function getServerSideProps({ query }) {

const {
            data: data

      }: AxiosResponse<ISingleUserApiResponse> =
          await fetchSingleUser(query);          
            
  return {
    props: data,
  }
  
}


export default User;