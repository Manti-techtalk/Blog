import React from 'react'
import image from '../assets/pic.png'

function Header() {
  return (
    <div style={{borderBottom:'1px solid black'}} className="container  p-3">
        <div className="row">
            <div className="col-6">
            <div className="div">
            <img style={{height:'50px',width:'50px'}} src={image} alt="the logo" />
        </div>
            </div>
            <div className="col-6">
                <ul className='nav  justify-content-end'>
                    <li className='m-1'>Home</li>
                    <li className='m-1'>Artiles</li>
                    <li className='m-1'>About</li>
                    <li className='m-1'>Projects</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Header