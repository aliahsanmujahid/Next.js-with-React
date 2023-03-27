import axios from 'axios';
import { API_URL,Review_Limit } from '@/config/index';

var _activities = new Map();

const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${'#######'}`,
    },
});

export const fetchUsers = async (queryString) => {
   // console.log("=============queryString-------------------",queryString);
    var response = _activities.get(queryString);
    if(response){
        console.log("Getting data from catch...");
        return (response);
    }else{

        try {
        var res_data = await api.get(`/api/frontend/common/consultation?${'&'+queryString}`);
        console.log("Setting data into catch...");
        // console.log("==============Data from api--------------",res_data);
        _activities.set(queryString, res_data);
        return res_data;
        }
        catch(e){
             return { data: {
                 error:'404'
               }};        
        }
      
   }

};

export const fetchFaqs = async () => {

     var response = _activities.get('faq');
     if(response){
         console.log("Getting data from catch...");
         return (response);
     }else{


        try {
            var res_data = await api.get(`/api/frontend/common/frequentlyAskedQuestion/all`);
            console.log("Setting data into catch...");
             //console.log("==============Data from api--------------",res_data);
            _activities.set('faq', res_data);
             return res_data;
         }
         catch(e){
            return { data: {
                     error:'404'
                    }};        
         }
        
            
    }
 };



 export const fetchSingleUser = async (query) => {
   //console.log("=============queryString-------------------",query);
   var response = _activities.get(query.slug);
   if(response){
       console.log("Getting data from catch...");
       return (response);
   }else{

       try {
          var res_data = await api.get(`api/frontend/common/consultant/${query.slug}/details`);
        //    console.log("===========props user data============",res_data.data);
           console.log("Setting data into catch...");
           _activities.set(query.slug, res_data);
           return res_data;
        }
        catch(e){
           return { data: {
                    error:'404'
                   }};        
        }
         
  }
};





export const fetchReview = async (query,offset) => {
    //console.log("=============queryString offset-------------------",offset);
    var response = _activities.get("review"+query+''+offset);
    if(response){
        console.log("Getting data from catch...");
        return (response);
    }else{
 
        try {

            var res_data = await api.get(`api/frontend/common/reviewList/${query}?offset=${0}&limit=${5}`);
            console.log("Setting data into catch...");
            _activities.set("review"+query+''+offset, res_data);
            return res_data;
            
         }
         catch(e){
            return { data: {
                     error:'404'
                    }};        
         }
          
   }
 };


