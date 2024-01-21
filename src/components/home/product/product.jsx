import React from 'react';
import Productplugn from "./productPlugn.jsx"
import Blogs from './blogs.jsx';
function Product() {
    return (
        <div className='All_plants'>
            <div className="Menu">
                <span>All Plants</span>
                <span>New Arrivals</span>
                <span>Sale</span>
            </div>
            <div className='categories'>
                {<Productplugn/>}
            </div>
            <div className="blogs">
                <Blogs/>
            </div>
        </div>
    );
}

export default Product;