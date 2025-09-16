import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-yellow-400 hover:text-yellow-500 transition-colors">
            MovieApp
          </h1>
        </Link>
        {/* Futuro espacio para una barra de búsqueda o enlaces de navegación */}
        <nav>
          {/* <p>Próximamente: Búsqueda...</p> */}
        </nav>
      </div>
    </header>
  );
}