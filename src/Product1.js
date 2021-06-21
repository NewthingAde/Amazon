import React from 'react'
import './Product1.css'


function Product1({title, image, link,}) {
   
    return (
        <div className="product1">
            <div className="product1_info">
                <p>{title}</p>
            </div>
            <img className="Product1_image" src={image} alt="homeimage"/>  
            <a href=''>{link}</a>
        </div>
    )
}

export default Product1
