import React, { createContext, useRef, useState } from "react";
import { food_list } from "../assets/assets";
import { useLocalStorage } from '../utils/useLocalStorage'; // Подключаем ваш хук useLocalStorage

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useLocalStorage('cartItems', {}); // Используем useLocalStorage

    const [activeIndex, setActiveIndex] = useState(0);
    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),

    ];
    const scrollToItem = (index) => {
        if (index >= 0 && index < refs.length) {
          refs[index].current?.scrollIntoView({ behavior: 'smooth' });
          setActiveIndex(index);
          console.log(index)
        }
      };

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (!newCartItems[itemId]) {
                newCartItems[itemId] = 1;
            } else {
                newCartItems[itemId] += 1;
            }
            return newCartItems;
        });
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId];
            }
            return newCartItems;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        scrollToItem,
        refs
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
