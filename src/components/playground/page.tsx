import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { LuFileCode2, LuHammer } from 'react-icons/lu';
import { TiArrowRight } from 'react-icons/ti';

function Playground() {
    return (
        <div className='flex flex-col text-white text-4xl items-center justify-center gap-2 py-9 pt-20'>
            <div className='flex flex-col gap-4 text-center items-center px-4'>
                <div className='flex flex-row items-center'>
                    <h2 className='font-medium text-gray-100 text-2xl px-1 lg:text-[40px]'>
                        Your <i>SwiftLaunch</i>. <br />Your playground.
                    </h2>
                </div>
                <p className='font-normal text-gray-400 text-sm px-9 lg:max-w-xl'>
                    Productivity is unique to everyone. Personalization is key. Extend <i>SwiftLaunch</i> the way
                    you want to, and build tools for you and your team with the API.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center p-5 w-full h-full'>
                <div className='flex flex-col rounded-md gap-3 col-span-2 lg:col-span-3 p-8 text-left bg-black bg-opacity-60 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
                    <LuHammer size={34} className='text-gray-100' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-gray-100 font-semibold text-xl'>Build what you’ve always wanted</h2>
                        <p className='font-normal text-gray-300 text-sm'>
                            Start building your perfect tools with the
                            <i>SwiftLaunch</i> API, and streamline your workflows.
                            Simply create Extensions with ease and
                            publish directly to the <i>SwiftLaunch</i> Store
                            seamlessly.
                        </p>
                        <div className='font-normal text-gray-300 text-sm'>
                            <br />Get started with the integrated developer
                            tools in <i>SwiftLaunch</i> and build your first
                            extension in no time.
                        </div>
                    </div>
                    <div className='items-start'>
                        <button className='ring-gray-500 bg-opacity-20 backdrop-blur-sm py-2 px-5 bg-gray-800 text-gray-100 font-medium text-sm rounded-md'>
                            Learn more
                        </button>
                    </div>
                </div>
                <div className='flex flex-col rounded-md gap-3 lg:col-span-2 h-full p-5 text-left bg-black bg-opacity-60 border border-dashed border-gray-700 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
                    <LuFileCode2 size={29} className='text-gray-100' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-gray-100 font-semibold text-xl'>Open source community</h2>
                        <p className='font-normal text-gray-300 text-sm'>
                            Build in the open and collaborate with other
                            Developers on yours and their Extensions.
                            Contribute as you’d like, and help others by
                            building on top of existing Extensions.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col rounded-md gap-3 h-full p-4 text-left bg-black bg-opacity-60 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
                    <HiOutlineBookOpen size={30} className='text-gray-100' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-gray-100 font-semibold text-xl'>Be part of the story</h2>
                        <p className='font-normal text-gray-300 text-sm'>
                            We listen to our community and build 
                            <i className='font-semibold'>SwiftLaunch</i> in collaboration with developers, to
                            build the best product and developer
                            experience across the platform.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center justify-center font-normal text-gray-300 text-sm'>
                <button className='bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium py-1 px-3 rounded'>
                    Explore the docs
                </button>
                <TiArrowRight className='text-gray-300' />
            </div>
        </div>
    );
}

export default Playground;
