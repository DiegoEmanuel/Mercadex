'use client';

import React, { useEffect, useState } from 'react';

export function FooterSimples() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
//essa é uma função que atualiza o horário a cada segundo
//Sem o useEffect, o horário ficaria parado, porque o React não saberia que precisa atualizar o componente.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <footer className="text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mercadex. Todos os direitos reservados. Feito por Diego Emanuel :)
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Horário atual: {currentTime}
          </p>
        </div>
      </div>
    </footer>
  );
} 