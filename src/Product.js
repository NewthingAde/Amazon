import React from 'react'
import './Product.css'
import StarRateIcon from '@material-ui/icons/StarRate';
import {useStateValue} from "./StateProvider"


function Product({ id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log('this is the basket >>>', basket);
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                    id:id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
            }
        } ) 
     }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                {Array(rating).fill().map(( _,i)=>
                (
                    <p className='star_color'> <StarRateIcon/></p>
                ))}
                    
                </div>
            </div>
            <img className="Product_image" src={image} alt="homeimage"/>  
            <button className="button_add" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
