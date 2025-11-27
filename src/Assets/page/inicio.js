import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
 
export default function Inicio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Bienvenidos  a <span className="text-cyan-400">GAX</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-300 mb-8">
          Desarrollo web de alan  garin , automatización y soluciones digitales enfocadas en la experiencia del usuario.
        </p>
 
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
          Conoce nuestros servicios :/
        </button>
      </section>
 
      {/* SERVICES SECTION */}
      <section className="px-8 py-16 bg-gray-800/70 backdrop-blur-md rounded-t-3xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          Nuestros Servicios
        </h2>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <FaCode className="text-5xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-400">
              Creamos páginas modernas, rápidas y optimizadas con las mejores tecnologías.
            </p>
          </div>
 
          <div className="bg-gray-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <FaLaptopCode className="text-5xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automatización</h3>
            <p className="text-gray-400">
              Diseñamos sistemas automatizados para optimizar procesos y ahorrar tiempo.
            </p>
          </div>
 
          <div className="bg-gray-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <FaCode className="text-5xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Consultoría</h3>
            <p className="text-gray-400">
              Te ayudamos a mejorar la experiencia digital de tu empresa con soluciones personalizadas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
 