import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";

function Plugn() {
    const [state, setSetstate] = useState(1);
    const [state1, setSetstate1] = useState(1);
    const [state2, setSetstate2] = useState(1);

    const increment = () => {
        setSetstate(state - 1);

    };
    const decrement = () => {
        setSetstate(state + 1);
    };
    // 
    const increment1 = () => {
        setSetstate1(state1 - 1);

    };
    const decrement1 = () => {
        setSetstate1(state1 + 1);
    };
    // 
    const increment2 = () => {
        setSetstate2(state2 - 1);

    };
    const decrement2 = () => {
        setSetstate2(state2 + 1);
    };




    return (
        <div className='main'>
            <div>
                <div className='main1nav'>
                    <div className='main1nav1'>
                        <h1>Products</h1>
                    </div>
                    <div className='main1nav2'>
                        <h1>Price</h1>
                        <h1>Quantity</h1>
                        <h1>Total</h1>
                    </div>
                </div>
                <div className='features'>
                    <div className='navv1'>
                        <div className='main1dis1'>
                            <div className='main1disImg'>
                                <div>
                                    <img src="./shop icon/4.png" alt="" />
                                </div>
                                <div>
                                    <h1>Barberton Daisy</h1>
                                    <p>SKU: 1995751877966</p>
                                </div>
                            </div>
                            <div className='main1disImg'>
                                <div><h1>$119.00</h1></div>
                                <div>
                                    <button onClick={increment}>-</button>
                                    <span>{state}</span>
                                    <button onClick={decrement}>+</button>
                                </div>
                                <div className='del'>
                                    <h1>$238.00</h1>
                                    <img src="./shop icon/5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navv1'>
                        <div className='main1dis1'>
                            <div className='main1disImg'>
                                <div>
                                    <img src="./shop icon/4.png" alt="" />
                                </div>
                                <div>
                                    <h1>Barberton Daisy</h1>
                                    <p>SKU: 1995751877966</p>
                                </div>
                            </div>
                            <div className='main1disImg'>
                                <div><h1>$119.00</h1></div>
                                <div>
                                    <button onClick={increment1}>-</button>
                                    <span>{state1}</span>
                                    <button onClick={decrement1}>+</button>
                                </div>
                                <div className='del'>
                                    <h1>$238.00</h1>
                                    <img src="./shop icon/5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navv1'>
                        <div className='main1dis1'>
                            <div className='main1disImg'>
                                <div>
                                    <img src="./shop icon/4.png" alt="" />
                                </div>
                                <div>
                                    <h1>Barberton Daisy</h1>
                                    <p>SKU: 1995751877966</p>
                                </div>
                            </div>
                            <div className='main1disImg'>
                                <div><h1>$119.00</h1></div>
                                <div>
                                    <button onClick={increment2}>-</button>
                                    <span>{state2}</span>
                                    <button onClick={decrement2}>+</button>
                                </div>
                                <div className='del'>
                                    <h1>$238.00</h1>
                                    <img src="./shop icon/5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div><h1>Cart Totals</h1></div>
                <div>
                    <div>
                        <h1>Coupon Apply</h1>
                        <div>
                            <input type="text" placeholder='Enter coupon code here...' />
                            <button>Apply</button>
                        </div>
                        <div>
                            <div>
                                <h1>Subtotal</h1>
                                <h1>Coupon Discount</h1>
                                <h1>Shiping</h1>
                            </div>
                            <div>
                                <h1>Shiping</h1>
                                <h1>(-) 00.00</h1>
                                <h1>$16.00</h1>
                            </div>
                        </div>
                        <p>View shipping charge</p>
                        <div>
                            <h1>Total</h1>
                            <h1>$2,699.00</h1>
                        </div>
                        <button>Proceed To Checkout</button>
                        <p>Continue Shopping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plugn