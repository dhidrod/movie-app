"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [busqueda, setBusqueda] = useState("");
  const router = useRouter();

  const sanitizeInput = (str: string) => {
    return str.replace(/[^\w\s]/gi, "").substring(0, 100).trim();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sanitizedSearch = sanitizeInput(busqueda);

    // Verifica si la búsqueda está vacía después de sanitizar
    if (!sanitizedSearch) {
      return; // No hace nada si está vacía
    }

    const encodedSearch = encodeURIComponent(sanitizedSearch);
    router.push(`/search?s=${encodedSearch}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        name="s"
        placeholder="Buscar..."
        id="search"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        maxLength={100}
        pattern="[A-Za-z0-9\s]+"
        required
        minLength={1}
        className="search-input bg-gray-600 text-white px-5 py-2 rounded-lg"
      />
      <button
        type="submit"
        disabled={!busqueda.trim()}
        className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg 
                 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Buscar
      </button>
    </form>
  );
}
