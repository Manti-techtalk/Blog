import React from 'react'
import img1 from '../assets/c1.jpg'
import img2 from '../assets/coding1.jpg'

function MiniPosts() {
  return (
    <div className="container mt-5 ">
        <div className="row">
            <div className="col-12 text-center mb-5">
                <h1>
                    Featured Posts
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="card" style={{ width: '100%' }}>
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">The Future of AI in Tech</h5>
                        <p className="card-text">Explore how artificial intelligence is transforming the way we build innovative digital solutions</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="card" style={{ width: '100%' }}>
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Building Modern Web Applications</h5>
                        <p className="card-text">Learn how to build scalable web applications using React Js and Django</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiniPosts
