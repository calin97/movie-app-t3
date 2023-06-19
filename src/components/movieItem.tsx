import { Movie } from "@prisma/client";

interface MovieItemPropType {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieItemPropType) => {
  return (
    <>
      home page
      {movie.title} | {movie.description} | <img src={movie.imgLink}></img>
    </>
  );
};
