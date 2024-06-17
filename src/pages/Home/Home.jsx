import React, { useContext, useState, useRef } from 'react';
import './home.scss'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import { StoreContext } from '../../context/StoreContext';
const Home = () => {
    const [category, setCategory] = useState('All')
    const {refs} =useContext(StoreContext)
    return (
        <div>
            <Header/>
            <ExploreMenu innerRef={refs[1]} category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} />
            <AppDownload innerRef={refs[2]}/>
        </div>
      
    );
}

export default Home;

// все
//  салат торт пицца
// салат торт 