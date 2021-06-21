import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src={process.env.PUBLIC_URL + 'images/checkout.jpg'} alt=''/>
            
            <div>
            <h3> Hello,{user?.email} </h3>
            <h2 className="checkout__title">Your Shooping Basket</h2>
                {basket.map(item =>(
                  <CheckoutProduct 
                  id={item.id}  
                  title={item.title}  
                  image={item.image}  
                  price={item.price}  
                  rating={item.rating}  
                />
                ))}
            </div>

            </div>
            <div className="checkout_right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout
