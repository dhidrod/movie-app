export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-500 py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} MovieApp. Creado por Daniel Hidalgo Rodríguez.</p>
        <a 
          href="https://github.com/dhidrod/movie-app"
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          Ver el código en GitHub
        </a>
      </div>
    </footer>
  );
}