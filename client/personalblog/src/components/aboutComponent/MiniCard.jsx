import React from 'react';

function MiniCard() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <i style={{color:'blue',fontSize:'2em'}} className="fa-solid fa-code m-2"></i>
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">Building modern web applications with React, TypeScript, and other cutting-edge technologies</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
          <i style={{color:'blue',fontSize:'2em'}} className="fa-solid fa-book m-2"></i>
            <div className="card-body">
              <h5 className="card-title">Writing</h5>
              <p className="card-text">Sharing insights and experiences through technical articles and tutorials.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
          <i style={{color:'blue',fontSize:'2em'}} className="fa-solid fa-users m-2"></i>
            <div className="card-body">
              <h5 className="card-title">Sharing</h5>
              <p className="card-text">Helping others grow in their development journey through mentorship and guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
