import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import React, { useState } from 'react';
import { CiSearch, CiHeart } from 'react-icons/ci';
import RAte from './rate';
import { Link } from "react-router-dom";
import ShoppingCard from "../../shopCard/shoppingCard";

function Shopproduct() {
    const [state, setSetstate] = useState(1);
    const [isHeartBlack, setIsHeartBlack] = useState(true);

    const increment = () => {
        setSetstate(state - 1);
    };

    const decrement = () => {
        setSetstate(state + 1);
    };

    const Rang = () => {
        setIsHeartBlack(!isHeartBlack);
    };

    const buttonStyle = {
        backgroundColor: isHeartBlack ? '#46A358' : 'white',
    };

    return (
        <div className='productimages'>
            <div className='prodimg'>
                <div className='prodicon4'>
                    <img src="./shop Icon/1.png" alt="" />
                    <img src="./shop Icon/1.png" alt="" />
                    <img src="./shop Icon/1.png" alt="" />
                    <img src="./shop Icon/1.png" alt="" />
                </div>
                <div className='prodicon1'>
                    <img src="./shop Icon/2.png" alt="" />
                    <CiSearch className='seachIcon'></CiSearch>
                </div>
                <div className='searchIcon'></div>
            </div>

            <div className='proddisc'>
                <div className='barberton'>
                    <div className='bbt1'>
                        <h1>Barberton Daisy</h1>
                        <span>$119.00</span>
                    </div>
                    <div className='bbt2'>
                        <RAte /> <p>19 Customer Review</p>
                    </div>
                </div>
                <div className='linediv'></div>
                <div className='dic'>
                    <h1>Short Description:</h1>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                </div>
                <div className='Size_or_Buy'>
                    <h1>Size:</h1>
                    <div className='facegam'>
                        <div>
                            <h1>S</h1>
                        </div>
                        <div>
                            <h1>M</h1>
                        </div>
                        <div>
                            <h1>L</h1>
                        </div>
                        <div>
                            <h1>XL</h1>
                        </div>
                    </div>
                    <div className='IQ'>
                        <div className='stat'>
                            <button className='plus' onClick={increment}>
                                -
                            </button>
                            <span>{state}</span>
                            <button className='plus' onClick={decrement}>
                                +
                            </button>
                        </div>
                            <Link><button className='buttons'>Buy NOW</button></Link>
                            <Link to=""><button className='buttons1 , '>Add to cart</button></Link>
                            <div className='productimages'>
                                <button style={buttonStyle} onClick={Rang} className='btn1'>
                                    <CiHeart className='jon'></CiHeart>
                                </button>
                            </div>
                    </div>
                    <div className='cament'>
                        <h1>SKU: 1995751877966</h1>
                        <h1>Categories: Potter Plants</h1>
                        <h1>Tags: Home, Garden, Plants</h1>
                        <div><h1>Share this products:</h1> <div><FaFacebookF /> <FaTwitter /><FaLinkedinIn /><CiMail /></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopproduct;
