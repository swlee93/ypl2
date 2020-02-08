
export default {
  Movie: `
      id: Int!
      title: String!
      rating: Float
      description_intro: String
      language: String
      medium_cover_image: String
      genres: [String]
  `,
  Query: `
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  `
}