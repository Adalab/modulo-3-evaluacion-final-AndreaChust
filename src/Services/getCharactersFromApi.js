const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            const parsedCharacters = data.results.map((character) => {
                return {
                    urlImage: character.image,
                    name: character.name,
                    species: character.species,
                    episode: character.episode.length,
                    origin: character.origin.name,
                    status: character.status,
                    id: character.id
                }
            })
            return parsedCharacters;
        })
}

export default getCharactersFromApi