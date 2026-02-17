'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 left-0 right-0 mx-auto max-w-7xl px-4 z-50">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg px-6 md:px-8 h-16 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center space-x-8">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:opacity-90 transition duration-200">
                        coinbase
                    </Link>
                    <div className="hidden md:flex space-x-6 text-sm font-medium text-white/90">
                        <span className="cursor-default border-b-2 border-white/80 pb-0.5">Help Center</span>
                    </div>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="#" className="text-sm font-medium text-white hover:text-white/80 transition">Contact us</Link>
                    <button className="bg-white text-[#0052FF] px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition shadow-lg active:scale-95 duration-150">
                        Sign in
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white/90 hover:text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-4 right-4 bg-[#0052FF]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
                    <div className="flex flex-col space-y-2">
                        <Link href="#" className="block px-4 py-3 rounded-lg hover:bg-white/10 text-white text-sm font-medium transition-colors">Help Center</Link>
                        <Link href="#" className="block px-4 py-3 rounded-lg hover:bg-white/10 text-white text-sm font-medium transition-colors">Contact us</Link>
                    </div>
                    <div className="pt-2">
                        <button className="w-full bg-white text-[#0052FF] px-5 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition shadow-sm">
                            Sign in
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
