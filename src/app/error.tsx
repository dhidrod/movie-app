"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      digest: error.digest
    });
  }, [error]);

  return (
    <main className="text-center flex flex-col items-center justify-center flex-grow p-4" role="alert">
      <div className="mb-6 relative w-24 h-24 animate-bounce-slow">
        <Image
          src="/window.svg"
          alt="Icono de error"
          fill
          className="opacity-75"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-yellow-500">
        ¡Ups! Algo salió mal
      </h1>
      <p className="mb-6 text-gray-400 max-w-md">
        Ha ocurrido un error inesperado al cargar los datos. 
        Esto puede deberse a un problema de conexión o a que el servidor no está disponible.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => reset()}
          className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          aria-label="Intentar cargar de nuevo"
        >
          Intentar de nuevo
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-gray-700 text-white font-bold px-6 py-2 rounded-lg hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          aria-label="Volver a la página principal"
        >
          Ir al inicio
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && error.message && (
        <div className="mt-8 p-4 bg-gray-800 rounded-lg max-w-2xl w-full overflow-auto">
          <p className="text-left text-sm font-mono text-red-400">
            Error: {error.message}
          </p>
        </div>
      )}
    </main>
  );
}