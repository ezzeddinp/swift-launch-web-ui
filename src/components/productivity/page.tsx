import React from 'react';
import { FaCode } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

import { HiOutlineCommandLine } from 'react-icons/hi2';
import { SlCalculator } from 'react-icons/sl';
import { TiArrowRight } from 'react-icons/ti';

function Productivity() {
    return (
        <div className='flex flex-col text-white text-4xl items-center justify-center gap-2 py-9 pt-20 pb-40'>
            <div className='flex flex-col gap-4 text-center items-center px-4'>
                <div className='flex flex-row items-center'>
                    <h2 className='font-medium text-neutral-200 text-2xl px-1 lg:text-[40px]'>
                        Productivity,
                        <br />levelled up..
                    </h2>
                </div>
                <p className='font-normal text-neutral-400 text-sm px-9 lg:max-w-xl'>
                    Make <i>SwiftLaunch</i> your own, using the bundle of features available from day one.
                </p>
            </div>
            <div className='flex overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 gap-4 p-5 w-full'>
                <div className='flex-shrink-0 snap-center flex flex-col rounded-md p-5 bg-black bg-opacity-60 gap-4 w-[80%] lg:w-auto'>
                    <FaCode size={34} className='text-purple-400' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-purple-400 font-semibold text-xl'>Script Commands</h2>
                        <p className='font-normal text-purple-200 text-sm'>
                            Write scripts in your favorite programming language to connect to web APIs, control apps, tools, and more.
                        </p>
                        <div className='flex flex-row items-center pt-2 font-normal text-purple-200 text-sm'>
                            <p>
                                Check out more than 600 scripts from the community
                            </p>
                            <GoArrowUpRight size={40} className='text-yellow-700' />
                        </div>
                    </div>
                </div>
                <div className='flex-shrink-0 snap-center flex flex-col rounded-md p-5 text-left bg-black bg-opacity-60 gap-4 w-[80%] lg:w-auto'>
                    <SlCalculator size={31} className='text-blue-400' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-blue-400 font-semibold text-xl'>Calculator</h2>
                        <p className='font-normal text-blue-200 text-sm'>
                            Solve simple math expressions, convert units, check timezones, calculate differences between days, months, and years, and do much more in natural language. Copy the answer to your clipboard to carry on with what you were doing before.
                        </p>
                    </div>
                </div>
                <div className='flex-shrink-0 snap-center flex flex-col rounded-md p-4 text-left bg-black bg-opacity-60 gap-4 w-[80%] lg:w-auto'>
                    <HiOutlineCommandLine size={35} className='text-orange-400' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-orange-400 font-semibold text-xl'>System Commands</h2>
                        <p className='font-normal text-orange-200 text-sm'>
                            Control your Mac with over 20 system commands built in. From turning up or down volume, to emptying your trash, sleep or restarting your system, and much more.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center justify-center font-normal text-neutral-200 text-sm'>
                <button>Explore the docs</button>
                <TiArrowRight />
            </div>
        </div>
    );
}

export default Productivity;
