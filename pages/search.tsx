import React, { useEffect, useState } from "react";
import { AxiosResponse } from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import  Curds  from "../components/Cards";
import { useLang } from "@/hooks";
import  Contact  from "@/components/Contact";
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import  Users  from "../components/Users";
import { fetchUsers } from '../http';
import qs from 'qs';
import { PER_PAGE } from '@/config/index';
import {
  IData,
  IUserApiResponse
} from '../models/Filter';


interface IPropTypes {
  
      data: IData;
      error:string;
  
}

const SearchPage: NextPage<IPropTypes> = ({ data,error }) => {
  
  //console.log("=========Data FROM API------------------",error);

  const router = useRouter();

  const qvalues =  router.query;

  const [rating, setRating] = useState(0);
  const [rateCheckValue, setRateCheckValue] = useState(false);
  // const [range, setRange] = useState('50');
  const [hover, setHover] = useState(0);

  const [searkchKey, setSearchKey] = useState(qvalues.search?.toString() || '');

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   //handleSubmit();
  // };

  const rattingHandler = (index) => {
    // setRating(index);
    setRateCheckValue(true);
    filterSearch({ratingValue : index,ratingTop:'desc'});
  };

  // const rangeHandler = (e) => {
  //   setRange(e);
  //   //filterSearch({range : range});
  // };


  const handleOnlineCheck = (event) => {
    event.target.checked == true ? filterSearch({active : event.target.value,ratingTop:'desc'})
    : filterSearch({active : ''});
  };

  const handleRatingTopCheck = (event) => {

    console.log("event.target.value",event.target.value,event.target.checked );
    if(event.target.checked === true){
      setRateCheckValue(true);

      filterSearch({ratingTop : event.target.value})
    }else{
      setRateCheckValue(false);
      filterSearch({ratingTop : 'asc'});
    }
  };

  const handleC1Check = (event) => {
    event.target.checked == true ? filterSearch({services : event.target.value})
    : filterSearch({services : ''});
  };
  const handleC2Check = (event) => {
    event.target.checked == true ? filterSearch({services : event.target.value})
    : filterSearch({services : ''});
  };
  const handleC3Check = (event) => {
    event.target.checked == true ? filterSearch({services : event.target.value})
    : filterSearch({services : ''});
  };
  const handleC4Check = (event) => {
    event.target.checked == true ? filterSearch({services : event.target.value})
    : filterSearch({services : ''});
  };
  const handleC5Check = (event) => {
    event.target.checked == true ? filterSearch({services : event.target.value})
    : filterSearch({services : ''});
  };

  var page = Number(qvalues.offset);

  const pagePrevHandler = () => {

    if(page > PER_PAGE){
      page = page - PER_PAGE;
    }else{
      page = 0;
    }
    console.log("---page next---",page);

    filterSearch({offset : page});

  };

  const pageNextHandler = () => {

   if(page >= 0){
    page = page + PER_PAGE;
   }
   if(!page){
      page = 0;
   }

    console.log("---page prev---",page);

    filterSearch({offset : page});

  };


  const clearValue = (name) => {

    console.log("clear name------",name);

    if(name == 'skey'){
        setSearchKey('');
        filterSearch({search : ''});
        
    }
    if(name == 'ratting'){
      setRating(0);
      setRateCheckValue(false);
      filterSearch({ratingValue : '0',ratingTop:'asc'});
    }
    if(name == 'active'){
      //setRange('50');
       filterSearch({active : ''});
    }
    if(name == 'ratingTop'){
      setRateCheckValue(false);
      filterSearch({ratingTop : 'asc'});
    }
    if(name == 'services'){
      //setCheckValue('');
      filterSearch({services : ''});
    }

    if(name == 'all'){
      setRateCheckValue(false);
      filterSearch({search : '',ratingValue : '0',active : '',ratingTop : '',services : ''});
    }

  };


  const handelSubmitSearch = (e) => {
    e.preventDefault();
    
    if(searkchKey){
       filterSearch({search : searkchKey,offset: 0});
    }

  }

  const filterSearch = ({

    services = router.query.services || '8',
    active = router.query.active || '0',
    search = router.query.search  || '',
    ratingValue = router.query.ratingValue || '0',
    ratingTop = router.query.ratingTop || 'desc',
    offset = router.query.offset || 0,
    // offset = router.query.offset || 0,
    limit = PER_PAGE,

  } ) => {

  console.log("router.query.offset",router.query.offset);

    const { query } = router;
    query.services = services;
    query.active = active;
    query.search = search.toString().toLowerCase();
    query.ratingValue = ratingValue;
    query.ratingTop = ratingTop;
    query.offset = offset.toString();
    query.limit = limit.toString();

    //console.log("Search Query=========",query);

    router.push({
      pathname: router.pathname,
      query: query,
    });

  };


  useEffect(() => {
    if( qvalues?.ratingTop == 'desc'){
      setRateCheckValue(true);
    }
    if( error == '404' ){
            router.push('/404');
    }

  }, []);

 
  return (
  
    <Layout>           

      <section className="mx-auto pt-[75px] md:pt-[130px]">

        
        <div className="min-h-[30vh] max-[400px]:min-h-[30vh] flex flex-col justify-center bg-gradient-to-t from-[#d6eafd] p-1 sm:p-0 m-auto">
         
         
          <h1 className="text-[#348739] text-1xl font-bold md:text-3xl sm:text-3xl text-center max-[300px]:text-[12px]">
            
            ভূমি সংক্রান্ত সমস্ত সেবা
          
          </h1>

          <div className="pt-2 min-[400px]:p-4 sm:p-8 w-full sm:max-w-2xl sm:mx-auto rounded-full text-1xl font-bold max-[300px]:text-[12px]">
              
            <form role="form" onSubmit={handelSubmitSearch} className="relative hover:shadow-lg hover:shadow-blue-500/50 flex w-full bg-white rounded-full">
              <input type="text" value={searkchKey} placeholder="Search Keyword" className=" px-3 py-1 sm:px-6 sm:py-2
                w-full text-gray-700 focus:outline-none" onChange={(e) => setSearchKey(e.target.value)} />
              <button onClick={handelSubmitSearch} className="text-[10px]  sm:text-[15px]  absolute right-2 top-3 lg:top-3 min-[400px]:right-[16px] text-gray-500  font-semibold focus:outline-none">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

          </div>
        </div>
      </section>





      <section className="w-full lg:w-10/12 m-auto">
        
      <div className="text-[12px] font-bold w-full  p-1 sm:p-4 sm:pb-0">
      <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="text-[green] font-bold  inline-flex items-center p-2 mt-2 pl-[0px!important] text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
     <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
  <span className="ml-2 ">ফিল্টার</span>
</button>

      </div>

<div className="sm:flex text-[12px] font-bold">

<aside id="cta-button-sidebar" className="text-[12px] font-bold row-span-3 inline-block max-[640px]:fixed max-[640px]:top-10 max-[640px]:left-0 z-40 sm:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">


     <div className="text-right">
        <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="text-[green] font-bold  inline-flex items-center p-2 mt-2 ml-3 text-xl text-gray-500 rounded-lg sm:hidden bg-gray-100 focus:outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   
              <i className="fa-solid fa-circle-xmark"></i>
        
        </button>
     </div>

     <ul className="space-y-2 pt-2">
        {/* <li>

             <label htmlFor="small-range" className="block text-gray-900 dark:text-white">কনসালটেশন ফি</label>
             <input type="range" onChange={(e) => rangeHandler(e.target.value)} id="points" name="points" min="50" max="5000" className="w-full h-1 range accent-[#84cc16] bg-gray-100  transparent appearance-none rounded-lg border-transparent bg-neutral-200" />

             <div className="flex flex-wrap justify-between">
                     <span>50</span>
                     <span>{range}</span>
             </div>
        </li> */}
        <li>
           
        <label htmlFor="small-range" className="block text-bold text-[20px] text-[green] mb-1 ">ফিল্টার</label>
                        
        </li>
        <li>
           
          <label htmlFor="small-range" className="text-[17px] block mb-0 text-gray-900 dark:text-white">রেটিং নির্বাচন করুন</label>
          
          <div className="flex items-center">
         
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || Number( qvalues.ratingValue) ) ? "text-[25px] text-yellow-400" : "text-[25px] text-gray-300"}
            onClick={() => rattingHandler(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
         
         </div>


        </li>
        <li>


          <label htmlFor="small-range" className="text-[17px] block mb-2 text-gray-900 dark:text-white">ক্রমানুসার</label>
          
          <div className="flex items-center leading-[24px] text-[15px]">
              <input id="online" checked = { qvalues?.active?.toString() === '1' } type="checkbox" value="1" onChange={handleOnlineCheck} className="w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="online" className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300">অনলাইন</label>
          </div>
          <div className="flex items-center leading-[24px] text-[15px]">
            <input id="rating" disabled={true} checked = { qvalues?.ratingTop === 'desc--' } type="checkbox" value="desc--" onChange={handleRatingTopCheck} className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="rating" className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300">রেটিং</label>
          </div>


          <div className="flex items-center leading-[24px] text-[15px]">
            <input id="c1" disabled={true} checked = { qvalues?.services?.toString() === '1--' } type="checkbox" value="1" onChange={handleC1Check} className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="c1" className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300">প্রাসঙ্গিক (ডিফল্ট)</label>
          </div>
          <div className="flex items-center leading-[24px] text-[15px]">
            <input id="c2" checked = { qvalues?.ratingTop?.toString() === 'desc' } type="checkbox" value="desc" onChange={handleRatingTopCheck} className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="c2" className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300">জনপ্রিয়তা</label>
          </div>
          <div className="flex items-center leading-[24px] text-[15px]">
            <input id="c5" type="checkbox" disabled={true} checked = { qvalues?.services?.toString() === '3--' } value="3" onChange={handleC3Check} className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="c5" className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300">অভিজ্ঞতা</label>
          </div>
          <div className="flex items-center leading-[24px] text-[15px]">
            <input id="c6" type="checkbox" disabled={true} checked = { qvalues?.services?.toString() === '4--' } value="4" onChange={handleC4Check} className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset  text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="c6" className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300">বিশেষজ্ঞ প্রথম</label>
          </div>
          <div className="flex items-center leading-[24px] text-[15px]">
            <input id="c7" type="checkbox" disabled={true} checked = { qvalues?.services?.toString() === '5--' } value="5" onChange={handleC5Check} className=" w-5 h-5 ring-1 ring-[#84cc16] ring-inset text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="c7" className="ml-2 mt-[2px] text-gray-900 dark:text-gray-300">র‍্যাঙ্কিং</label>
          </div>



        </li>
        <li>
           <button onClick={() => clearValue('all')} className=" hover:shadow-lg cursor-pointer bg-white border border-gray-300 px-2 py-1 font-bold text-gray-600 text-[15px] ">পুনরায় সেট করুন</button>
        </li>
       
     </ul>


  </div>
</aside>


<div className="w-full">
  
  <div className="text-[12px] font-bold w-full  p-1 sm:p-4 sm:pb-0">
    <div className="flex flex-col md:flex-row gap-3 leading-4 justify-between flax-warp">

      <div className="flex flex-wrap gap-1">
          <span onClick={() => clearValue('skey')} className={ "py-1 px-2 cursor-pointer  bg-[#64748b] text-white flex " + (qvalues.search ? '' : 'hidden')} > {qvalues.search } <i className="mt-[3px] ml-[3px] fa-sharp fa-solid fa-xmark"></i></span>
          <span onClick={() => clearValue('ratting')} className={ "py-1 px-2 cursor-pointer  bg-[#64748b] text-white flex " + (qvalues.ratingValue && qvalues.ratingValue !== '0' ? '' : 'hidden')} >রেটিং {qvalues.ratingValue} <i  className=" mt-[2px] ml-[3px]  fa-sharp fa-solid fa-xmark"></i></span>
          <span onClick={() => clearValue('active')} className= { "py-1 px-2 cursor-pointer  bg-[#64748b] text-white  flex " + (qvalues.active && qvalues.active == '1' ? '' : 'hidden')}  >অনলাইন <i className=" mt-[2px] ml-[3px]  fa-sharp fa-solid fa-xmark"></i></span>
          <span onClick={() => clearValue('ratingTop')} className={ "py-1 px-2 cursor-pointer  bg-[#64748b] text-white flex " + (rateCheckValue === true ? '' : 'hidden')} > {qvalues.ratingTop && qvalues.ratingTop == 'desc' ? 'Top Rated' : 'DOWN রেটিং'} <i className=" mt-[2px] ml-[3px] fa-sharp fa-solid fa-xmark"></i></span>
          {/* <span onClick={() => clearValue('services')} className={ "py-1 px-2 cursor-pointer  bg-[#64748b] text-white " + (qvalues.services ? '' : 'hidden')} >
            {qvalues.services == '1'? 'প্রাসঙ্গিক (ডিফল্ট) ': ''} 
            {qvalues.services == '2'? 'জনপ্রিয়তা ': ''}
            {qvalues.services == '3'? 'অভিজ্ঞতা ': ''}
            {qvalues.services == '4'? 'বিশেষজ্ঞ প্রথম ': ''}
            {qvalues.services == '5'? 'র‍্যাঙ্কিং ': ''}
          
          <i className="fa-sharp fa-solid fa-xmark"></i></span> */}
      
      </div>

      <div>
              <p className="py-1 px-2 pl-[0px!important]">802 পরামর্শদাতা</p>
      </div>


    </div>
  </div>

  <div className="w-full flex flex-col flex-wrap justify-start p-1 sm:p-4 sm:pt-[8px!important]">

  <div className={"w-full p-10 border text-center bg-white shadow-lg shadow-blue-500/50 mt-4 text-[20px] " + (data?.list?.length <= 0 ? '' : ' hidden')  }>
    No Data
  </div>
    
    {data?.list.map((item , index) => 

          <Users key={index} values={item} />   
    )} 
       

     {/* <div className={"mt-4 flex justify-center mb-4 "} >
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <button disabled={page  == 0 || data?.list?.length <= 0  } onClick={() => pagePrevHandler()}
              className="mr-2 relative block font-bold rounded bg-gray-200 py-1.5 px-3 text-sm text-[#84cc16] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
           
              aria-label="Previous">
              <span aria-hidden="true">
                <i className="fa-solid fa-angle-left"></i>
              </span>
            </button>
          </li> */}
          {/* <li>
            <a
              className="relative block font-bold rounded bg-transparent py-1.5 px-3 text-sm text-[#84cc16] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              >1</a
            >
          </li>
          <li aria-current="page">
            <a
              className="relative font-bold block rounded bg-transparent py-1.5 px-3 text-sm text-[#84cc16] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              >2</a
            >
          </li>
          <li>
            <a
              className="font-bold relative block rounded bg-transparent py-1.5 px-3 text-sm text-[#84cc16] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              >3</a
            >
          </li> */}
          {/* <li>
            <button disabled={data?.list.length <= PER_PAGE } onClick={() => pageNextHandler()}
              className="relative font-bold block rounded bg-gray-200 py-1.5 px-3 text-sm text-[#84cc16] transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              
              aria-label="Next"
              ><span aria-hidden="true">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>  */}


    

<div className="flex flex-col items-end">
 
  <div className="inline-flex mt-2 xs:mt-0">
      <button disabled={page  == 0 || !page  } onClick={() => pagePrevHandler()}
       className = { "px-4 py-2 text-sm font-bold text-white hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " + ( page  == 0 || !page ? " bg-gray-400" : " bg-[green]")} >
          Prev
      </button>
      <button disabled={data?.list.length < PER_PAGE } onClick={() => pageNextHandler()}
       className = { "px-4 py-2 text-sm font-bold text-white border-0 border-l border-gray-400  hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " + (data?.list.length < PER_PAGE ? " bg-gray-400" : " bg-[green]")}>
          Next
      </button>
  </div>


</div>



    

  </div>



</div>



</div>

      </section>

   
    </Layout>

  );
  
}


export async function getServerSideProps({ query }) {

 query.services = query.services || '8';
 query.active = query.active || '0';
 query.search = query.search || '';
 query.ratingValue = query.ratingValue || '0';
 query.ratingTop = query.ratingTop || 'asc';
 query.offset = query.offset || 0;
 query.limit = query.limit || PER_PAGE;

 if(query.offset < 0 || !query.offset || query.offset == undefined ){
  query.offset = 0;
  console.log("Query ofset -1");
 }else{
  console.log("--Query ofset--",query.offset);
 }

const queryString = qs.stringify(query);
//const queryString = query;

 const {
          data: data,
       }: AxiosResponse<IUserApiResponse> =
          await fetchUsers(queryString);

  return {
    props: data,
  }


}


export default SearchPage;