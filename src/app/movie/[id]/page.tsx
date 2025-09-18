import { getMovieDetails } from "@/lib/api";
import { getRatingColor } from "@/lib/utils";


export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movieId = params.id;
  const movie = await getMovieDetails(movieId);
  const rating = Math.round(movie.vote_average * 10);

  return (
    <main className="bg-gray-900 text-white p-8 flex-grow flex flex-col ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster de la película */}
          <div className="md:col-span-1">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Detalles de la película */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <p className="text-gray-400 mb-4">
              {new Date(movie.release_date).getFullYear()} • {movie.runtime} min
            </p>
            <h2 className="text-2xl font-semibold mb-2">Sinopsis</h2>
            <p className="text-gray-300 mb-4">{movie.overview}</p>

            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Géneros</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre: any) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Puntuación</h2>
              <span className={`text-6xl font-bold ${getRatingColor(rating)}`}>
                {rating}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
