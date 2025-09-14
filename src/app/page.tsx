// src/app/page.tsx

async function getPopularMovies() {
  // Leemos el TOKEN del archivo .env.local
  const apiToken = process.env.TMDB_API_TOKEN;
  if (!apiToken) {
    throw new Error("TMDB API token not found");
  }

  const url = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Este es el formato correcto para el token v4
      Authorization: `Bearer ${apiToken}` 
    }
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    // Si hay un error, lo mostramos en la consola del servidor para depurar
    const errorBody = await res.text();
    console.error("Error fetching movies:", res.status, errorBody);
    throw new Error('Failed to fetch movies');
  }

  const data = await res.json();
  return data.results;
}


// El resto del componente se queda igual...
export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Películas Populares</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie: any) => (
          <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden group">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h2 className="font-semibold truncate" title={movie.title}>{movie.title}</h2>
              <p className="text-sm text-gray-400">{movie.release_date.substring(0, 4)}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}