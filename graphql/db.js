let movies = [
    {
        id:1,
        name: "old Boy",
        score:1
    },
    {
        id:2,
        name: "Civil War",
        score:8
    },
    {
        id:3,
        name: "spider-Man",
        score:99
    },
    {
        id:4,
        name: "Logan",
        score:2
    }
]

export const getMovies = () => movies;

export const getById= id =>{
    const filteredMovies = movies.filter(movie => movie.id === id) 
    return filteredMovies[0]
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true
    }else{
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie) 
    return newMovie
}