'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-black text-white tracking-tighter hover:opacity-80 transition">
          Ehsan<span className="text-blue-600">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#services" className="hover:text-white transition-colors duration-200">
            Services
          </Link>
          <Link href="#case-studies" className="hover:text-white transition-colors duration-200">
            Case Studies
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors duration-200">
            Pricing
          </Link>
        </div>

        {/* CTA Button */}
        <a 
          href="https://wa.me/923185164128" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Let&apos;s Talk
        </a>
        
      </div>
    </nav>
  );
}