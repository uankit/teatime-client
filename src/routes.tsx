import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieTriviaPage from "./pages/MovieTriviaPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/movie-trivia",
      element: <MovieTriviaPage />,
    },

  ]);