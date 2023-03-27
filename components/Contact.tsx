
import React, { useEffect, useState } from "react";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import Submit from "@/components/form/Submit";
import { useLang } from "@/hooks";
import ContactProps from '@/models/Contact';
import { validate } from "@/utils/helper";





const Contact = ( {vari} ) => {

    const { LangInfo } = useLang();
    const { lang } = LangInfo;
    
    const [contacInfo, setcontacInfo] = useState<ContactProps>({
       name: "",
       phone: "",
       question: ""
    });

    const [formErrors, setFormErrors] = useState<ContactProps>({} as ContactProps);

    const handleChange = ({ target }) => {

       const { value, name } = target;
       setcontacInfo({ ...contacInfo, [name]: value });

    };

const handleSubmit = async (e) => {

    e.preventDefault();
    setFormErrors(validate(contacInfo));

  };
  
    return (
        
        <div className= { vari === 1 ? "contact":"contact2"}>
             
            <div className="py-8 text-center">
                <div className={ vari === 1 ? "text-white":"text-gray"}>

                         {lang === 'eng' ? (
                            <>
                             <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 font-semibold">
                             Land Inquiries
                              </h4>
                              <span>Apply for land related services</span>
                           
                            </>
                        ) : (
                            <>
                              <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 font-semibold">
                              ভূমি সংক্রান্ত জিজ্ঞাসা
                              </h4>
                              <span>ভূমি সংক্রান্ত সেবার জন্য আবেদন করুন</span>
                            </>
                        )}

            </div>

        </div>

        <div className="contackform mb-10 m-auto">


            <form  onSubmit={handleSubmit} >
            
            <FormInput
                value={contacInfo.name}
                onChange={handleChange}
                label = { lang === "eng" ? "Your Name" : "আপনার নাম "}
                placeholder = { lang === "eng" ? "Your Name" : "আপনার নাম "}
                name="name"
            />
             <div className="validation">
               <span>{formErrors.name}</span>
             </div>

            <FormInput
                value={contacInfo.phone}
                onChange={handleChange}
                label = { lang === "eng" ? "Your Phone Number" : "আপনার ফোন নম্বর"}
                placeholder = { lang === "eng" ? "Your Phone Number" : "আপনার ফোন নম্বর"}
                name="phone"
            />
            <div className="validation">
               <span>{formErrors.phone}</span>
             </div>

             <FormTextarea
                value={contacInfo.question}
                onChange={handleChange}
                label = { lang === "eng" ? "Your Question" : "আপনার প্রশ্ন"}
                placeholder = { lang === "eng" ? "Your Question" : "আপনার প্রশ্ন"}
                name="question"
            />
            
            <div className="validation">
               <span>{formErrors.question}</span>
             </div>


            <Submit value="Submit Form" />

            </form>





        </div>






    </div>
        
    );
}

export default Contact;