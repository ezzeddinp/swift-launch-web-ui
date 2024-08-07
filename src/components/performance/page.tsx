import React from 'react';
import { GiCpu } from 'react-icons/gi';

import { HiOutlineCommandLine } from 'react-icons/hi2';
import { IoLockClosedOutline } from 'react-icons/io5';

function Performance() {
    return (
        <div className='flex flex-col text-white text-4xl items-center justify-center gap-2 py-9 pt-20'>
            <div className='flex flex-col gap-4 text-center items-center px-4'>
                <div className='flex flex-row items-center'>
                    <h2 className='font-medium text-neutral-200 text-2xl px-1 lg:text-[40px]'>
                        More focus, less clutter.
                    </h2>
                </div>
                <p className='font-normal text-neutral-400 text-sm px-9 lg:max-w-xl'>
                    Keep your workspace centralized, clean and tidy. Engineered with performance
                    and your privacy in mind.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center lg:grid lg:grid-cols-3 gap-4 p-5 w-full h-full'>
                <div className='flex-shrink-0 flex flex-col rounded-md p-5 text-left bg-black bg-opacity-60 gap-4 w-[80%] lg:w-auto h-full'>
                    <IoLockClosedOutline size={32} className='text-neutral-300' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-neutral-200 font-semibold text-xl'>Script Commands</h2>
                        <p className='font-normal text-neutral-300 text-sm'>
                            Everything is stored
                            encrypted on your local
                            disk, and nothing sensitive
                            is tracked. You and your
                            personal data stay
                            anonymous.
                        </p>
                    </div>
                </div>
                <div className='flex-shrink-0 flex flex-col rounded-md p-5 text-left bg-black bg-opacity-60 gap-4 w-[80%] lg:w-auto h-full'>
                    <GiCpu size={31} className='text-neutral-300' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-neutral-200 font-semibold text-xl'>Make it your own, tailor it to
                            you</h2>
                        <p className='font-normal text-neutral-300 text-sm'>
                            Enable the built-in
                            extensions for an initial
                            productivity boost. Use
                            script commands and our
                            API to build custom
                            extensions to optimize your
                            workflow.
                        </p>
                    </div>
                </div>
                <div className='flex-shrink-0 flex flex-col rounded-md p-5 text-left bg-black bg-opacity-60 gap-4 w-[80%] lg:w-auto h-full'>
                    <HiOutlineCommandLine  size={31} className='text-neutral-300' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-neutral-200 font-semibold text-xl'>Learn once, remember
                            forever</h2>
                        <p className='font-normal text-neutral-300 text-sm'>
                            Inspired by the command
                            line interface, your tools are
                            unified as commands, and
                            follow the same structure to
                            make you more productive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance