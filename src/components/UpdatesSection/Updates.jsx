import './index.css'
import { MdUpdate } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {SplitText} from 'gsap/SplitText';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import chromeLogo from '../../assets/images/chrome-logo-m100.svg'

const UpdatesSection = () => {
    const updateIcon = useRef()
    useGSAP(()=>{
        const split = new SplitText('.updates-text',{type:"chars words"})

        gsap.from(split.chars,{
            yPercent:100,
            duration:0.5,
            opacity:0,
            stagger:0.06,
            scrollTrigger:{
                trigger:".updates-text",
                start:"bottom bottom",
            }
        })
        gsap.from(".update-icon",{
            yPercent:100,
            opacity:0,
            scrollTrigger:{
                trigger:'.update-icon',
                start:"top bottom"
            }
        })

        gsap.to(".chrome-img",{
            x:350,
            scrollTrigger:{
                trigger:".chrome-img",
                start:"top 630",
            }
        })
    },[])

    return(
        <div className='updates-container'>
            <div className='updates-heading'>
                <h1>Discover the lastest
                    <div className='updates-button'><MdUpdate className='update-icon' ref={updateIcon}/><span className='updates-text'>Updates</span></div> from Chrome
                </h1>
            </div>
            <div className="cards-container">
                <div className='card1'>
                    <p className='card1-para'>UPDATES</p>
                    <h1 className='card1-heading'>Automatic updates</h1>
                    <p className='card1-para'>There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.</p>
                    <a href="#" className='card1-link'><h1 className='card1-link-text'>Learn about automatic updates</h1></a>
                </div>
                <div className='card2'>
                    <div>
                        <p className='card1-para'>LATEST</p>
                        <h1 className='card1-heading'>New from Chrome</h1>
                        <p className='card1-para'>Chrome regularly updates with tools and features that make it faster and easier to use.</p>
                        <a href="#" className='card1-link'><h1 className='card1-link-text'>Learn what’s new on Chrome</h1></a>
                    </div>
                    <div>
                        <img src={chromeLogo} alt="chrome-logo" className='chrome-img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatesSection