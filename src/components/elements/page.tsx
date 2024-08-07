
import React from 'react';

function LandingPage() {
    return (
        <div className='relative flex items-center justify-center h-screen w-screen'>
            <div className='relative z-10 flex flex-col items-center justify-center lg:pt-[130px] text-center font-bold w-full h-full px-4'>
                <div className='flex flex-col gap-4 max-w-lg px-2 lg:px-4 items-center'>
                    <h2 className="neonText text-5xl lg:text-6xl italic">
                        Supercharged
                    </h2>
                    <h2 className='text-neutral-100 text-xl lg:text-[40px]'>
                        productivity
                    </h2>
                    <p className='font-normal text-neutral-400 text-sm'>
                        <i>SwiftLaunch</i> is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.
                    </p>
                </div>
                <div className='flex flex-col pt-1'>
                    <button className='ring-1 ring-neutral-400 mt-8 py-2 bg-white text-black font-semibold text-sm rounded-md'>
                        Download for Windows
                    </button>
                    <button className='pt-3 '>
                        <div className='flex flex-row gap-6'>
                            <p className='font-normal text-neutral-500 text-xs'>v1.66.2</p>
                            <p className='font-normal text-neutral-500 text-xs'>Windows 64x</p>
                            <p className='font-normal text-neutral-500 text-xs'>Install via Homebrew</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
