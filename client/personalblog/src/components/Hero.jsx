import React from 'react'

function Hero() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-12">
                <h2>Thoughts on Technology,Development, and Innovation</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-11">
                <p>
                    Exploring the intersection of code, creativity, and morden development.
                    Join me on this journey of continuos learning and discovery
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <button className='btn btn-primary'>Read Latest Articles <span></span>
                <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero