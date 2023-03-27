import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import  Star  from "../../components/Star";
import { AxiosResponse } from 'axios';
import { fetchReview } from '../../http';
import Image from 'next/image'
import  Popup  from "../../components/Popup";
import Layout from '@/components/Layout'
import { useRouter } from 'next/router';
import Link from 'next/link'
import type { GetServerSideProps, NextPage } from 'next';
import { fetchSingleUser } from '../../http';
import moment from "moment";

import {
    Root,
    Data,
    List

  } from '../../models/Reviews';

  import {
    ISingleUserApiResponse,
    IUser,
  } from '../../models/SingleUser';

  interface IPropTypes {
    user: ISingleUserApiResponse;
    data: Root;
  };

    
  const Review: NextPage<IPropTypes> = ({ data,user }) => {


    
  console.log(" data,user data,user-------------------", user);

    const router = useRouter();

    const qvalues =  router.query;
  
  const [reviews, setReviews] = useState<List[]>(data?.data?.list);
  const [review, setReview] = useState<List>();
  const [hasMore, setHasMore] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [dataError, setdataError] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [offset, setOffset] = useState<number>(0);

  
  const getReviews = async () => {

    setLoading(true);
    
    const {
        data,
    }: AxiosResponse<Root> =
      await fetchReview( qvalues.slug  ,offset);

          console.log("data============",data);

          if(data){
            setLoading(false);
          }
          
          if(data?.error == '404' || data?.data?.list?.length == 0){
            setdataError(true);
          }
          

          data?.data?.list?.map(item => (
            setReviews(rev => [...rev, item])
          ));

          setHasMore(false);
          setOffset(offset+1);
  
  };
      

  return (
  
    <Layout>           

      <section className="mx-auto pt-[75px] md:pt-[130px] py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden bg-[#e6f3ff]">
  <div className="container px-1 sm:px-4 mx-auto">
   
  <div className="text-left mb-2">
    
  <Link legacyBehavior href={`/user/${user.data[0]?.id}`}>
      <a className=" inline-block mb-1 text-xl font-heading font-medium underline hover:text-darkBlueGray-700" href="#">
         Go Back
      </a>
   </Link>
 
 </div>


   <div className="flex items-center space-x-4">

    <img className="w-24 h-24 sm:w-20 sm:h-20 rounded" src="../images/profile.png" alt=""/>
    
    <div className="font-bold">
        <p>{user.data[0]?.name}</p>
        <p className="">{user.data[0]?.type}</p>
        <p>{user.data[0]?.current_profession}</p>
        <div className="flex ml-[-3px]">
          <div className="mt-[3px]">
             <Star stars={user.data[0]?.rates} />
          </div>
          <span className="ml-2 text-[15px] font-bold ">{user.data[0]?.rates}</span>
        </div>
    </div>
   </div>

   <div className="text-right sm:text-[20px]">

       <span className="inline-block font-heading font-bold text-gray-600" >{data?.data?.totalCitizenRating} reviews</span>

   </div>




   { reviews?.length > 0 && reviews?.map((item,index) => (
    <div key={index} className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div className="pt-3 pb-3 md:pb-1 px-4 bg-white bg-opacity-40">
        <div className="flex flex-wrap items-center">
          <img className="mr-6 w-20" src="../images/profile.png" alt="" />
          <div className="flex flex-col">
            
          <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
       
          <div className="flex">
          <div className="mt-[3px]">
             <Star stars={4.5} />
          </div>
          <span className="ml-2 text-[15px] font-bold ">5.0</span>
          </div>

         

          </div>


          <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>

      

    


        </div>
      </div>
      <div className="px-4 overflow-hidden md:px-6 pt-4 bg-white">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-6 md:mb-0 height-[50px]">
            <p className="mb-8 text-darkBlueGray-400 leading-loose font-bold text-[15px]">
              
              
              I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.
              
              I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.
              
             
              
            </p>
            
           
          </div>
          <div className="w-full md:w-1/3 text-right">
            <p className="mb-8 font-bold text-gray-500 text-[14px]">

              Added { moment(item?.created_at).format("MMM Do YYYY")}
              
              </p>
          </div>
        </div>
      </div>
    </div>
    ))}

     <div className="text-right ">
            {
              isLoading ?
              
              <button disabled type="button" className="font-bold mt-4 py-2 px-5 mr-2 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
              </svg>
                  Loading...
            </button>
            :
            !dataError && 
              <button onClick={() => getReviews()} className="mt-4 px-4 bg-sky-500 py-1 font-bold text-white">See more</button>

           }
         </div>


  </div>
      </section>

    </Layout>

  );
  
}



export async function getServerSideProps({ query }) {
      

  const {
    data: singleuser

}: AxiosResponse<ISingleUserApiResponse> =
  await fetchSingleUser(query);  

  const {

    data:review
    
}: AxiosResponse<Root> =
  await fetchReview(query.slug,0);
  
            
  return {
    props: {
      data : review,
      user : singleuser
      
  },
  }
  
}


export default Review;