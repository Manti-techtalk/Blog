import React from 'react';


function BodyFooter() {
  return (
    <div className='mt-5' style={{ backgroundColor: '#f0f4ff', padding: '20px', textAlign: 'center' }}>
      <h2>Subscribe to My Newsletter</h2>
      <p>Get notified about new articles and insights. No spam, unsubscribe anytime.</p>
      <div className="d-flex justify-content-center">
        <input 
          type="email" 
          placeholder="Enter your email" 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} 
        />
        <button 
          className="btn btn-primary" 
          style={{ backgroundColor: '#6c63ff', borderColor: '#6c63ff', padding: '10px 20px', borderRadius: '5px' }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default BodyFooter;
