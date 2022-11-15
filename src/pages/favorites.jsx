import React from "react"
import { json } from "react-router-dom";
import NotFound from "../images/imgNotFound.png"

export const Favorites = () => {

    const [data, setData] = React.useState([])

    const token = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem('user'))

    const userId = user.id;

    React.useEffect(() => {
        fetch(`http://localhost:3000/favorite/${userId}`, {
            method: 'GET',
            headers: { 'x-auth-token': token },
        })
            .then(res => res.json())
            .then(async shows => {
                const show = Promise.all(shows.map(favs => {
                    return fetch(`https://api.tvmaze.com/shows/${favs.showId}`)
                        .then(res => res.json())
                        // .then(fav => {
                        //     setData(prev => [...prev, fav])
                        // })
                        .catch(e => console.log(e))
                }))
                setData(await show)
            })
            .catch(e => console.log(e))
    }, [])

    const handleDelete = (e, id) => {
        e.preventDefault()
            fetch(`http://localhost:3000/favorite/${id}/${userId}`, {
                method: 'DELETE',
                headers: { 'x-auth-token': token }
            })
            .then(res => res.json())
            try {
                alert(`${data.find(f => f.id === id).name} a été retiré de vos favoris !`)
            } catch(err) {
                alert(err.message)
            }
    }

    return (
        <>
            <div>
                <a href="/">Accueil</a>
                {
                    data.map((f, i) =>
                        <div key={i}>
                            <a href={f.id}><img src={f.image.medium || NotFound} /></a>
                            <button onClick={(e) => handleDelete(e, f.id)}>Retirer des favoris</button>
                        </div>
                    )
                }
            </div>
        </>
    )
}