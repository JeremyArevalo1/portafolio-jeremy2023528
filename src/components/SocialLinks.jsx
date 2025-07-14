import React from "react";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jeremy-jair-arévalo-gómez-8580b8375/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      description: "Conecta conmigo profesionalmente"
    },
    {
      name: "GitHub",
      url: "https://github.com/JeremyArevalo1",
      icon: Github,
      color: "from-gray-800 to-gray-900",
      description: "Revisa mi código y proyectos"
    },
    {
      name: "Email",
      url: "mailto:jeremyarevalo.2007@gmail.com",
      icon: Mail,
      color: "from-red-500 to-red-600",
      description: "Envíame un mensaje"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Conecta Conmigo</h2>
          <p className="text-xl text-gray-300">¿Interesado en colaborar? ¡Hablemos!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`bg-gradient-to-r ${link.color} rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{link.name}</h3>
                <p className="text-gray-200 text-sm">{link.description}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}