import React , { useState } from 'react';
import Field from './Field';
import Style from './Style';

export default function ContactInformationAndAddress(props) {

  const [email , setEmail] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  const [address , setAddress] = useState('');
  const [postalCode , setPostalCode] = useState('');

  const styleFieldTextDefault = Style.styleFieldTextDefault;
  const styleFieldTextTrue = Style.styleFieldTextTrue;
  const styleFieldTextFalse = Style.styleFieldTextFalse;
  const styleFieldNumberDefault = Style.styleFieldNumberDefault;
  const styleFieldNumberTrue = Style.styleFieldNumberTrue;
  const styleFieldNumberFalse = Style.styleFieldNumberFalse;

  const [emailStatus , setEmailStatus] = useState(styleFieldTextDefault);
  const [phoneNumberStatus , setPhoneNumberStatus] = useState(styleFieldNumberDefault);
  const [addressStatus , setAddressStatus] = useState(styleFieldTextDefault);
  const [postalCodeStatus , setPostalCodeStatus] = useState(styleFieldNumberDefault);


  var contactInformationAddress = {
    email ,
    phoneNumber ,
    address , 
    postalCode ,
  }

  const nextLevel = () => {
    if(email.length === 0){
      setEmailStatus(styleFieldTextFalse)
    }
    if(phoneNumber.length < 10){
      setPhoneNumberStatus(styleFieldNumberFalse)
    }
    if(address.length === 0){
      setAddressStatus(styleFieldTextFalse)
    }
    if(postalCode.length < 10){
      setPostalCodeStatus(styleFieldNumberFalse)
    }
    if( email.length > 0 &&
        phoneNumber.length === 10 &&
        address.length > 0 &&
        postalCode.length === 10){
          props.parentCallback(contactInformationAddress , 3)
        }
  }

  window.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter'){
      nextLevel()
    }
  })

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <p className='text-3xl font-Urbanist uppercase font-black max-sm:text-xl'>Contact information</p>
      <div className='flex flex-row justify-center items-center flex-wrap gap-5 w-6/12 max-sm:w-8/12'>
        <Field
        className={emailStatus}
        type={'email'}
        placeholder={'Email'}
        value={email}
        onChange={(e) => {
          const result = e.target.value.replace(/[^0-9-a-z-.-@]/gi, '');
          if( result.length === 0){
            setEmailStatus(styleFieldTextDefault);
          }else{
            setEmailStatus(styleFieldTextTrue);
          }
          setEmail(result);
        }}
        />
        <Field
        className={phoneNumberStatus}
         type={'text'}
         placeholder={'Phone Number'}
         maxLength={10}
         value={phoneNumber}
         onChange={(e) => {
          const result = e.target.value.replace(/[^0-9]/gi, '');
          if(result.length === 0){
            setPhoneNumberStatus(styleFieldNumberDefault)
          }else if(result.length === 10){
            setPhoneNumberStatus(styleFieldNumberTrue)
          }
          setPhoneNumber(result);
         }}
        />
        <Field
        className={addressStatus}
         type={'text'}
         placeholder={'Address'}
         value={address}
         onChange={(e) => {
          const result = e.target.value.replace(/[^a-z]/gi, '');
          if( result.length === 0){
            setAddressStatus(styleFieldTextDefault);
          }else{
            setAddressStatus(styleFieldTextTrue);
          }
          setAddress(result)
         }}
        />
        <Field
        className={postalCodeStatus}
        type={'text'}
        placeholder={'Postal Code'}
        maxLength={10} 
        value={postalCode}
        onChange={(e) => {
          const result = e.target.value.replace(/[^0-9]/gi, '');
          if( result.length === 0){
            setPostalCodeStatus(styleFieldNumberDefault)
          }else if(result.length === 10){
            setPostalCodeStatus(styleFieldNumberTrue)
          }
          setPostalCode(result)
        }}
        />
      </div>
      <div>
        <button onClick={nextLevel} className='flex flex-row justify-center items-center uppercase shadow border-hidden text-2xl  bg-sky-400 text-white font-Urbanist px-12 py-2 hover:bg-sky-500 max-sm:text-sm' >
          Next
        </button>
      </div>
    </div>
  );
}
