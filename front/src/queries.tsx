import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    devices(stime: 0) {
      id, name
    
    }  
  }
`;
// tags, owner, latitude, longitude, tags, created, updated, active, alert_enabled, alert_rule
export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
