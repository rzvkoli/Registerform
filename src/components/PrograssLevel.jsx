import React from 'react';

export default function PrograssLevel(props) {
  return (
    <div className='flex flex-col justify-center items-center  w-6/12 max-sm:w-8/12'>
    <div className='absolute top-26 w-5/12 h-px bg-slate-300 z-0'></div>
        <div className='flex flex-row justify-between items-center w-10/12'>
        <div className='text-xl flex flex-row justify-center items-center w-12 h-12 font-GillSans bg-slate-100 z-10'>
                {props.homeOne}
        </div>
        <div className='text-xl flex flex-row justify-center items-center w-12 h-12 font-GillSans bg-slate-100 z-10'>
                {props.homeTwo}
        </div>
        <div className='text-xl flex flex-row justify-center items-center w-12 h-12 font-GillSans bg-slate-100 z-10'>
                {props.homeThree}
        </div>
        <div className='text-xl flex flex-row justify-center items-center w-12 h-12 font-GillSans bg-slate-100 z-10'>
                {props.homeFour}
        </div>
    </div>
</div>
  );
}
