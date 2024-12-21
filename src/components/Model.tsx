import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Model() {

    // STEP:2 GSAP FOR ANIAMTIONG TEXT AND VIDEOS
    useGSAP(() => {
gsap.to('#heading', {y:0, opacity: 1})
    }, [])
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
<h1 id='heading' className='section-heading'>
    Take a closer look.
</h1>

// STEP:3
<div></div> 
        </div>
    </section>
  )
}

export default Model