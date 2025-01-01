import gsap from "gsap"

// animate with gsap dry code
// export const animateWithGsap = (target, animationProps, scrollProps) => {
//     gsap.to(target, {
//         ...animationProps,
//         scrollTrigger: {
//             trigger: target,
//             toggleActions: 'restart, reverse, restart, reverse',
//             start: 'top 85%',
//             ...scrollProps,
//         }
//     })
// }

//creating a function to simplify the creation of scroll-based animations by combining GSAP and scrollTrigger
export const animateWithGsap = (target, animationProps, scrollProps) => {
gsap.to( target, {
...animationProps,
scrollTrigger: {
    trigger: target,
    toggleActions: 'restart reverse restart reverse',
    start: 'top 85%',
    ...scrollProps
}
})
}


export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState, 
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}