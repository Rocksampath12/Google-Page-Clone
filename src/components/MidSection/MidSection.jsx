import './index.css'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
// import ScrollTrigger from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';


const MidSection = () => {
    const scrollRef = useRef()

    useGSAP(()=> {
        gsap.to(scrollRef.current,{
        x:-900,
        duration:7,
        scrollTrigger:{
            trigger:scrollRef.current,
            start:"top bottom",
            end:"bottom top",
            scrub:true,
            // markers:true,
        }
        })
    },{scope:scrollRef})

    return(
        <div className='google-images-container' ref={scrollRef}>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1-2x.webp" alt="chrome-gallery-1" className='desktop-home-page'/>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp" alt="chrome-gallery-2" className='mobile-home-page'/>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp" alt="chrome-gallery-3" className='desktop-home-page'/>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp" alt="chrome-gallery-4" className='mobile-home-page'/>
            <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp" alt="chrome-gallery-5" className='desktop-home-page'/>
        </div>
    )
}

export default MidSection