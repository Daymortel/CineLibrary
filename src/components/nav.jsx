import React from "react";
import { useNavigate } from "react-router-dom";

export const Nav = ({name}) => {

    const navigate = useNavigate()

    const [check, setCheck] = React.useState(false);
    const [connected, setConnected] = React.useState(false);
    const [active, isActive] = React.useState('');

    const token = localStorage.getItem('jwt');

    const handleButton = () => {
        if (check) {
            setCheck(false);
            isActive('');
        } else {
            setCheck(true);
            isActive(' active');
        }
    }

    const user = JSON.parse(localStorage.getItem('user'))

    React.useEffect(() => {
        localStorage.getItem('jwt') ? setConnected(true) : setConnected(false)
    }, [])

    const disconnect = () => {
        navigate('/');
        window.location.reload(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
    }

    return(
        <div className="navbar-top">
        {
            connected ?
            <div>
                <button><a href="/signup">Inscription</a></button>
                {user?.user_group == 'student' && <button className="connect" onClick={() => navigate('/profil')}>Profil</button>}
                <button onClick={disconnect}>Déconnexion</button>
                <button><a href="/favorites">Favoris</a></button>
            </div>
            :
            <div>
                <button><a href="/signup">Inscription</a></button>
                <button onClick={handleButton}><a href="/signin">Connection</a></button>
            </div>
        }
        {
            check && <Connect form={form} setConnected={setConnected} isActive={isActive} setCheck={setCheck} check={check} setMe={setMe}/>
        }
      </div>
    )
}