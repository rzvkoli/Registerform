import React , { useEffect , useState } from 'react';
import PersonalInformation from './components/PersonalInformation';
import ContactInformation from './components/ContactInformationAndAddress';
import BankAccountInformation from './components/BankAccountInformation';
import SendDocuments from './components/SendDocuments';
// import axios from 'axios';
import { BsCheckLg } from "react-icons/bs";
import PrograssLevel from './components/PrograssLevel';

export default function Register() {

    const [showModal, setShowModal] = useState(false);

    const [component , setComponent] = useState(1);

    const [homeOne , setHomeOne] = useState(1);
    const [homeTwo , setHomeTwo] = useState(2);
    const [homeThree , setHomeThree] = useState(3);
    const [homeFour , setHomeFour] = useState(4);

    const [personalInformation , setPersonalInformation] = useState('');
    const [contactInformation , setContactInformation] = useState('');
    const [bankAccountInformation , setBankAccountInformation] = useState('');
    const [sendDocuments , setSendDocuments] = useState('');

    const check = <BsCheckLg className='text-lime-600' />

    var formInformation = {
        personalInformation,
        contactInformation,
        bankAccountInformation,
        sendDocuments,
    }

    const personalForm = (data,component) => {
        setPersonalInformation(data);
        setComponent(component); 
        setHomeOne(check);
    }

    const contactForm = (data,component) => {
        setContactInformation(data);
        setComponent(component);
        setHomeTwo(check);
    }

    const bankAccountForm = (data,component) => {
        setBankAccountInformation(data);
        setComponent(component);
        setHomeThree(check);
    }

    const sendDocumentsForm = (data,component) => {
        setSendDocuments(data);
        setComponent(component);
        setHomeFour(check);
    }

    useEffect ( ( ) => {
        if( personalInformation !== '' &&
            contactInformation !== '' &&
            bankAccountInformation !== '' &&
            sendDocuments !== ''){

                console.log(formInformation);
                setShowModal(true)
                // const baseUrl = 'http://localhost:8000/dataform'
                // axios.post(baseUrl , {
                //     formInformation
                // })
            }
        })

    const show = () => {
        if(component === 1){
            return <PersonalInformation parentCallback={personalForm}/>
        }else if (component === 2){
            return <ContactInformation parentCallback={contactForm} />
        }else if(component === 3){
            return <BankAccountInformation parentCallback={bankAccountForm} />
        }else if(component === 4){
            return <SendDocuments parentCallback={sendDocumentsForm} showModal={showModal} />
        }
    }

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <PrograssLevel
        homeOne={homeOne}
        homeTwo={homeTwo}
        homeThree={homeThree}
        homeFour={homeFour} 
        />
        <div>
            {
                show()
            }
        </div>
    </div>
  );
}
