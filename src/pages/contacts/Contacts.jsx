import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Contact from './Contact';
import ContactModal from '../../components/modals/ContactModal';
import {AiOutlineUserAdd} from 'react-icons/ai'

const URL = "http://localhost:5000/contacts";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}

const Contacts = () => {
  const [contacts, setContacts] = useState();

  useEffect(()=>{
    fetchHandler().then((data)=>setContacts(data.contacts))
  }, [] );

  return (
    <div className='contacts-page py-3 min-h-screen'>

      <div className="flex items-center justify-between px-2 py-3 border rounded mb-3">
        <div>
          <strong>Contacts</strong> <span className='text-muted'>Managa contacts.</span>
        </div>
        <div>
          <button className='btn btn-success d-flex'><AiOutlineUserAdd /> New</button>
        </div>
      </div>

      <ul>
        {contacts && contacts.map((contact, i) => (
            <li key={i}>
              <Contact contact={contact}/>
            </li>
        ))}
      </ul>

      {/* <ContactModal /> */}
    </div>
  )
}

export default Contacts