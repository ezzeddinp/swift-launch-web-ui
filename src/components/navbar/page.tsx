"use client"
import React, { useState } from 'react';
import { lists } from './data';

interface styleProp {
    className?: string;
}

function Navbar({ className }: styleProp) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            {/* Top Navbar */}
            <div className={`sticky bg-black top-0 left-0 w-full py-6 flex flex-row justify-between items-center bg-transparent ${className} z-20 px-10 lg:px-20`}>
                <h1 className='text-white font-bold text-xl italic'>SwiftLaunch</h1>
                <div className='flex flex-row gap-2 lg:hidden'>
                    {/* Button to open sidebar */}
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className='text-white font-medium text-sm'>
                        Menu
                    </button>
                </div>
                <div className='hidden lg:flex flex-row gap-4'>
                    {lists.map((list) => (
                        <div key={list.name}>
                            <button className='text-neutral-300 hover:text-neutral-100 duration-300 font-medium text-sm'>{list.name}</button>
                        </div>
                    ))}
                </div>
                <div className="hidden lg:flex text-white font-semibold text-sm gap-4">
                    <button>Log in</button>
                    <button>Download</button>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-0 bg-black/25 backdrop-blur bg-opacity-75 transition-transform transform ${isSidebarOpen ? 'translate-x-48' : 'translate-x-full'} lg:hidden z-30`}>
                <div className='flex flex-col p-4'>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className='text-white text-2xl mb-4 mr-14'>
                        &times;
                    </button>
                    <div className='flex flex-col gap-4'>
                        {lists.map((list) => (
                            <a key={list.name} className='text-white text-lg'>
                                {list.name}
                            </a>
                        ))}
                    </div>
                    <div className='mt-4'>
                        <button className='block text-white mb-2'>Log in</button>
                        <button className='block text-white'>Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
