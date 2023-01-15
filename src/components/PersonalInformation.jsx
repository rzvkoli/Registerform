import React , { useState } from 'react';
import  Field from './Field';
import MaskedInput from 'react-maskedinput';
import Style from './Style';

export default function PersonalInformation(props) {

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [nationalCode , setNationalCode] = useState('');
    const [dateBirth , setDateBirth] = useState('');

    const styleFieldTextDefault = Style.styleFieldTextDefault;
    const styleFieldTextTrue = Style.styleFieldTextTrue;
    const styleFieldTextFalse = Style.styleFieldTextFalse;
    const styleFieldNumberDefault = Style.styleFieldNumberDefault;
    const styleFieldNumberTrue = Style.styleFieldNumberTrue;
    const styleFieldNumberFalse = Style.styleFieldNumberFalse;

    const [firstNameStatus , setFirstNameStatus] = useState(styleFieldTextDefault);
    const [lastNameStatus , setLastNameStatus] = useState(styleFieldTextDefault);
    const [nationalCodeStatus , setnationalCodeStatus] = useState(styleFieldNumberDefault);
    const [dateBirthStatus , setDateBirthStatus] = useState(styleFieldNumberDefault);

    var personalInformation = {
        firstName ,
        lastName ,
        nationalCode ,
        dateBirth ,
    }
    
    const nextLevel = () => {
        if(firstName.length === 0){
            setFirstNameStatus(styleFieldTextFalse);  
        }
        if(lastName.length === 0){
            setLastNameStatus(styleFieldTextFalse);
        }
        if(nationalCode.length < 10){
            setnationalCodeStatus(styleFieldNumberFalse);
        }
        if(dateBirth.length < 8){
            setDateBirthStatus(styleFieldNumberFalse);
        }
        if( firstName.length > 0 &&
            lastName.length > 0 &&
            nationalCode.length === 10 &&
            dateBirth.length === 8 ){
                props.parentCallback(personalInformation , 2)
        }
    }

    window.addEventListener('keypress' , (e) => {
        if(e.key === 'Enter'){
            nextLevel()
        }
    })

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <p className='text-3xl font-Urbanist uppercase font-black max-sm:text-xl'>Personal information</p>
        <div className='flex flex-row justify-center items-center flex-wrap gap-5 w-6/12 max-sm:w-8/12'>
                <Field
                className={firstNameStatus}
                placeholder='First Name'
                type={'text'}
                value={firstName}
                onChange={(e) => {
                    const result = e.target.value.replace(/[^a-z]/gi, '');
                    if( result.length === 0){
                        setFirstNameStatus(styleFieldTextDefault)
                    }else{
                        setFirstNameStatus(styleFieldTextTrue);
                    }
                    setFirstName(result);
                }}
                />
                <Field
                className={lastNameStatus}
                placeholder={'Last Name'}
                type={'text'}
                value={lastName}
                onChange={(e) => {
                    const result = e.target.value.replace(/[^a-z]/gi, '');
                    if( result.length === 0){
                        setLastNameStatus(styleFieldTextDefault);
                    }else{
                        setLastNameStatus(styleFieldTextTrue);
                    }
                    setLastName(result);
                }}
                />
                <Field
                className={nationalCodeStatus}
                placeholder={'National Code'}
                type={'text'}
                maxLength={10}
                value={nationalCode}
                onChange={(e) => {
                    const result = e.target.value.replace(/\D/g, '');
                    if(result.length === 0){
                        setnationalCodeStatus(styleFieldNumberDefault)
                    }else if(result.length === 10){
                        setnationalCodeStatus(styleFieldNumberTrue);
                    }
                    setNationalCode(result);
                }}
                />
                <MaskedInput
                className={dateBirthStatus}
                mask="1111/11/11"
                placeholder="Date Birth"
                value={dateBirth}
                onChange={(e) => {
                const result = e.target.value.replace(/\D/g, '');
                if( result.length === 0){
                    setDateBirthStatus(styleFieldNumberDefault)
                }else if(result.length === 8){
                    setDateBirthStatus(styleFieldNumberTrue);
                }
                setDateBirth(result);
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
