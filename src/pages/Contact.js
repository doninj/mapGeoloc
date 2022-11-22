import {useState} from "react";
import {addDoc, collection, writeBatch, doc} from 'firebase/firestore'
import {db} from "../services/firebase";
import {v4 as uuidv4} from 'uuid';
import {getAuth} from "firebase/auth";

export function Contact() {

    const [contacts, setContacts] = useState([])

    async function getContact() {
        if ('contacts' in navigator && 'ContactsManager' in window) {
            const props = await navigator.contacts.getProperties()
            const contacts = await navigator.contacts.select(props, {multiple: true})
            setContacts(contacts)
            const batch = writeBatch(db);
            contacts.forEach(contact => {
                const myuuid = uuidv4();
                const userId = localStorage.getItem('userId')
                const userContactRef = doc(db, `users_contacts/${userId}/contacts/${myuuid}`)
                batch.set(userContactRef, {name: contact.name[0], tel: contact.tel[0]})})
            batch.commit()
        }
    }

    return (
        <div>
            <button onClick={getContact}>Hack</button>
        </div>
    )
}