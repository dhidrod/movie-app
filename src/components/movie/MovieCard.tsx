import Link from 'next/link';

// Definimos con TypeScript qué "props" (propiedades) va a recibir este componente.
// Espera recibir un objeto "movie" que tiene al menos estas 4 cosas.
type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
};

// Función que recibe las props y devuelve JSX.
export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} key={movie.id}>
      <div className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4">
          <h2 className="font-semibold truncate" title={movie.title}>{movie.title}</h2>
          {/* Añadimos una comprobación por si la fecha no existe */}
          <p className="text-sm text-gray-400">{movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</p>
        </div>
      </div>
    </Link>
  );
}