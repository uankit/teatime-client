import axios from "axios"
import { Movie } from "../types/movie"


export const get = async (): Promise<Movie[]> => {
    const { data } = await axios.get("http://localhost:3000/movies")
    return data
}