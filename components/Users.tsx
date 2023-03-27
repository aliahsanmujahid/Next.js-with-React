import React, { useEffect, useState } from "react";
import User from '@/models/User';
import Link from 'next/link';
import type { GetServerSideProps, NextPage } from 'next';
import  Star  from "../components/Star";
import Image from 'next/image'

import {
  IUser,
} from '../models/Filter';

interface IPropTypes {
  values: IUser
};


const Users: NextPage<IPropTypes> = ({ values }) => {

  const [imageError, setImageError] = useState(false);

    return (

      <>

<Link href={`/user/${values.id}`}>
      
 
 <div  className="w-full border group cursor-pointer bg-white shadow-md  hover:shadow-lg overflow-hidden mb-2 p-1 sm:p-4">
 <div className="w-full md:flex">
   <div className="filterimage w-[140px] md:shrink-0 mb-2 sm:mb-0">

                   <Image
                                        src={ imageError ? "/images/profile.png" : 'https://land-consultancy.gsmcltd.com/'+values.profile_image }
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
   <div className="w-full md:flex flex-wrap max-[500px]:p-1 max-[500px]:pb-4 md:ml-2.5">

     
     <div className="md:w-[75%] flex flex-col md:flex-col md:gap-1 justify-start">
     <div>

        <div className='flex'>
        <h1 className='className="max-[700px]:text-[15px] text-[23px] uppercase text-gray-700 leading-none font-bold cursor-pointer"'>{values.name}</h1>
       
        { values.active_status === 1 && 

           <div className="flex ml-2">
               <i className="fa-solid fa-circle text-[#4EC200] text-[10px] pt-[7px]"></i>
               <p className="hidden sm:block pt-[2.5px] ml-[3px]">Active Now</p>
           </div>

        }

        </div>

        <span className="text-sm">
         {values.type}
         </span>
     </div>

    <div className=''>
      <p className="font-bold text-[15px]">বিশেষত্ব</p>
         <div className="w-[100%] lg:w-[70%] flex flex-wrap">

         {values.service_latest.map((item , index) => 

           <span key={index} className="text-[12px] m-1 mb-0 ml-0 rounded-md sm:rounded-full px-1 sm:px-2 py-0 pt-[2px] bg-[#cffafe] md:bg-inherit sm:group-hover:bg-[#cffafe]">{item.title}</span>
         
         )} 
             
         </div>
      </div>

     </div>


     <div className="mt-1 md:mt-0 flex flex-col md:flex-col md:gap-1 justify-evenly md:w-[25%] text-left md:text-right">
         
         <div>
            <p className="text-[green]">কর্মস্থল</p>
            <span className="text-[12px]">
               উপজেলা ভূমি অফিস, ফরিদগঞ্জ, চাঁদপুর
            </span>
         </div>

         <div className="flex flex-col md:flex-row justify-end flax-warp">
           
         <div >
           <p  className="text-[green] leading-[18px]">অভিজ্ঞতা</p>
           <span className='text-[14px] leading-[12px]' >{values.years_of_experience}</span>
           
           
         </div>

         <div className='md:ml-2 '>
           <p>রেটিং(4561)</p>
            
           
           <div className='flex leading-[15px]'>
                <Star stars={values.rates} />
                <span className='text-[15px] ml-[3px]'>{values.rates}</span>
           </div>


         </div>

         </div>

         

     </div>



   </div>
 </div>
</div>
</Link>

      </>
        
        
    );
}

export default Users;