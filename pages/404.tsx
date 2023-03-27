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

              
<section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 pt-[60px] md:pt-[130px]">
	<div className="text-[#348739] container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="text-[#348739] mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="font-bold md:text-3xl text-[#348739]">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 font-bold">But dont worry, you can find plenty of other things on our homepage.</p>
			<a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-[#348739] text-white">Back to homepage</a>
		</div>
	</div>
</section>




   
    </Layout>

  );
  
}
