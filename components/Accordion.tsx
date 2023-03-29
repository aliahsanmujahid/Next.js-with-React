import Image from 'next/image'
import React, { useEffect, useState } from "react";
import {
  IFaq,
  IFaqApi
} from '../models/Faq';

interface UserProps {
  values: IFaq[]
};


const Accordion = ({ values } : UserProps) => {

  const [imageError, setImageError] = useState(false);


    return (
      <div id={"accordionExample"+values[0]?.id}>

{values?.map((item , index) => 
<div key={index}
className="rounded mb-2 border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
<h2 className="mb-0" id="hhh">
  <button
    className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
    type="button"
    data-te-collapse-init
    data-te-collapse-collapsed
    data-te-target={"#ccc"+item.id}
    aria-expanded="false"
    aria-controls={"ccc"+item.id}
    >
    {item.question}
    <span
          className="ml-auto shrink-0 rotate-[45deg] fill-[#336dec] transition-transform duration-600 ease-in-out 
          group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0
           group-[[data-te-collapse-collapsed]]:fill-[#ffffff] motion-reduce:transition-none dark:fill-white
           dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <i className="fa-sharp fa-solid fa-plus"></i>
        </span>
  </button>
</h2>
<div
  id={"ccc"+item.id}
  className="!visible hidden"
  data-te-collapse-item
  aria-labelledby="hhh"
  data-te-parent={"#accordionExample"+values[0]?.id}
  >
  <div className="py-4 px-5 text-left">
    <strong> {item.answer}</strong>

    <div className="filterimage w-[140px] md:shrink-0 mb-2 sm:mb-0">


              {
                item.answer_image &&
                <Image
                    src={ imageError ? "/images/profile.png" : 'https://land-consultancy.gsmcltd.com/'+item.answer_image }
                     width={180}
                     height={100}
                     alt={'img'}
                     onLoadingComplete={(result) => {
                         if (result.naturalWidth === 0) setImageError(true)
                     }}
                     onError={(event) => setImageError(true)}
                     onEmptied={() => setImageError(true)}
                />
              }
              



</div>    
  </div>
</div>
</div>
 )}
</div>

    );
}

export default Accordion;