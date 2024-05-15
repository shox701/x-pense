import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './footer.scss';
import ago from './Logo.png';
import social from './social.png';

function Footer() {
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;

        if (!email || !isValidEmail(email)) {
            setError('Ошибка: Пожалуйста, введите корректный email');
            return;
        }

        setSubscribed(true);
        setError('');

        setTimeout(() => {
            setSubscribed(false);
        }, 4000);
    };

    const isValidEmail = (email) => {
        return email.includes('@');
    };

    return (
        <div className="footer-container">
            <div className="footer">
                <img className='footer-img' src={ago} alt="" />
                <div className="footer-box">
                    <p className='footer-text'>Links</p>
                    <ul className="footer-item">
                        <li className="footer-list">home</li>
                        <li className="footer-list">About us</li>
                        <li className="footer-list">Careers</li>
                        <li className="footer-list">Pricing</li>
                        <li className="footer-list">Features</li>
                        <li className="footer-list">Blog</li>
                    </ul>
                </div>
                <div className="footer-box1">
                    <p className="footer-text1">LEGAL</p>
                    <ul className="footer-item">
                        <li className="footer__item__text">Terms of use</li>
                        <li className="footer__item__text">Terms of conditions</li>
                        <li className="footer__item__text">Privecy policy</li>
                        <li className="footer__item__text">Cookie policy </li>
                    </ul>
                </div>
                <div className="footer-box2">
                    <h1 className='footer-title'>Newsletter</h1>
                    <p className="footer-text2">Over 25000 people have subscribed</p>
                    <form onSubmit={handleSubmit}>
                        <div className="footer-box3">
                            <input type="text" id="email" className="footer-inp" placeholder='Enter your email' />
                            <button className='footer-btn'>Subscribe</button>
                            <p className='footer-text2'>We don’t sell your email and spam</p>
                            {error && <div className="error-message">{error}</div>}
                        </div>
                    </form>
                    {subscribed && (
                        <div className="success-message">
                            <p>Поздравляем, вы подписались!</p>
                        </div>
                    )}
                </div>
            </div>
            {subscribed && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={500}
                    recycle={false}
                    initialVelocityX={0} 
                    initialVelocityY={0} 
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    style={{ position: 'fixed', top: 0, left: 0 }}
                />
            )}
            <div className="footer-box4">
                <hr />
            </div>
            <div className="footer-box5">
                <p className='footer__text3'>Privacy & Terms</p>
                <p className='footer__text'>Contact Us</p>
                <p className='copyright'>Copyright @ 2022 xpence</p>
                <div className="">
                    <img className='footer__subimg' src={social} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
