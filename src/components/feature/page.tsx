import Image from 'next/image'
import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FiCpu } from 'react-icons/fi'
import { PiLightningBold } from 'react-icons/pi'
import { SlArrowUpCircle } from 'react-icons/sl'
import { TiArrowRight } from 'react-icons/ti'


function Feature() {
    return (
        <div className='flex flex-col text-white text-4xl items-center justify-center gap-2 py-9'>
            <div className='flex flex-col gap-4 text-center items-center px-4'>
                <div className='flex flex-row items-center'>
                    <h2 className='font-medium text-neutral-200 text-2xl px-1 lg:text-[40px]'>
                        It’s as easy as <span className='font-semibold text-green-400'>Installed</span>
                    </h2>
                    <FaRegCheckCircle size={20} className='text-green-400' />
                </div>
                <p className='font-normal text-neutral-400 text-sm px-9 lg:max-w-xl'>
                    Say hello to the Store. A home for Extensions published by our community of
                    Developers using our API. Find extensions to the tools you use in your day-to-day.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center p-5 w-full h-full '>
                <div className='flex flex-col rounded-md col-span-2 lg:col-span-3 p-8 text-left bg-gradient-to-r from-red-900 via-orange-800 to-brown-950 gap-4'>
                    <SlArrowUpCircle size={30} />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-neutral-200 font-semibold text-xl'>One up your productivity</h2>
                        <p className='font-normal text-neutral-200 text-sm'>
                            On top of the core <i>SwiftLaunch</i> Extensions already built in,
                            you can install Extensions built by Developers from the
                            community. Everything you’ve asked for, in one place.
                            Search and browse Extensions for your tools, actions
                            and more.
                        </p>
                    </div>
                    <div className='items-start'>
                        <button className=' ring-neutral-400 bg-opacity-30 backdrop-blur-sm py-2 px-5 bg-white text-black font-medium text-sm rounded-md'>
                            Browse Extensions
                        </button>
                    </div>
                </div>
                <div className='flex flex-col rounded-md p-5 text-left bg-black ring-1 ring-neutral-700 gap-4 h-full'>
                    <PiLightningBold size={30} />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-neutral-200 font-semibold text-xl'>Lightweight and snappy</h2>
                        <p className='font-normal text-neutral-200 text-sm'>
                            Designed to be seamless and instant.
                            View an Extension and hit  to simply install it in milliseconds.
                        </p>
                    </div>
                    <div className='items-start'>
                        <button className=' ring-neutral-400 bg-opacity-80 py-2 px-5 bg-white text-neutral-800 font-medium text-sm rounded-md'>
                            Browse Extensions
                        </button>
                    </div>
                </div>
                <div className='flex flex-col rounded-md lg:col-span-2 p-4 text-left bg-orange-200 gap-4 h-full'>
                    <FiCpu size={30} className='text-orange-950' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-neutral-900 font-semibold text-xl'>Evergrowing collection</h2>
                        <p className='font-normal text-neutral-600 text-sm'>
                            Control Spotify or Apple Music with a hit of a button. Search through Figma,
                            Notion, and Xcode. Check your internet speed and the weather without
                            needing the browser, or even play a game of Snake.
                        </p>
                    </div>
                    <div className='items-start'>
                        <button className=' ring-neutral-400 bg-opacity-30 backdrop-blur-sm py-2 px-5 bg-black/20 text-black font-medium text-sm rounded-md'>
                            Browse Extensions
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center justify-center font-normal text-neutral-200 text-sm'>
                <button>Explore the store</button>
                <TiArrowRight />
            </div>
        </div>
    )
}

export default Feature