import React from 'react'
import Navbar from '../../components/Navbar'

const Hero = () => {
  return (
    <div>
        <div className='w-full min-h-screen h-auto bg-[url("/BG-hero.png")] bg-cover flex flex-col items-center p-5'>
            <Navbar/>
                <div className='m-10'>
                    <h1 className='text-6xl  text-gradient leading-tight tracking-[-2px] font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5] text-center'>
                        Optimize Your CV With AI <br/> Get Hired Faster
                    </h1>
                    <h2 className='text-3xl text-black/60'>Review your submissions and check AI-powered feeback.</h2>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-[url('/card-1.png')] bg-cover bg-center rounded-xl aspect-square"></div>
          <div className="bg-[url('/card-2.png')] bg-cover bg-center rounded-xl aspect-square"></div>
          <div className="bg-[url('/card-3.png')] bg-cover bg-center rounded-xl aspect-square"></div>
          {/* <div className="bg-[url('/card-4.png')] bg-cover bg-center rounded-xl aspect-square"></div>
          <div className="bg-[url('/card-5.png')] bg-cover bg-center rounded-xl aspect-square"></div>
          <div className="bg-[url('/card-6.png')] bg-cover bg-center rounded-xl aspect-square"></div> */}
        </div>
        </div>
    </div>
  )
}

export default Hero