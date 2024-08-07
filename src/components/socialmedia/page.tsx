import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { GiCpu } from 'react-icons/gi';

import { HiOutlineCommandLine } from 'react-icons/hi2';
import { IoLockClosedOutline } from 'react-icons/io5';
import { LuSlack } from 'react-icons/lu';


function SocialMedia() {
    return (
        <div>
            <div className='relative flex items-center justify-center pt-20 pb-20'>
                <div className='relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4'>
                    <div className='flex flex-col gap-4 max-w-lg px-2 lg:px-4 items-center'>
                        <h2 className="text-2xl lg:text-[40px] text-white">
                            Ready for take-off?
                        </h2>
                        <p className='font-normal text-neutral-400 text-sm'>
                            Download the <i>SwiftLaunch</i> app and start taking your productivity
                            to new heights.
                        </p>
                    </div>
                    <div className='flex flex-col pt-1'>
                        <div className='flex flex-col gap-4'>
                            <button className='ring-1 ring-neutral-400 mt-8 py-2 px-4 bg-white text-black font-semibold text-sm rounded-md'>
                                Download for Windows
                            </button>
                            <p className='text-white font-medium'>or</p>
                            <button className='ring-1 ring-neutral-400 py-2 px-4 bg-black text-neutral-400 font-medium text-sm rounded-md'>
                                $ brew install --cask swift-launch
                            </button>
                        </div>
                        <button className='pt-3 items-center justify-center'>
                            <p className='font-normal text-neutral-500 text-xs'>macOS 12+</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-white text-4xl items-center justify-center gap-2 pt-[40px] lg:px-2'>
                <div className='flex flex-col items-center justify-center gap-4 p-5 w-full h-full'>
                    <div className='flex flex-col items-center justify-center lg:flex-row gap-4'>
                        <div className=' flex flex-col rounded-md p-5 text-left bg-gradient-to-tr from-black via-black to-neutral-800 gap-4 w-[80%] lg:w-full'>
                            <FaXTwitter size={31} className='text-neutral-300' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-neutral-200 font-semibold text-xl'>Stay up to date</h2>
                                <p className='font-normal text-neutral-300 text-sm'>
                                    We’d love to stay connected with you. If the feeling’s mutual,
                                    follow <span className='font-semibold'>@swiftlaunchapp</span> on Twitter for the latest news and updates.
                                </p>
                            </div>
                        </div>
                        <div className=' flex flex-col rounded-md p-5 text-left bg-gradient-to-tr from-black via-blue-950 to-black gap-4 w-[80%] lg:w-full'>
                            <LuSlack size={31} className='text-neutral-300' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-neutral-200 font-semibold text-xl'>Help shape the product</h2>
                                <p className='font-normal text-neutral-300 text-sm'>
                                    Lots of the best and brightest ideas come from you. Join our
                                    Slack Community to help create the future of <i>SwiftLaunch</i>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-4 py-20 max-w-[300px] lg:max-w-3xl '>
                        <div className='flex flex-col gap-2 items-center lg:items-start justify-center text-center lg:text-left'>
                            <h2 className='text-neutral-200 font-semibold text-xl '>Stay up to date</h2>
                            <p className='font-normal text-neutral-300 text-sm'>
                                Get a summary of what we’ve shipped during the last month,
                                behind the scenes updates, and team picks.
                            </p>
                        </div>
                        <div className='flex flex-col pt-1 items-center justify-center'>
                            <div className='flex flex-row items-center justify-center w-full gap-2'>
                                <input placeholder='swiftlaunch@company.org' title='email' className='ring-1 ring-neutral-700 py-2 px-4 bg-neutral-800 text-neutral-200 text-left font-medium text-sm rounded-md' />
                                <button className=' py-2 px-4 bg-white text-black font-medium text-sm rounded-md'>
                                    Subscribe
                                </button>
                            </div>
                            <div className='pt-3 items-center justify-center'>
                                <p className='font-normal text-neutral-500 text-xs'>Pure information and no spam. Unsubscribe any time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia