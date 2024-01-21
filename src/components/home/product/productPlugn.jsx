import React from 'react';
import img1 from "../productImgs/product1.png"
import img2 from "../productImgs/product2.png"
import img3 from "../productImgs/product3.png"
import Group5 from './group5';
import Slider from './slider';
import Page from './pagination';

function Productnew() {
    return (
        <div className='aa' >
            <div className='con'>
                <div className="categor">
                    <h1>Categories</h1>
                    <div className='house'>
                        <div><h1>House Plants</h1> <h1>(33)</h1></div>
                        <div><h1>Potter Plants</h1> <h1>(33)</h1></div>
                        <div><h1>Seeds</h1> <h1>(33)</h1></div>
                        <div><h1>Small Plants</h1> <h1>(33)</h1></div>
                        <div><h1>Big Plants</h1> <h1>(33)</h1></div>
                        <div><h1>Succulents</h1> <h1>(33)</h1></div>
                        <div><h1>Trerrariums</h1> <h1>(33)</h1></div>
                        <div><h1>Gardening</h1> <h1>(33)</h1></div>
                        <div><h1>Accessories</h1> <h1>(33)</h1></div>
                    </div>
                    <h1>Price Range</h1>
                    <Slider />
                    <h1>Size</h1>
                    <div className='house'>
                        <div><h1>Small</h1><h1>(119)</h1></div>
                        <div><h1>Medium</h1><h1>(119)</h1></div>
                        <div><h1>Large</h1><h1>(119)</h1></div>
                    </div>
                    <img id='saleimgg' src="./logoimg/Super Sale Banner.png" alt="" />
                </div>
                <div className="categorie">
                    <div className='prod'>
                        <div><img src={img1} alt="" /> <Group5 /> <h1>Barberton Daisy</h1>  <span>$119.00</span>  </div>
                        <div><img src={img2} alt="" /> <Group5 />  <h1>Angel Wing Begonia</h1>  <span>$119.00</span>  </div>
                        <div><img src={img3} alt="" /> <Group5 />  <h1>African Violet</h1>  <span>$119.00</span>  </div>
                        <div><img src={img1} alt="" /> <Group5 />  <h1>Beach Spider Lily</h1>  <span>$119.00</span>  </div>
                        <div><img src={img2} alt="" /> <Group5 />  <h1>Blushing Bromeliad</h1>  <span>$119.00</span>  </div>
                        <div><img src={img3} alt="" /> <Group5 />  <h1>Aluminum Plant</h1>  <span>$119.00</span>  </div>
                        <div><img src={img1} alt="" /> <Group5 />  <h1>Bird's Nest Fern</h1>  <span>$119.00</span>  </div>
                        <div><img src={img2} alt="" /> <Group5 />  <h1>Broadleaf Lady Palm</h1>  <span>$119.00</span>  </div>
                        <div><img src={img3} alt="" /> <Group5 />  <h1>Chinese Evergreen</h1>  <span>$119.00</span>  </div>
                    </div>
                </div>
            </div>
            <Page />
            <div className='Summer'>
                <div className='Summerr'><img src="./logoimg/image 14.png" alt="" /> <div className='Sum'><h1>Summer cactus & succulents</h1> <p>We are an online plant shop offering a wide range of cheap and trendy plants</p> <button className='buttons'>Find More</button></div></div>
                <div className='Summerr'><img src="./logoimg/image 14.png" alt="" /> <div className='Sum'><h1>Summer cactus & succulents</h1> <p>We are an online plant shop offering a wide range of cheap and trendy plants</p> <button className='buttons'>Find More</button></div></div>
            </div>
        </div>
    );
}

export default Productnew;

