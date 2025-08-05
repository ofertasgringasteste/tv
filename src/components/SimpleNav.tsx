import React from 'react';
import { Link } from 'react-router-dom';

const SimpleNav = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}
        >
          StreamLATAM
        </Link>
        
        <Link 
          to="/" 
          style={{ color: '#ccc', textDecoration: 'none' }}
        >
          Home
        </Link>
        
        <Link 
          to="/showcase" 
          style={{ color: '#ccc', textDecoration: 'none' }}
        >
          Showcase
        </Link>
        
        <Link 
          to="/test" 
          style={{ color: '#ccc', textDecoration: 'none' }}
        >
          Test
        </Link>
      </div>
    </nav>
  );
};

export default SimpleNav;