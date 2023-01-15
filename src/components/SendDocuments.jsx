import React , { useEffect , useRef , useState } from 'react';
import UploadDocuments from './UploadDocuments';
import Style from './Style';
import Modal from "react-overlays/Modal";
import Lottie from 'react-lottie-player';
import lottieJson from '../Animation/72462-check-register.json';

export default function SendDocuments(props) {

    const [nationalCardPhoto , setNationalCardPhoto] = useState('');
    const [birthCertificate , setBirthCertificate] = useState('');

    const [fileNameNC , setFileNameNC] = useState('Upload national card')
    const [fileNameBC , setFileNameBC] = useState('Upload birth certificate')

    const stylebtnDefault = Style.stylebtnDefault;
    const stylebtnTrue = Style.stylebtnTrue;
    const stylebtnFalse = Style.stylebtnFalse;

    const [nationalCardPhotoStatus , setNationalCardPhotoStatus] = useState(stylebtnDefault);
    const [certificateStatus , setCertificateStatus] = useState(stylebtnDefault);

    const nationalCardRef = useRef(null);
    const certificateRef = useRef(null);

    const uploadNationalCard = () => {
        nationalCardRef.current.click()
    }
    const uploadCertificate = () => {
        certificateRef.current.click()
    }

    var documents = {
        nationalCardPhoto ,
        birthCertificate ,
    }

    const submitInformation = () => {
        if(nationalCardPhoto === ''){
            setNationalCardPhotoStatus(stylebtnFalse);
        }
        if(birthCertificate === ''){
            setCertificateStatus(stylebtnFalse);
        }
        if( nationalCardPhoto !== '' &&
            birthCertificate !== ''
            ){
                props.parentCallback(documents , 4)
        }
    }

    useEffect ( ( ) => {
        if(nationalCardPhoto !== ''){
            setNationalCardPhotoStatus(stylebtnTrue);
            setFileNameNC(nationalCardPhoto.name);
        }
        if(birthCertificate !== ''){
            setCertificateStatus(stylebtnTrue);
            setFileNameBC(birthCertificate.name);
        }
    } , [nationalCardPhoto , birthCertificate] )

    window.addEventListener('keypress' , (e) => {
        if(e.key === 'Enter'){
            submitInformation()
        }
    })

    const renderBackdrop = (props) => <div className='fixed z-10 top-0 bottom-0 left-0 right-0 bg-white opacity-100' {...props}></div>  

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <p className='text-3xl font-Urbanist uppercase font-black max-sm:text-xl'>Send Documents</p>
        <div className='flex flex-row justify-center items-center flex-wrap gap-5 w-9/12 max-sm:w-9/12'>
            <UploadDocuments
            className='flex flex-col justify-center items-center gap-2 border-4 border-dashed border-sky-300 py-8 px-16 uppercase'
            event={uploadNationalCard} 
            title={fileNameNC} 
            innerRef={nationalCardRef} 
            onChange={(e) => setNationalCardPhoto(e.target.files[0])}
            stylebtn={nationalCardPhotoStatus}
            />
            <UploadDocuments
            className='flex flex-col justify-center items-center gap-2 border-4 border-dashed border-sky-300 py-10 px-16 uppercase'
            event={uploadCertificate}
            title={fileNameBC}
            innerRef={certificateRef}
            onChange={(e) => setBirthCertificate(e.target.files[0])}
            stylebtn={certificateStatus}
            />
        </div>
        <div>
        <button onClick={submitInformation} className='flex flex-row justify-center items-center uppercase shadow border-hidden text-2xl  bg-sky-400 text-white font-Urbanist px-12 py-2 hover:bg-sky-500 max-sm:text-sm' >
        Submit
        </button>
        </div>
        <Modal
        className='fixed top-1/4 left-1/4 w-6/12 h-3/6 z-20 flex flex-row justify-center items-center'
        show={props.showModal}
        // onHide={handleClose}
        renderBackdrop={renderBackdrop}>
            <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 600, height: 600 }}
            />
        </Modal>
    </div>
  );
}
