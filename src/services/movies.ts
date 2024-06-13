import axios from "axios"
import { Movie } from "../types/movie"


export const get = async (): Promise<Movie[]> => {
    const { data } = await axios.get("https://teatime-server-f4587f8da1de.herokuapp.com/movies")
    return data
}