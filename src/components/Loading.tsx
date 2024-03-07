import React from "react";

const Loading = () => {
  return (
    <div className="py-6">
      <h3 className="mb-2 text-seccondary text-xl">Cargando...</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 h-24 md:h-32 lg:h-40">
        <div className="bg-gray-600 rounded-lg animate-pulse"></div>
        <div className="bg-gray-600 rounded-lg animate-pulse"></div>
        <div className="bg-gray-600 rounded-lg hidden md:block animate-pulse"></div>
        <div className="bg-gray-600 rounded-lg hidden lg:block animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
