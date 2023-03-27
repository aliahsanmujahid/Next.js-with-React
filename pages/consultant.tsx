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
      

      <div className="container  mt-40">
        <div className="grid grid-cols-2">
            <div>
                <img src="../images/Group22.png" alt="" />
            </div>
        </div>
    </div>
      
   
    </Layout>

  );
  
}
