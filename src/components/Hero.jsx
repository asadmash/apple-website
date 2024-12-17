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
gsap.to("#hero", { opacity: 1, delay: 2 })
// animate the cta button and text
gsap.to('#cta', {opacity: 1, y: -50, delay: 2})
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
{/* Call to action button */}
<div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
<a href="#highlights" className='btn'>Buy</a>
<p className='font-normal text-xl'>From $199/month or $999</p>
</div>
    </section>
  )
}

export default Hero