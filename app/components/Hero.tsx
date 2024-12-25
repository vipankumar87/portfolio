import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return <>
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-20 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="bg-grid">
            {/* Radial gradient for the container to give a faded look */}
            <div className="bg-grid-fader"></div>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase text-xs tracking-widest text-center text-primary-100 max-w-80'>Dynamic Web Magic with Next.js</h2>
                <TextGenerateEffect
                    words="Transforming Concepts into Seamless User Experiences"
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                />
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    Hi! I&apos;m Vipan, a Full Stack Developer based in India.
                </p>
                <a href='#about'>
                    <MagicButton title="Show My Work" icon={<FaLocationArrow/>} position='right'/>
                </a>
            </div>
        </div>
    </div>
  
  </>
}

export default Hero
