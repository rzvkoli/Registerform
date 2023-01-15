import React , { useState } from 'react';
import Field from './Field';
import Style from './Style';

export default function BankAccountInformation(props) {

  const [shabaNumber , setShabaNumber] = useState('');
  const [bankAccountHolder ,  setBankAccountHolder] = useState('');

  const styleFieldTextDefault = Style.styleFieldTextDefault;
  const styleFieldTextTrue = Style.styleFieldTextTrue;
  const styleFieldTextFalse = Style.styleFieldTextFalse;
  const styleFieldNumberDefault = Style.styleFieldNumberDefault;
  const styleFieldNumberTrue = Style.styleFieldNumberTrue;
  const styleFieldNumberFalse = Style.styleFieldNumberFalse;

  const [shabaNumberStatus , setShabaNumberStatus] = useState(styleFieldNumberDefault);
  const [bankAccountHolderStatus ,  setBankAccountHolderStatus] = useState(styleFieldTextDefault);

  var bankAccountInformation = {
    shabaNumber ,
    bankAccountHolder
  }

  const nextLevel = () => {
    if(shabaNumber.length < 18){
      setShabaNumberStatus(styleFieldNumberFalse)
    }
    if(bankAccountHolder.length === 0){
      setBankAccountHolderStatus(styleFieldTextFalse)
    }
    if( shabaNumber.length === 18 &&
        bankAccountHolder.length > 0 ){
        props.parentCallback(bankAccountInformation , 4)
    }
  }

  window.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter'){
      nextLevel()
    }
  })

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <p className='text-3xl font-Urbanist uppercase font-black max-sm:text-xl'>Bank Account information</p>
      <div className='flex flex-col justify-center items-center gap-5'>
      <Field
        className={shabaNumberStatus}
        type={'text'}
        placeholder={'Shaba Number'}
        maxLength={18}
        value={shabaNumber}
        onChange={(e) => {
          const result = e.target.value.replace(/\D/g, '');
          if(result.length < 18){
            setShabaNumberStatus(styleFieldNumberDefault);
          }else{
            setShabaNumberStatus(styleFieldNumberTrue);
          }
          setShabaNumber(result)
        }}
        />
        <Field
        className={bankAccountHolderStatus}
        type={'text'}
        placeholder={'Bank AccountHolder'}
        value={bankAccountHolder}
        onChange={(e) => {
          const result = e.target.value.replace(/[^a-z-آ-ه]/gi, '');
          if(result.length === 0){
            setBankAccountHolderStatus(styleFieldTextDefault);
          }else{
            setBankAccountHolderStatus(styleFieldTextTrue);
          }
          setBankAccountHolder(result);
        }}
        />
      </div>
      <div>
        <button onClick={nextLevel} className='flex flex-row justify-center items-center uppercase shadow border-hidden text-2xl  bg-sky-400 text-white font-Urbanist px-12 py-2 hover:bg-sky-500 max-sm:text-sm'>
            Next
        </button>
      </div>
    </div>
  );
}
