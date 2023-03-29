import React, { useEffect, useState } from "react";
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useRouter } from 'next/router';
import { useLang } from "@/hooks";
import Image from 'next/image'


export default function Header() {

  const router = useRouter();
  const { LangInfo,HandleChange } = useLang();
  const { lang } = LangInfo;

  const setLang = async (lang) => {
      await HandleChange(lang);
   };

   const [navbar, setNavbar] = useState(false);

   return (
     
    <div className="fixed bg-white top-0 left-0 w-full" style={{ zIndex: '1500' }}>
    
       <div className="hidden max-[768px]:block w-full px-4 mx-auto md:items-center md:px-8 max-[540px]:bg-[#F0FFE7]">
         <ul className="flex justify-center max-[300px]:flex-wrap">

            <li className="flex h-[20px] mr-2 min-[540px]:pt-4 leading-[35px] ">
                  <i className="text-[green] mt-2 fa-solid fa-envelope"></i>
                  <p className="ml-2 ">Demo@gmail.com</p>
            </li>
            <li className="flex  min-[540px]:pt-4 leading-[38px]">
               <i className="text-[green] mt-2 fa-solid fa-phone"></i>
               <p className="ml-2 ">0153463463</p>
            </li>
            <li className="ml-2 pt-4 pb-0 leading-[38px] hidden min-[540px]:block">
                  <a  className="mr-3 text-size">
                        <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a  className="mr-3 text-size">
                        <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a  className="text-size">
                        <i className="fa-brands fa-square-instagram"></i>
                  </a>
            </li>

            <li className= {"pl-4 pt-4 pb-0 cursor-pointer overflow-hidden hidden min-[540px]:block"}>
                
                 <button className="w-[100px] bg-[#348739!important] h-[30px] border rounded-full overflow-hidden leading-none">
                   <span onClick={() => setLang('bang')} className= {"rounded-full px-4 py-1 font-bold bangla "  + (lang === 'bang' ? 'tactive' : '')} >বাং</span>
                   <span onClick={() => setLang('eng')} className= {"rounded-full  px-4 py-1 font-bold english " + (lang === 'eng' ? 'tactive' : '')} >EN</span>
                 </button>

            </li>


            
      </ul>
       </div> 


       <nav className="w-full max-[1200px]:pt-4 shadow" style={{ zIndex: '1500' }}>


           <div className="w-full min-[1200px]:flex px-4 mx-auto md:items-center md:px-8">

               <div className="mb-[-40px] max-[768px]:mb-[0px] max-[1200px]:mb-[-60px] pr-0 pt-0 max-[768px]:pb-4">
                   <div className="flex items-center justify-between md:block">


                     

                       <Link legacyBehavior href='/home'>


                                 <img className="w-[100px] md:w-[200px]" src="/images/mlogo.png" alt="" />
                          
                      </Link>


                       <div className="md:hidden">
                           <button
                               className="text-gray-500 p-2 rounded-md outline-none "
                               onClick={() => setNavbar(!navbar)}
                           >
                               {navbar ? (
                                   <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="w-6 h-6"
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                   >
                                       <path
                                           fillRule="evenodd"
                                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                           clipRule="evenodd"
                                       />
                                   </svg>
                               ) : (
                                   <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="w-6 h-6"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       stroke="currentColor"
                                       strokeWidth={2}
                                   >
                                       <path
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                           d="M4 6h16M4 12h16M4 18h16"
                                       />
                                   </svg>
                               )}
                           </button>
                       </div>
                   </div>
               </div>

            
                   <div
                       className={`w-full h-[100vh] flex-1 text-gray-500 justify-self-center pb-3 mt-8 md:pb-0 md:mt-0 ${
                           navbar ? "block" : "hidden"
                       }`}
                   >

                       <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                           <li className=" hover:text-[green]">
                           <Link legacyBehavior href='/home'>
                  <a onClick={() => setNavbar(!navbar)} className= { "text-[16px] font-medium " + (router.pathname === "/home" ? "active" : "" )}>
                        
                    {lang === 'eng' ? (
                        'Home'
                         ) : (
                        'Home'
                     )}
                        
                        </a>
                  </Link>
                           </li>
                           <li className=" hover:text-[green]">
                           <Link legacyBehavior href='/faq'>
                  <a  onClick={() => setNavbar(!navbar)} className= { "text-[16px] font-medium " + (router.pathname === "/consultation" ? "active" : "" )}>
                        
                    {lang === 'eng' ? (
                        'Consultation'
                         ) : (
                        'কনসালটেশন'
                     )}
                        
                        </a>
                  </Link>
                           </li>
                           <li className=" hover:text-[green]">
                           <Link legacyBehavior href='/about'>
                  <a  className= { "text-[16px] font-medium " + (router.pathname === "/consultation" ? "active" : "" )}>
                        
                    {lang === 'eng' ? (
                        'Contuct Us'
                         ) : (
                        'কনসালটেশন'
                     )}
                        
                        </a>
                  </Link>
                           </li>
                           <li className=" hover:text-[green]">
                           <Link legacyBehavior href='/consultation'>
                  <a  className= { "text-[16px] font-medium " + (router.pathname === "/consultation" ? "active" : "" )}>
                        
                    {lang === 'eng' ? (
                        'Consultation'
                         ) : (
                        'কনসালটেশন'
                     )}
                        
                        </a>
                  </Link>
                           </li>
                       </ul>

                       <div className="mt-3 mt-8 text-center space-y-2 lg:hidden md:inline-block">
                            
                            <h3>ভূমিসেবা - Google Play তে অ্যাপ</h3>
                            <button className="bg-[green] px-4 py-2 rounded text-white">
                                ক্লিক করুন
                            </button>

                        </div>

                        <div className="mt-3 mt-8 text-center space-y-2 lg:hidden md:inline-block">
                            
                            <h3>সামাজিক মাধ্যমসমূহ</h3>
                            <div>
                            <a href="#" className="mr-3 text-size">
                        <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="mr-3 text-size">
                        <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" className="text-size">
                        <i className="fa-brands fa-square-instagram"></i>
                  </a>
                            </div>

                        </div>


                   </div>

               <div className=" w-full text-end p-4 pr-0 pt-0 hidden md:flex md:flex-col ">
            

               <div className="max-[768px]:hidden w-full pb-2 mx-auto md:items-center md:flex justify-end">
      <ul className="flex justify-end ">

            <li className="flex px-4 pt-4 pr-0 pb-0 leading-[32px]">
                  <i className="text-[green] mt-2 fa-solid fa-envelope"></i>
                  <p className="ml-2 ">Demo@gmail.com</p>
            </li>
            <li className="flex px-4 pt-4 pb-0 leading-[35px]">
               <i className="text-[green] mt-2 fa-solid fa-phone"></i>
               <p className="ml-2 ">01554745746</p>
            </li>
            <li className="pt-4 pb-0 leading-[38px]">
                  <a href="#" className="mr-3 text-size">
                        <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="mr-3 text-size">
                        <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" className="text-size">
                        <i className="fa-brands fa-square-instagram"></i>
                  </a>
            </li>

            <li className= {"pl-4 pt-4 pb-0 cursor-pointer overflow-hidden"}>
                
                 <button className="w-[100px] h-[30px] border rounded-full overflow-hidden leading-[0px]">
                   <span onClick={() => setLang('bang')} className= {"rounded-full px-4 py-1 font-bold bangla "  + (lang === 'bang' ? 'tactive' : '')} >বাং</span>
                   <span onClick={() => setLang('eng')} className= {"rounded-full  px-4 py-1 font-bold english " + (lang === 'eng' ? 'tactive' : '')} >EN</span>
                 </button>

            </li>


            
      </ul>
               </div> 

               <ul className=" hidden md:flex md:text-end justify-end">
            <li className="px-2 lg:px-7 py-2 text-[16px] hover:text-[green] transform hover:scale-110">

            <Link legacyBehavior href='/home'>

                   <a className={"text-[16px] " + (router.pathname === "/home" ? " active" : "" )}>

                     {lang === 'eng' ? (
                        'Home'
                     ) : (
                        'হোম'
                      )}

                   </a>

            </Link>

            </li>

            <li className="px-2 lg:px-7 py-2 text-[16px] font-bold hover:text-[green] transform hover:scale-110">

            <Link legacyBehavior href='/about'>
               <a className={ "text-[16px] font-medium " + (router.pathname === "/about" ? "active" : "" ) }>

                        {lang === 'eng' ? (
                              'About Us'
                                ) : (
                             'আমাদের সম্পর্কে'
                               )}
                  </a>
            </Link>

</li>

            <li className={ 'px-2 lg:px-7 py-2 text-[16px] font-bold hover:text-[green] hover:text-[#0094E7] transform hover:scale-110' }>

                  <Link legacyBehavior href='/search?offset=0'>
                  <a  className= { "text-[16px] font-medium " + (router.pathname === "/search" ? " active" : "" )}>
                        
                    {lang === 'eng' ? (
                        'Consultation'
                         ) : (
                        'কনসালটেশন'
                     )}
                        
                        </a>
                  </Link>
                 

            </li>

            <li className="px-2 lg:px-7 py-2 text-[16px] font-bold  hover:text-[green] transform hover:scale-110">

                  <Link legacyBehavior href='/policy'>
                  <a  className= {"text-[16px] font-medium " + (router.pathname === "/policy" ? "active" : "" )}>
                        
                  {lang === 'eng' ? (
                        'Policy'
                         ) : (
                        'নিয়ম ও নীতি'
                     )}
                        
                        </a>
                 </Link>
                 

            </li>
            <li className="px-2 lg:px-7 py-2 text-[16px] font-bold hover:text-[green] transform hover:scale-110">

                  <Link legacyBehavior href='/faq'>
                  <a className= {"text-[16px] font-medium " + (router.pathname === "/faq" ? "active" : "" )}>
                  {lang === 'eng' ? (
                        'Faq'
                         ) : (
                        'জিজ্ঞাসা'
                     )}
                        
                        </a>
                 </Link>

            </li>
            <li className="px-2 lg:px-7 py-2 text-[16px] font-bold hover:text-[green] transform hover:scale-110">
                  
                 <Link legacyBehavior href='/consultant'>
                       <a className={"text-[16px] font-medium " + (router.pathname === "/consultant" ? "active" : "" )}>
                       {lang === 'eng' ? (
                        'For Consultants'
                         ) : (
                        ' পরামর্শদাতা জন্য'
                     )}
                         
                         </a>
                 </Link>
                 

            </li>

            <li className="">
                  <button
                        className= {" px-7 py-[10px] leading-none bg-[#348739!important] text-[16px] text-[#ffffff] font-bold rounded-lg " + (router.pathname === "/home" ? "bg-white text-gray-700" : "" )}>
                        
                        {lang === 'eng' ? (
                        'Let’s Connect'
                         ) : (
                        'লগইন/রেজিস্টার'
                     )}
                  </button>
            </li>

               </ul>


               </div>


           </div>


       </nav>

       </div>


   );
}