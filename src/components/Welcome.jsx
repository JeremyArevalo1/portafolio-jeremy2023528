import React from 'react';
import { Terminal } from 'lucide-react';

export default function Welcome() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-teal-500 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 text-green-400 text-xs animate-pulse">01001000 01100101 01101100 01101100 01101111</div>
        <div className="absolute top-1/3 right-1/4 text-blue-400 text-xs animate-pulse">01010111 01101111 01110010 01101100 01100100</div>
        <div className="absolute bottom-1/3 left-1/2 text-purple-400 text-xs animate-pulse">01000011 01101111 01100100 01100101</div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
            <Terminal className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Jeremy Arévalo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          "Transformando ideas en código que impacta"
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#proyectos"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Ver Proyectos
          </a>
          <a
            href="/assets/CV/CV Jeremy Arévalo.pdf"
            download
            className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm text-center"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
