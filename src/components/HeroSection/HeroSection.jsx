import chromeLogo from '../../assets/images/chrome-logo-m100.svg';
import './index.css'
import { useState } from 'react';

const HeroSection = () => {
    const [isChecked,setIsChecked] = useState(true);

    const checkboxHandler = () => {
        setIsChecked((prev) => {
            return !prev
        })
    }

    return(
        <div className="hero-sec-main-container">
            <div className="hero-sec-container">
                <img src={chromeLogo} alt="google-logo" />
                <h1 className="hero-sec-heading">The browser built to be yours</h1>
                <button className="hero-sec-button">Download Chrome</button>
                <a href='#' className="link">I want to update Chrome</a>
                <p className='specs'>For Windows 11/10 64-bit</p>
                <div className='terms-conditions-container'>
                    <input type="checkbox" className="checkbox" checked={isChecked} onClick={checkboxHandler}/>
                    <p className='terms-conditions'>Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. <a href="#" className="terms-conditions-link">Learn more</a></p>
                </div>
                <p className='download-para'>By downloading Chrome, you agree to the <a href="#" className='terms-conditions-link'>Google Terms of Service</a> and <a href="#" className='terms-conditions-link'>Chrome and ChromeOS Additional Terms of Service</a></p>
            </div>
        </div>
    )
}

export default HeroSection