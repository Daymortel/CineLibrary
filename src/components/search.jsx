export const Search = ({ input, setInput, setLibrary }) => {

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(res => res.json())
            .then(data => setLibrary(data))
            .catch(err => console.log(err))
    }

    return (
        <form>
            <input placeholder="Rechercher" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}><i className="bi bi-search"></i></button>
        </form>
    )
}