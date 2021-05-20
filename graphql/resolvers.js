//resolvers 는 Query를 해결하는것이다.
import { getMovies, getById, addMovie, deleteMovie } from "./db"

const resolvers ={
    Query:{
        movies:(_, { rating, limit})=> getMovies(limit, rating)// _는 그냥 변수명이다. parent ,root 등등 뭐든 적을수 있다. 안쓰면 _로 써도 된다.
    }
}
export default resolvers
