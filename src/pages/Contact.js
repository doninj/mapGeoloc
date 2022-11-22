import {useState} from "react";

export function Contact() {

    const [contacts, setContacts] = useState([])
    async function getContact() {
        if ('contacts' in navigator && 'ContactsManager' in window) {
            const props = await navigator.contacts.getProperties()
            const contacts =  await navigator.contacts.select(props, {multiple: true})
            setContacts(contacts)
        }
    }

    return (
        <div>
            {JSON.stringify(contacts)}
            <button onClick={getContact}>Hack</button>
        </div>
    )
}