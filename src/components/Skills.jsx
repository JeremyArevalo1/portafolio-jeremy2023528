import React from 'react';

export default function Skills() {
  const skills = [
    { name: "React", level: 80, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 70, color: "from-green-500 to-emerald-500" },
    { name: "MongoDB", level: 65, color: "from-green-600 to-teal-600" },
    { name: "HTML/CSS", level: 85, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 75, color: "from-yellow-500 to-orange-500" },
    { name: "Git", level: 70, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades Técnicas</h2>
          <p className="text-xl text-gray-600">Tecnologías que domino y utilizo en mis proyectos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}