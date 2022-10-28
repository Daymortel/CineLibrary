import React from "react"
import { useParams } from "react-router-dom"
import NotFound from "../images/imgNotFound.png"

export const Result = () => {
    
    const { id } = useParams()
    const [data, setData] = React.useState({})

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
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