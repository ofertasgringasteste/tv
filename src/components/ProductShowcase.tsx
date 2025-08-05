import React from 'react';
import SimpleNav from './SimpleNav';

const ProductShowcase = () => {

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a', 
      color: 'white'
    }}>
      <SimpleNav />
      <div style={{ padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '2rem' 
        }}>
          StreamLATAM Hub
        </h1>
        
        <div style={{ 
          backgroundColor: '#333', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Todos os seus streamings favoritos em um só lugar
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
            Mais de <span style={{ color: '#dc2626' }}>2.000 canais</span> e{' '}
            <span style={{ color: '#dc2626' }}>50.000+ títulos</span> disponíveis
          </p>
          
          <button style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginRight: '1rem'
          }}>
            Começar Agora
          </button>
          
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '12px 24px',
            border: '2px solid #666',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Ver Demonstração
          </button>
        </div>
        
        {/* APP Funcionando - Apenas Imagem dos Mockups (Cards removidos) */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '3rem',
            color: '#fff'
          }}>
            APP FUNCIONANDO
          </h2>
          
          <div style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <img 
              src="/tv_edite.png?v=1" 
              alt="App Funcionando - Mockups StreamLATAM"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxWidth: '600px'
              }}
              onError={(e) => {
                // Fallback caso a imagem não carregue
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div style="
                    background: #333; 
                    padding: 3rem; 
                    text-align: center; 
                    color: white;
                    border-radius: 20px;
                  ">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">
                      📱 APP FUNCIONANDO
                    </h3>
                    <p>Demonstração dos mockups em desenvolvimento</p>
                  </div>
                `;
              }}
            />
          </div>
        </div>
        
        {/* Call to Action Final */}
        <div style={{ 
          backgroundColor: '#111', 
          padding: '3rem 2rem', 
          borderRadius: '20px',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#fff'
          }}>
            ¿Listo para comenzar?
          </h3>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#ccc', 
            marginBottom: '2rem' 
          }}>
            Únete a miles de usuarios que ya disfrutan del mejor streaming
          </p>
          
          <button style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
            transition: 'all 0.3s ease'
          }}
          >
            COMENZAR AHORA - $8.99
          </button>
          
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#888', 
            marginTop: '1rem' 
          }}>
            Sin compromiso • Cancela cuando quieras • Soporte 24/7
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductShowcase;