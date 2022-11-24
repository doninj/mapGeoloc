import {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from "../services/firebase";
import {Link} from "react-router-dom";

export function LoginPage() {
    const [login, setLogin] = useState({email: '', password: ''})
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'></label>
                <input value={login.email} onChange={onInputChange} name="email" />
                <label htmlFor='password'></label>
                <input value={login.password} onChange={onInputChange} name="password" />
                <button type="submit">Submit</button>
            </form>
            <Link to="/contact">Hack des contacts</Link>
        </div>
    )

    async function handleSubmit (event) {
        event.preventDefault();
        const auth = getAuth(app);
        const signIn = await signInWithEmailAndPassword(auth, login.email, login.password)
        console.log(signIn)
        localStorage.setItem('userId', signIn.user.uid)
    }
    function onInputChange(event) {
        const { name } = event.currentTarget
        setLogin((login) => ({
            ...login,
            [name]: event.target.value
        }))
    }
}