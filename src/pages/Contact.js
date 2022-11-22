import {useState} from "react";
import {addDoc, collection} from 'firebase/firestore'
import {db} from "../services/firebase";

export function Contact() {

    const [contacts, setContacts] = useState([])

    async function getContact() {
        if ('contacts' in navigator && 'ContactsManager' in window) {
            const props = await navigator.contacts.getProperties()
            const contacts = await navigator.contacts.select(props, {multiple: true})
            setContacts(contacts)
        }
        const userContactRef = collection(db, 'users_contacts/test/contacts')
        addDoc(userContactRef, [{
            name: 'test',
            tel: '07'
        }])
    }

    return (
        <div>
            <button onClick={getContact}>Hack</button>
        </div>
    )
}