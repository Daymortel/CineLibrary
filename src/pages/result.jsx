import React from "react"
import { useParams } from "react-router-dom"
import NotFound from "../images/imgNotFound.png"

export const Result = () => {
    
    const { id } = useParams()
    const [data, setData] = React.useState({})

    const token = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem('user'))

    const userId = user.id;
    const showId = data.id;

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e))
    }, [])

    const handleAdd = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/favorite`, {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'x-auth-token' : token},
            body: JSON.stringify({showId, userId}),
        })
        .then(res => res.json())
        try {
            alert(`${data.name} a été rajouté à vos favoris !`)
        } catch(err) {
            alert(err.message)
        }
    }

    return (
        <>
            <button onClick={handleAdd}>Ajouter aux favoris</button>
            <img src={data.image?.medium || NotFound} />
            <p>{data.summary}</p>
            <br />
            {data._embedded?.cast.map(c => 
                <div>
                    <h2>{c.person.name}</h2>
                    x
                    <h3>{c.character.name}</h3>
                    <img src={c.person.image?.medium || NotFound} />
                </div>
            )}
        </>
    )
}