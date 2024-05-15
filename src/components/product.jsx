import React from 'react';
import "./product.scss"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const ProductComponent = () => {
    return (
        <div className='product_container'>
            <div className='product-content'>
                <h1 className='product-title'>The Product we work with.</h1>
                <p className='product-text'>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
            </div>
            <div className='cards'>
                <div className="card_item">
                    <img src={icon1} alt="" />
                    <h3 className='card_title'>Cross platform</h3>
                    <p className='card_text'>Elit esse cillum dolore eu fugiat nulla </p>

                </div>
                <div className="card_item">
                    <img src={icon2} alt="" />
                    <h3 className='card_title'>Cloud server</h3>
                    <p className='card_text'>Elit esse cillum dolore eu fugiat nulla pariatur <br/><br /> <span>→</span> </p>

                </div>
                <div className="card_item">
                    <img src={icon3} alt="" />
                    <h3 className='card_title'>Pure Javascript</h3>
                    <p className='card_text'>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
        </div>
    );
}

export default ProductComponent;