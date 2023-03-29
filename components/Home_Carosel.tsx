import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { useLang } from "@/hooks";


export default function Carosel() {

   const { LangInfo } = useLang();
   const { lang } = LangInfo;


  return (  

           
      // <div className='item'>
      //       <div className=" text-center">
      //             <h1 className=" pt-10 text-[#fff] text-[30px] font-semibold leading-10">গ্রাহক মন্তব্য</h1>
      //       </div>
      //       <div className="container  mt-12 h-[257px]">
      //             <div className="md:flex md:ml-24">
      //                   <img src="../images/Rectangle24.png" alt="" className="owl_hidden_img relative left-32 -top-6" />
      //                   <p className=" text-[14px] py-4 px-12 mx-6 md:py-10 md:pl-[170px] md:pr-[90px] md:mx-16 md:text-[20px] md:font-bold leading-6 bg-white rounded">" পরিষেবাটি পেতে আপনার সুবিধাজনক তারিখ এবং সময় বেছে নিন। তাদের রেটিং এর উপর ভিত্তি করে পরিষেবা প্রদানকারী নির্বাচন করুন।পরিষেবাটি পেতে আপনার সুবিধাজনক তারিখ এবং সময় বেছে নিন। তাদের রেটিং এর উপর ভিত্তি করে পরিষেবা প্রদানকারী নির্বাচন করুন।পরিষেবাটি পেতে আপনার সুবিধাজনক তারিখ "</p>
      //             </div>
      //       </div>
     
      // </div>


      
      <section className="md:container px-1 lg:px-8  m-auto">
        <div className="mx-auto   mt-8 mb-8 bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="grid sm:grid-cols-4">
            <div className="sm:col-span-1 ">
              <img className="w-[50%!important] m-auto pt-4 sm:pt-0 sm:m-0 sm:w-[98%!important] sm:rounded-br-[70px]" src="../images/Rectangle24.png" alt="Modern building architecture" />
            </div>
            <div className="sm:col-span-3 p-4 max-[500px]:p-1 max-[500px]:pb-4 md:ml-2.5 my-auto">
              <div className="text-center ">
                  
              <h3 className='mb-4 theme_h2 cursor-pointer'>
              { lang === "bang" ? " পরিষেবাটি পেতে আপনার সুবিধাজনক তারিখ এবং সময় বেছে নিন " : "All land services at hand" }
             
              </h3>

                  <div className='flex justify-center text-[15px] font-bold leading-6'>
                      <div className='w-[12px] h-[3px] bg-sky-500 mt-auto mb-auto mr-1'></div>
                      সাইফুজ্জামান চৌধুরী
                  </div>

              </div>   
            </div>
          </div>
        </div>
      </section>


  )
}