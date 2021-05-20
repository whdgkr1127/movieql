//resolvers 는 Query를 해결하는것이다.
import { getMovies, getById, addMovie, deleteMovie } from "./db"

const resolvers ={
    Query:{
        movies:()=> getMovies(),
        movie:(_,{id})=> getById(id)// { id }는 args.id와 같은것
},
    Mutation: {
        addMovie:(_,{name,score}) => addMovie(name,score),
        deleteMovie: (_,{id}) => deleteMovie(id)//deleteMovie는 Boolean 값이기 때문에 아무것도 물어보지 않는다.
    }

}
export default resolvers
