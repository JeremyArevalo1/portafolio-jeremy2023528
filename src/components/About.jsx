import React from 'react';
import { Mail, MapPin, Calendar, Code, Database, Globe, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre mí</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Soy Jeremy Jair Arévalo Gómez, tengo 18 años y soy estudiante de 6º Perito con una fuerte inclinación hacia el desarrollo de software. Mis lenguajes de programación preferidos son Java y JavaScript, y tengo un particular interés en la creación de aplicaciones con React. Me dedico a estudiar y a poner en practica todo lo que aprendo día tras día, y disfruto mucho de todo lo relacionado con las matemáticas. Mi entorno de ejecución de cabecera es Node.js, lo que me permite desarrollar soluciones backend eficientes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">jeremyarevalo.2007@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Guatemala</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700">18 años</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Desarrollo Web</h3>
                    <p className="text-sm text-gray-600">Frontend & Backend</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Bases de Datos</h3>
                    <p className="text-sm text-gray-600">MongoDB, SQL</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Responsive</h3>
                    <p className="text-sm text-gray-600">Mobile First</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Terminal className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">DevOps</h3>
                    <p className="text-sm text-gray-600">Git</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
