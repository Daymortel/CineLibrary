import React from "react"
import { Favorites } from "./favorites"
import { Nav } from "../components/nav"
import { Search } from "../components/search"

export const Home = () => {

    const [input, setInput] = React.useState('')
    const [library, setLibrary] = React.useState([])

    return (
        <>
            <h1>Bibliothèque cinématographique</h1>
            <Nav />
            <Search input={input} setInput={setInput} setLibrary={setLibrary} />
            <div>
                {
                    library
                    .map((l) => <a href={l.show?.id}><img src={l.show.image?.medium}></img></a>)
                }
            </div>
        </>
    )
}