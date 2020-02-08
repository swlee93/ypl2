import { getMovies, getMovie, getSuggestions } from "../databases/sampleDB";

export const movies = (_, { rating, limit }) => getMovies(limit, rating)
export const movie = (_, { id }) => getMovie(id)
export const suggestions = (_, { id }) => getSuggestions(id)




