import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

export default function ProjectsGallery() {
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: '/assets/image/cap1.png',
      title: 'Videntia',
      description: 'Esta aplicación fue un proyecto escolar en el que colaboré con compañeros. Se centraba en la implementación de inteligencia artificial y ofrecía consejos sobre cómo mantenerse seguro en internet.',
      github: 'https://github.com/JeremyArevalo1/ExpoKinal.git'
    },
    {
      id: 2,
      image: '/assets/image/cap2.png',
      title: 'Gestor de Hoteles',
      description: 'Este proyecto grupal, desarrollado con compañeros del colegio, se enfoca en la gestión y reserva de hoteles. Trabajamos tanto en el frontend como en el backend de la aplicación.',
      github: 'https://github.com/JeremyArevalo1/Hoteles.git'
    },
    {
      id: 3,
      image: '/assets/image/cap3.png',
      title: 'Blog de Aprendizaje',
      description: 'Esta aplicación permite a los usuarios hacer comentarios en las publicaciones. Fue desarrollada con React, abarcando tanto el frontend como el backend, y los comentarios se guardan en MongoDB.',
      github: 'https://github.com/JeremyArevalo1/Blogdeaprendizaje.git'
    },
    {
      id: 4,
      image: '/assets/image/cap4.png',
      title: 'Gestor de Opiniones',
      description: 'Esta aplicación permite crear publicaciones y añadir comentarios. Se trabajó únicamente en el backend, y toda la información se almacena en la base de datos MongoDB.',
      github: 'https://github.com/JeremyArevalo1/Gestor-de-opiniones.git'
    },
    {
      id: 5,
      image: '/assets/image/cap5.png',
      title: 'Venta Online',
      description: 'Esta aplicación es solo de backend y permite crear productos, categorías y gestionar un carrito de compras. Es un proyecto más complejo y todos los datos se guardan en la base de datos MongoDB.',
      github: 'https://github.com/JeremyArevalo1/venta-online-PB.git'
    },
    {
      id: 6,
      image: '/assets/image/cap6.png',
      title: 'Coperex',
      description: 'Esta aplicación, desarrollada solo en backend, realiza la gestión de empresas. Muestra los diferentes niveles de impacto y años de experiencia, y además crea un documento en Excel que lista todas las empresas añadidas con sus clientes. Los datos se almacenan en MongoDB.',
      github: 'https://github.com/JeremyArevalo1/Analisis-de-Caso-COPEREX.git'
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Galería de Proyectos</h2>
          <p className="text-xl text-gray-300">Capturas de pantalla de mis trabajos y colaboraciones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-1 cursor-pointer"
              onClick={() => setModalProject(project)}
            >
              <div className="bg-gray-800 rounded-2xl h-48 overflow-hidden group-hover:bg-gray-700 transition-colors duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/80 p-4 overflow-y-auto">
          <div className="relative w-full max-w-7xl max-h-screen">
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 shadow-lg transition-all"
              aria-label="Cerrar"
            >
              <XCircle size={30} className="text-red-400 hover:text-red-500 transition" />
            </button>

            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full max-h-[95vh] object-contain rounded-xl border border-gray-700 shadow-2xl"
            />


            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold">{modalProject.title}</h3>
              <p className="text-gray-300">{modalProject.description}</p>

              {modalProject.github && (
                <div className="mt-4">
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-400 rounded-lg text-sm font-medium transition"
                  >
                    Ver en GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
