import React,{useState} from 'react';


function BodyFooter() {
    const [subscribe,setsubscribe] = useState('')
    const handleClick = ()=>{
        alert(`You have subscribed using ${subscribe}`)
    }
  return (
    <div className='mt-5' style={{ backgroundColor: '#f0f4ff', padding: '20px', textAlign: 'center' }}>
      <h2>Subscribe to My Newsletter</h2>
      <p>Get notified about new articles and insights. No spam, unsubscribe anytime.</p>
      <div className="d-flex justify-content-center">
        <input 
        value={subscribe}
        onChange={(e)=>setsubscribe(e.target.value)}
          type="email" 
          placeholder="Enter your email" 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} 
        />
        <button 
        onClick={handleClick}
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
