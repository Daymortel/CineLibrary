import React from "react"
import NotFound from "../images/imgNotFound.png"

export const Favorites = (show) => {

    const [data, setData] = React.useState([])

    const token = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem('user'))

    const userId = user.id;

    React.useEffect(() => {
        fetch(`http://localhost:3000/favorite/${userId}`, {
            method: 'GET',
            headers: {'x-auth-token' : token},
        })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(e => console.log(e))
    }, [])

    return(
        <>
            <div>
                <a href="/">Accueil</a>
                {
                    data.map(f => 
                        <a href={show.id}><img src={show.image.medium || NotFound} /></a>
                    )
                }
            </div>
        </>
    )
}