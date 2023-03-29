import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Layout from '@/components/Layout'
import { useLang } from "@/hooks";
import  Contact  from "@/components/Contact";
import  Accordion  from "../components/Accordion";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
  IFaq,
  IFaqApi
} from '../models/Faq';
import { fetchFaqs } from '../http';


interface IPropTypes {
  data: IFaqApi
}

const Faq: NextPage<IPropTypes> = ({ data }) => {

  const router = useRouter();

  
  const [nagorik, setNagorik] = useState<IFaq[]>(data?.data?.filter(i => i.category_name == 'citizen'));
  const [poramorsok, setPoramorsok] = useState<IFaq[]>(data?.data?.filter(i => i.category_name == 'consultant'));

  const { LangInfo,HandleChange } = useLang();
  const { lang } = LangInfo;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    if( data.error == '404' ){
          router.push('/404');
    }
  }, []);


  return (
  
    <Layout>

    <section>
        <div className="mx-auto pt-[170px]">
        

        <div className="lists text-center">

            <div className="flex flex-wrap flex-col mx-auto">
                <div className="title ">
                    
                {lang === 'eng' ? (
                
                <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 font-semibold">
                    Frequently Asked Questions
                    </h4>
              ) : (
                
                <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 font-semibold">
                সচরাচর জিজ্ঞাসা
                 </h4>
              )}
                    
                </div>
            </div>
            
        </div>

        <div className="toggle_bar">
          <ul className="">

           
           <li 
            className={toggleState === 1 ? "active-tabs" : ""}
            onClick={() => toggleTab(1)}
            >
              নাগরিক
            </li>
            <li 
            className={toggleState === 2 ? "active-tabs" : ""}
            onClick={() => toggleTab(2)}
            >
              পরামর্শক
            </li>

          </ul>
        </div>


        <div className={toggleState === 1 ? "accgridbox" : "displaynone"} >
        <div className="accodion">
            <div className="acdionlist2">
              <div className="accordion grid gap-4" id="">
                 
                 {
                  nagorik && <Accordion values={nagorik} />
                 }
                 


              </div>
            </div>
          </div>


          <div className="left_grid">
            <img src="/images/Rectangle_31.png" alt="" />
          </div>
 
        </div>

       <div className={toggleState === 2 ? "accgridbox" : "displaynone"} >
        <div className="accodion">
            <div className="acdionlist2">
              <div className="accordion grid gap-4" id="">

                 {
                  poramorsok && <Accordion values={poramorsok} />
                 }

              </div>
            </div>
          </div>


          <div className="left_grid">
            <img src="/images/Rectangle_31.png" alt="" />
          </div>
 
        </div>



        


        <Contact vari={2}/>


        </div>
    </section>



    <section className="w-full sm:relative pt-6 sm:mt-[100px] mb-[30px]">

<img src="../images/Group 17.png" className="sm:absolute -right-[2vw] bottom-0 w-[90vw] sm:w-[50vw] m-auto" alt="" />
  

<div className="w-[99%] sm:w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 text-left">
    <div className="pb-2 sm:pb-5">
            
            <h1 className="theme_h1 mb-3">
            আপনার কি ভূমিসেবার প্রয়োজন?
            </h1>
            <p className=" theme_h3">
            ভূমি সম্পর্কিত যেকোনো জটিলতার সহজ সমাধান পেতে আমাদের সাইটটিতে আপনাকে স্বাগতম।
             এখানে ভূমি নিবন্ধন, নামজারি, জমির খাজনা ,পর্চা, মিসকেস মামলা, দেওয়ানি মামলা,
              ভূমি রাজস্ব মামলা, খাস জমি, ভূমি জরিপ, খতিয়ানের ভুল সংশোধন সংশ্লিষ্ট ভূমিসেবা 
            সহ ভূমি বিষয়ে বিভিন্ন সেবা প্রদানে আমাদের পরামর্শকরা নিরলসভাবে সহযোগিতা করে যাচ্ছেন।
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
 
 
 export default Faq;
