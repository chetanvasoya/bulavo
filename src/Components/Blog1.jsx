import React from 'react';

const Blog1 = ({ blogTitle, imageUrl, content }) => {
  return (
    <div style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      color: '#333',
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
    }}>
      <header style={{
        position: 'relative',
        height: '60vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '0 20px',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}></div>
        <h1 style={{
          color: '#fff',
          fontSize: '3rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 40px',
          position: 'relative',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}>
          {blogTitle}
        </h1>
      </header>

      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
      }}>
        <article style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
        }}>
          {content.split('\n').map((paragraph, index) => (
            <p key={index} style={{
              marginBottom: '1.5em',
            }}>
              {paragraph}
            </p>
          ))}
        </article>
      </main>

      <footer style={{
        backgroundColor: '#f8f8f8',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #eaeaea',
        marginTop: '40px',
      }}>
        <p style={{
          margin: 0,
          color: '#666',
        }}>
          © 2024 Bulavo  All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Blog1;