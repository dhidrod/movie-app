const API_TOKEN = process.env.TMDB_API_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

// Función genérica para hacer las llamadas, para no repetir el header en todas partes
async function fetchFromTMDB(endpoint: string) {
  if (!API_TOKEN) {
    throw new Error("TMDB API token not found");
  }

  const url = `${BASE_URL}/${endpoint}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    // Manejo de errores centralizado
    throw new Error(`Failed to fetch from TMDB: ${res.statusText}`);
  }

  return res.json();
}


/*
    Funciones específicas para cada tipo de dato que queremos obtener.
*/


export async function getPopularMovies() {
  const data = await fetchFromTMDB('movie/popular?language=es-ES');
  return data.results;
}

export async function searchMovies(query: string) {
  const encodedQuery = encodeURIComponent(query);
  const data = await fetchFromTMDB(`search/movie?query=${encodedQuery}&language=es-ES`);
  return data.results;
}

export async function getMovieDetails(id: string) {
  const data = await fetchFromTMDB(`movie/${id}?language=es-ES`);
  return data; // Devolvemos el objeto completo, no .results
}

export async function getActorDetails(actorId: string) {
  const data = await fetchFromTMDB(`person/${actorId}?language=es-ES`);
  return data;
}