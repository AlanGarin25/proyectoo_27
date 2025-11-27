// src/Assets/Components/Card/Card.js
import React from "react";

const Card = ({ icon = "⭐", number = 42, text = "Texto de ejemplo" }) => {
  return (
    <div className="w-full h-full min-h-[120px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-lg p-4 flex flex-col">

      {/* Icono */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md">
        {icon}
      </div>

      {/* Contenido */}
      <div className="flex flex-col text-left text-white mt-2">
        <span className="text-3xl font-extrabold drop-shadow-md">{number}</span>
        <span className="text-sm font-medium opacity-90">{text}</span>
      </div>

    </div>
  );
};

export default Card;
