import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                    &lt;DanIvanPascual /&gt;
                </Link>

                <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
                    <a href="#about" className="hover:text-cyan-400 transition">About</a>
                    <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
                    <Link href="/projects" className="px-4 py-1.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded-xl hover:bg-cyan-500/30 transition">Manage Projects</Link>
                </nav>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2.5 rounded-xl bg-slate-800/80 border border-cyan-500/30 text-cyan-400 cursor-pointer"
                >
                    <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
                </button>
            </div>

            {mobileOpen && (
                <nav className="md:hidden border-t border-cyan-500/20 bg-slate-900/95 px-4 py-4 flex flex-col gap-3 font-medium">
                    <a href="#about" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-800 text-slate-200">About</a>
                    <a href="#skills" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-800 text-slate-200">Skills</a>
                    <a href="#projects" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-800 text-slate-200">Projects</a>
                    <a href="#contact" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200">Contact</a>
                    <Link href="/projects" className="py-2 text-cyan-400 font-bold">Manage Projects</Link>
                </nav>
            )}
        </header>
    );
}