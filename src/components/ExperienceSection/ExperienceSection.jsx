import './index.css'
import extensionImg from "../../assets/images/extensions-ui-2x.png"
import cart from "../../assets/images/cart.png"
import extension from "../../assets/images/extension.png"
import man from "../../assets/images/man.png"
import paint from "../../assets/images/paint.png"
import video from "../../assets/images/video.png"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ExperienceSection = () => {
    useGSAP(()=>{
        gsap.from(".cart-img",{
            x:-100,
            y:-50,
            opacity:0,
            scrollTrigger:{
                trigger:".cart-img",
                start:"bottom bottom",
                end:"bottom 400",
                scrub:true,
            }
        })

        gsap.from(".extension-img2",{
            y:-200,
            x:50,
            opacity:0,
            scrollTrigger:{
                trigger:".extension-img2",
                start:"bottom 560",
                end:"bottom 400",
                scrub:true,
            }
        })

        gsap.from(".video-img",{
            x:200,
            opacity:0,
            scrollTrigger:{
                trigger:".video-img",
                start:"top bottom",
                end:"top 500",
                scrub:true,
            }
        })

        gsap.from(".paint-img",{
            x:40,
            y:60,
            opacity:0,
            scrollTrigger:{
                trigger:".paint-img",
                start:"top bottom",
                end:"top 700",
                scrub:true,
            }
        })

        gsap.from(".man-img",{
            x:20,
            y:20,
            opacity:0,
            scrollTrigger:{
                trigger:".man-img",
                start:"top bottom",
                end:"top 700",
                scrub:true,
            }
        })

        //reverse operation

        gsap.to(".cart-img",{
            x:-100,
            y:-50,
            opacity:0,
            scrollTrigger:{
                trigger:".cart-img",
                start:"top 150",
                scrub:true,
            }
        })

        gsap.to(".extension-img2",{
            y:-200,
            x:50,
            opacity:0,
            scrollTrigger:{
                trigger:".extension-img2",
                start:"top 50",
                scrub:true,
            }
        })

        gsap.to(".video-img",{
            x:200,
            opacity:0,
            scrollTrigger:{
                trigger:".video-img",
                start:"top 240",
                scrub:true,
            }
        })

        gsap.to(".paint-img",{
            x:40,
            y:60,
            opacity:0,
            scrollTrigger:{
                trigger:".paint-img",
                start:"top 400",
                scrub:true,
            }
        })

        gsap.to(".man-img",{
            x:-80,
            y:80,
            opacity:0,
            scrollTrigger:{
                trigger:".man-img",
                start:"top 400",
                scrub:true,
            }
        })

    },[])

    return(
        <div className='exp-sec-container'>
            <div className='exp-text-container'>
                <h1 className='exp-heading'>Extend your experience</h1>
                <p className='exp-para'>From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store.</p>
                <button className='exp-btn'>Explore extensions</button>
            </div>
            
            <div className='home-page-container'>
                <img src={extensionImg} alt="google-home-page-01" className='extension-img'/>
                <img src={cart} alt="cart" className='cart-img'/>
                <img src={man} alt="man-img" className='man-img'/>
                <img src={paint} alt="paint-img" className='paint-img' />
                <img src={video} alt="video-img" className='video-img' />
                <img src={extension} alt="extension-img2" className='extension-img2' />
            </div>
        </div>
    )
}

export default ExperienceSection