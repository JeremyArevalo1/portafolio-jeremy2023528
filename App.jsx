import React from 'react';
import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

import Welcome from './src/components/Welcome';
import About from './src/components/About';
import Skills from './src/components/Skills';
import Curriculum from './src/components/Curriculum';
import ProjectsGallery from './src/components/ProyectsGalery';
import SocialLinks from './src/components/SocialLinks';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Jeremy</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre mí</a>
              <a href="#habilidades" className="text-gray-700 hover:text-blue-600 transition-colors">Habilidades</a>
              <a href="#curriculum" className="text-gray-700 hover:text-blue-600 transition-colors">curriculum</a>
              <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition-colors">Proyectos</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <a href="#inicio" className="block py-2 text-gray-700 hover:text-blue-600">Inicio</a>
              <a href="#sobre-mi" className="block py-2 text-gray-700 hover:text-blue-600">Sobre mí</a>
              <a href="#habilidades" className="block py-2 text-gray-700 hover:text-blue-600">Habilidades</a>
              <a href="#curriculum" className="block py-2 text-gray-700 hover:text-blue-600">curriculum</a>
              <a href="#proyectos" className="block py-2 text-gray-700 hover:text-blue-600">Proyectos</a>
              <a href="#contacto" className="block py-2 text-gray-700 hover:text-blue-600">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <div id="inicio">
          <Welcome />
        </div>

        <div id="sobre-mi">
          <About />
        </div>

        <div id="habilidades">
          <Skills />
        </div>

        <div id="curriculum">
          <Curriculum />
        </div>

        <div id="proyectos">
          <ProjectsGallery />
        </div>

        <div id="contacto">
          <SocialLinks />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Jeremy Arévalo. Desarrollado con React y Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}