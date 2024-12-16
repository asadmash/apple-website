// import gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import videos for small and big screen
import { heroVideo, smallHeroVideo } from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
const Hero = () => {
  // change video on different screen size
 const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);

//  video src handler function
const handleVideoSrcSet = () => {
  if(window.innerWidth < 760){
    setVideoSrc(smallHeroVideo)
  } else {
    setVideoSrc(heroVideo)
  }
}

// useEffect hook to dynamicall function call depending on device width
useEffect(() => {
  window.addEventListener('resize', handleVideoSrcSet);
  return () => {
    window.removeEventListener('resize', handleVideoSrcSet)
  }
}, [])

  useGSAP(() => {
gsap.to("#hero", { opacity: 1.5, delay: 1.5 })
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
<div className="h-5/6 w-full flex-center flex-col">
<p id='hero' className="hero-title">iPhone 15 Pro</p>
<div className='md:w-10/12 w-9/12'>
{/* the hero video render here */}
<video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
  {/* src of the video */}
  <source src={videoSrc} type='video/mp4'/>
</video>
</div>
</div>
    </section>
  )
}

export default Hero