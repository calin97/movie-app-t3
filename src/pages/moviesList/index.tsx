import { MovieItem } from "~/components/movieItem";
import { api } from "~/utils/api";

export default function HomePage() {
  const { data: movies, isFetched, isLoading } = api.movies.getAll.useQuery();
  console.log(movies);

  return isFetched && !isLoading ? (
    <>
      <div className="px-48">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  ) : (
    <>loading</>
  );
}
