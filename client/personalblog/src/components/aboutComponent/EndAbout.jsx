import React from 'react';


function EndAbout() {
  return (
    <div style={{ backgroundColor: '#f0f4ff', padding: '20px', textAlign: 'center', borderRadius: '8px' }}>
      <div className="icon mb-3">
        <i className="fa-solid fa-coffee" style={{ fontSize: '2rem', color: '#6c63ff' }}></i>
      </div>
      <h2>Let's Connect</h2>
      <p>I'm always excited to connect with fellow developers and tech enthusiasts. Whether you want to discuss a project or just chat about tech, feel free to reach out!</p>
      <button className="btn btn-primary" style={{ backgroundColor: '#6c63ff', borderColor: '#6c63ff', padding: '10px 20px', borderRadius: '5px' }}>
        Schedule a Coffee Chat
      </button>
    </div>
  );
}

export default EndAbout;
