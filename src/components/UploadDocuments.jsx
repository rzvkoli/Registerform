import React from 'react';
import { BsCloudUpload } from "react-icons/bs";

export default function UploadDocuments(props) {
  return (
    <div className={props.className}>
      <BsCloudUpload className='text-4xl max-md:text-2xl'/>
        <button onClick={props.event} className={props.stylebtn}>
          Choose a file to upload
        </button>
        <p className='text-sm font-Urbanist font-extrabold max-md:text-xs'>{props.title}</p>
        <input
        type={'file'}
        accept="image/png , image/jpeg"
        style={{display: 'none'}}
        ref={props.innerRef}
        onChange={props.onChange}
        />
    </div>
  );
}
