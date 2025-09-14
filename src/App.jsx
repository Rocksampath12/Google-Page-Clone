import './App.css'
// import ScrollTrigger from 'gsap/all'
import HeroSection from './components/HeroSection/HeroSection'
import MidSection from './components/MidSection/MidSection'
import UpdatesSection from './components/UpdatesSection/Updates'

import ScrollTrigger from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger,SplitText)


function App() {

  return (
    <div className='app-container'>
      <HeroSection />
      <MidSection />
      <UpdatesSection />
    </div>
  )
}

export default App
