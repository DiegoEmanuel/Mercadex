'use client';

import React, { useEffect, useState } from 'react';

export function FooterSimples() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // #2e8b57 //cor da identidade 
  return (
    <footer className="bg-green-900 py-4 w-full fixed bottom-0 left-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mercadex. Todos os direitos reservados. :)
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Horário atual: {currentTime}
          </p>
        </div>
      </div>
    </footer>
  );
}
