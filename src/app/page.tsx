import { getPopularMovies } from "@/lib/api";
import MovieCard from "@/components/movie/MovieCard";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="bg-gray-900 text-white p-8 flex-grow flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">
        Películas Populares
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
