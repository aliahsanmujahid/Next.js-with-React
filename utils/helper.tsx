import ContactProps from '../models/Contact';

export const validate = (values) => {

  const errors:ContactProps = {
      name:'',
      phone:'',
      question:''
  };
  
  if (!values.name) {
    errors.name = "name is required!";
  }
  if (!values.phone) {
      errors.phone = "phone is required!";
  }
  if (!values.question) {
      errors.question = "question is required!";
  }

  console.log("after error",errors);
  return errors;
};
