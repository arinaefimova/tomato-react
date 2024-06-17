import React, { useContext, useState } from 'react';
import './foodItem.scss'
import ReactStars from "react-rating-stars-component";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
// import {useLocalStorage} from '../../utils/'
const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
 
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {!cartItems[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <ReactStars count={5} size={22} isHalf={true} emptyIcon={<i className="far fa-star star"></i>} halfIcon={<i className="fa fa-star-half-alt star star-filled"></i>} fullIcon={<i className="fa fa-star star star-filled"></i>} activeColor="tomato" />
                </div>

                <p className="food-item-descr">{description}</p>
                <p className="food-item-price">${price}</p>

            </div>
        </div>
    );
}

export default FoodItem;
