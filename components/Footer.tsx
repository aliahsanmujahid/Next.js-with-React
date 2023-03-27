import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
      <>

<div className="p-[15px] bg-[#0094E7]"></div>

<div className="w-[98%] sm:w-[95%] m-auto mx-auto pt-12 theme_h3">
    <div className="w-[100%] grid grid-cols-1 md:grid-cols-4 ">
        <div className="w-[100%] justify-center">
            <div className='flex justify-center'>
            <Link legacyBehavior href='/home'>
               <Image    
                  src={"/images/mlogo.png" }
                  alt="midnight city"
                  width={150}
                 height={50}
                />
            </Link>
            </div>
            <div className="pt-4 ">
                <div className="flex flex-row gap-2 justify-center">
                    <img className="logo-1" src="../images/logo 1.png" alt="ভূমি সংস্কার বোর্ড" />
                    <img className="logo-2" src="../images/logo 2.png" alt="ভূমি মন্ত্রণালয়" />
                    <img className="logo-3" src="../images/logo 3.png" alt="ভূমি উন্নয়ন কর" />
                </div>
            </div>
        </div>
        <div className="w-[100%] text-center md:text-left overflow-hidden flex flex-col gap-3 justify-items-left  pt-4 md:pt-0">
        <a className="group md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
            <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                   ব্লগ
                </a>
                <a className="group md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
            <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                    
               সাইটম্যাপ</a>

                
               <Link legacyBehavior href='/faq'>
                      <a className="group md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
                      <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                         সচরাচর জিজ্ঞাসা</a>
                </Link>

                <Link legacyBehavior href='/policy'>
                         <a className="group md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
                         <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                           গোপনীয়তার নীতিমালা</a>
                </Link>

                 <a className="group md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
            <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                 ব্যবহারের শর্তাবলি</a>
        </div>
        <div className="w-[100%] text-center md:text-left overflow-hidden flex flex-col gap-3 justify-items-left  pt-4 md:pt-0 ">
            <a className="group  md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
            <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                  অফিস লগইন</a>
                  <a className="group  md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
            <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                 যোগাযোগ করুন</a>
                 <a className="group  md:-translate-x-3 hover:translate-x-1 hover:text-[#0094E7] duration-500"  href="">
            <span className='text-[#0094E7] hidden md:inline-block w-[10px!important] h-[3px] mr-[3px] mb-[3px] bg-sky-500/100 transform transition ease-in-out duration-1000'></span>
                  নিরাপত্তা</a>

                  

                  
        </div>
        <div className="w-[100%] sm:pr-4 grid grid-cols-1 justify-items-center pt-12 pb-12 md:pt-0 md:justify-items-end md:pb-0">
            <p className="">কারিগরি সহযোগিতায়</p>
            <div className="mb-4">
                <img className='p-2 sm:p-0' src="../images/mysoft-logo 1.png" alt="" />
            </div>
            <p className="">সামাজিক মাধ্যমসমূহ</p>
            <div className="ml-2 pt-2 pb-0 leading-[38px] ">
                  <a href="#" className="mr-3 text-size">
                        <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="mr-3 text-size">
                        <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" className="mr-3 text-size">
                        <i className="fa-brands fa-youtube"></i>
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
</div>

<div className="flex justify-center text-center md:py-12 mb-10 theme_h3 font-bold">
    <small className=" p-2 ">কপিরাইট © ২০২৩ সর্বস্বত্ব সংরক্ষিত Mysoftheaven.com</small>
</div>

     </>
  )
}