"use client";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className="bg-blue-950 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className=" flex items-center text-2xl font-bold ">
                    <img src="/images/logo.png" width={100}></img>
                    <h2 >NEVO TECH</h2>
                </div>


                {/* Navigation links */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/components/about.tsx" className="hover:text-gray-300">About</Link>
                    <Link href="/components/productpage.tsx" className="hover:text-gray-300">Product</Link>
                    <Link href="/components/contect.tsx" className="hover:text-gray-300">Contact</Link>
                    <Link href="/components/login.tsx" className="hover:text-gray-300">Login</Link>
                </nav>
                {/* Search bar */}
                <div className="hidden md:block">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="place-items-end p-2 rounded-md text-white w-96"
                    />
                </div>

                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                    <button onClick={toggleNav}>
                        {navOpen ? (
                            <AiOutlineClose className="text-2xl" />
                        ) : (
                            <AiOutlineMenu className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${navOpen ? 'block' : 'hidden'
                    } md:hidden mt-4 space-y-2 bg-green-900 p-4 rounded-md`}
            >
                <Link href="/" className= "block hover:text-gray-300">Home</Link>
                <Link href="/" className="block hover:text-gray-300">About</Link>
                <Link href="#" className="block hover:text-gray-300">Product</Link>
                <Link href="/components/contect.tsx" className="block hover:text-gray-300">Contact</Link>
                <Link href="/components/login.tsx" className="block hover:text-gray-300">Login</Link>
            </div>
        </header>
    );
}

  