import React from 'react';
import SimpleNav from '@/components/SimpleNav';

const Test = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a', 
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <SimpleNav />
      <div style={{ padding: '20px' }}>
        <h1>Teste - StreamLATAM Hub</h1>
        <p>Se você está vendo isso, a aplicação está funcionando!</p>
        
        <div style={{ 
          backgroundColor: '#333', 
          padding: '20px', 
          borderRadius: '8px', 
          marginTop: '20px' 
        }}>
          <h2>Componente de Teste</h2>
          <p>Este é um teste simples sem dependências complexas.</p>
          
          <button 
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
            onClick={() => alert('Botão funcionando!')}
          >
            Clique aqui
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;