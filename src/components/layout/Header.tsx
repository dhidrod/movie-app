import Link from 'next/link';
import SearchBar from '../ui/SearchBar';

export default function Header() {
  return (
    <header className="bg-gray-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors">
            MovieApp
          </h1>
        </Link>
        {/* Futuro espacio para una barra de búsqueda o enlaces de navegación */}
        <nav>
          <SearchBar />
        </nav>
      </div>
    </header>
  );
}