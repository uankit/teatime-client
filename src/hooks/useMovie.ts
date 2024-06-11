import { useEffect, useState } from "react";
import { get } from "../services/movies";
import { Movie } from "../types/movie";

export const useMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            let response = await get();
            setMovies(response);
         };
         fetchMovies();
    }, [])

    return { movies }
}