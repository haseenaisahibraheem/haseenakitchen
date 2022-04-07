import React from 'react'

import './card-style.css'


const Card = (props) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img className="card-img-top" src={props.imgsrc} alt="pic" />
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.stitle}</p>
                <a href="#" className="btn btn-outline-dark">
                    Order Now
                </a>

            </div>
            
        </div>
    )
}

export default Card
