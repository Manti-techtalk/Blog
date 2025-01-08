import React from 'react'
import profile from '../../assets/profile.jpg'

function AboutSection() {
  return (
    <div className="container-fluid mt-5">
        <div className="container text-center">
            <div className="row border p-5">
                <div className="col-6">
                    <h1>Hi, I am Manti Mokone</h1>
                    <p>A tech enthusiast passionate about creating innovating
                        digital solutions 
                    </p>
                    <p className='d-flex '>
                    <p><i className="fa-brands fa-github m-2"></i></p>
                    <p><i className="fa-brands fa-linkedin m-2"></i></p>
                    <p><i className="fa-regular fa-envelope m-2"></i></p>
                    </p>
                </div>
                <div className="col-6">
                    <img
                    className='justify-content-end'
                    style={{width:'200px',height:'200px',borderRadius:'50%'}}
                    src={profile} alt="my pic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection