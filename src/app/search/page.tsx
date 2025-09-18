import MovieCard from "@/components/movie/MovieCard";
import { searchMovies } from "@/lib/api";
import { Movie } from "@/lib/types";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { s: string };
}) {
  const searchTerm = searchParams.s;

  if (!searchTerm) {
    return (
      <main className="bg-gray-900 text-white p-8 flex-grow flex flex-col">
        <h1 className="text-2xl text-center">
          Por favor, ingresa un término de búsqueda
        </h1>
      </main>
    );
  }

  const movies = await searchMovies(searchTerm);
  const decodedSearchTerm = decodeURIComponent(searchTerm);

  return (
    <main className="bg-gray-900 text-white p-8 flex-grow flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">
        Resultados para: {decodedSearchTerm}
      </h1>

      {movies.length === 0 ? (
        <p className="text-center text-xl">No se encontraron películas</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
