import React from 'react'
import MiniCard from './MiniCard'

function MidSection() {
  return (
    <div className="container-fluid">
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h3>
                        What I do
                    </h3>
                </div>
            </div>
            <div className="row mt-5">
                <MiniCard/>
            </div>
        </div>
    </div>
  )
}

export default MidSection