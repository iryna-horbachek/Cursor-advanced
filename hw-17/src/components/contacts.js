import { Fragment } from 'react';
import { useState } from 'react';
import adresses from './adresses';
import Contact from './contact';

function Contacts() {

    const [contacts, setContacts] = useState (adresses);
    const [ search, setSearch ] = useState('');

    let contact = [];
    for(let i = 0; i<contacts.length;i++) {
        const name = (contacts[i].firstName);
        const surname = (contacts[i].lastName);
        const phone = (contacts[i].phone);
        const sex = (contacts[i].gender);
        contact.push(
            <Contact firstName = {name} lastName = {surname} phone = {phone} gender = {sex} key={i}/>
            )
    }

    function handleSearchChange(event) {
        setSearch(event.target.value)
        setContacts(adresses.filter((el) => 
           el.lastName.includes(search)
        ))
    }
    
    return (
        <Fragment>
            <input className='Search' placeholder='Surname' value={search} onChange={(event) => { handleSearchChange(event)}} />
            <div className='Contacts'>
                {contact}
            </div>
        </Fragment>
    )
}

export default Contacts;

    