import React from 'react';
import { Code, Terminal } from 'lucide-react';

export default function Curriculum() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Educación & Experiencia</h2>
          <p className="text-xl text-gray-600">Mi trayectoria académica y profesional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Educación</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Carrera Técnica en Informática</h4>
                <p className="text-blue-600 font-medium">Colegio Fundación Kinal</p>
                <p className="text-gray-600">2023 - 2025</p>
                <p className="text-sm text-gray-600 mt-2">
                  Formación técnica especializada en desarrollo de software, bases de datos y tecnologías web.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Experiencia</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Prácticas Preprofesionales</h4>
                <p className="text-green-600 font-medium">SAMBORO SA</p>
                <p className="text-gray-600">2025 - 2025</p>
                <p className="text-sm text-gray-600 mt-2">
                  Desarrollo de aplicaciones web utilizando React, Node.js y MongoDB.
                  Participación en proyectos reales y colaboración en equipo.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>2 meses</strong> de experiencia práctica en desarrollo web
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
