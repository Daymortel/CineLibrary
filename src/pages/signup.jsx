import React from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const navigate = useNavigate()

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username, email, password}),
        })
        .then(res => console.log(res))
        try {
            alert('Compte créé ! Vous allez être redirigé vers la page de connexion.')
            navigate('/signin')
        } catch(err) {
            alert(err.message)
        }
    }

    return (
        <>
            <form>
                <label>Username: 
                    <input defaultValue={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>Email: 
                    <input type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>Password: 
                    <input type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit" onClick={handleSubmit}>Inscription</button>
            </form>
        </>
    )
}