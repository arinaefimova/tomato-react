import React from 'react';
import './appDownload.scss'
import { assets } from '../../assets/assets';

const AppDownload = ({innerRef}) => {
    return (
        <div className='app-download' id='app-download' ref={innerRef}>
            <p>For better Experience Download <br /> Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    );
}

export default AppDownload;
