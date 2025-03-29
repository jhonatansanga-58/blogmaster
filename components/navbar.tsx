'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 w-full bg-blue-500 text-white shadow-xl z-50 border-gray-200'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href='/' className='text-2xl font-bold'>
                    BlogMaster
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type='button'
                    className='sm:hidden text-gray-500 hover:bg-gray-100
                    focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1'
                >
                    <svg
                        className='w-5 h-5 text-gray-300'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                    </svg>
                    <span className='sr-only'>Search</span>
                </button>

                <div className={`relative sm:block ${isOpen ? 'block' : 'hidden'}`}>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                        <svg
                            className='w-4 h-4 text-gray-500'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 20'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                            />
                        </svg>
                        <span className='sr-only'>Search icon</span>
                    </div>
                    <input
                        type='text'
                        id='search-navbar'
                        className='block w-full p-2 ps-10 text-sm text-gray-900
                        border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500'
                        placeholder='Search...'
                    ></input>
                </div>
            </div>
        </nav>
    );
}
