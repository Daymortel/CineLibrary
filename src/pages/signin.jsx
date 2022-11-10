import React from "react";
import { useNavigate } from "react-router-dom";

export const Signin = (props) => {

    const navigate = useNavigate()

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const setMe = props.setMe;
    const form = props.form;
    const isActive = props.isActive;
    const setCheck = props.setCheck;
    const check = props.check;
    const setConnected = props.setConnected;

    const handleSubmit = (e) => {
        e.preventDefault()
        if (check) {
            setCheck(false);
            isActive('');
        }
        fetch('http://localhost:3000/auth/signin', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username, password})
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('jwt', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            Object.keys(data.user).map(user => {
                console.log(user, ':',data.user[user])
            })
            setConnected(true);
            setMe(data.user);
        })

        try {
            alert('Connecté ! Vous allez être redirigé vers la page d\'accueil.')
            navigate('/')
        } catch(err) {
            alert(err.message)
        }
    }

    return (
        <>
            <form className="form" ref={form} onSubmit={handleSubmit}>
                <label>Pseudo: 
                    <input defaultValue={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>Password: 
                    <input type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit" onClick={handleSubmit}>Connexion</button>
            </form>
        </>
    )
}