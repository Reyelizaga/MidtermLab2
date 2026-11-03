import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Portfolio({ projects }) {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans overflow-x-hidden relative">
            <Head title="Team Portfolio | IT ELEC01" />

            {/* Ambient Background Glow Blobs */}
            <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="fixed top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <Navbar />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section id="hero" className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 rounded-full mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        IT ELEC01 Midterm Project (Pair Programming)
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                        Developed by <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">Dan Ivan & John Rey</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        A dynamic full-stack web application built with Laravel 11, Inertia.js, React, and Tailwind CSS featuring cyberpunk aesthetics and complete database CRUD operations.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#projects" className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all">
                            Explore Projects
                        </a>
                        <Link href="/projects" className="px-7 py-3.5 bg-slate-900 border border-slate-700 text-slate-200 font-medium rounded-xl hover:bg-slate-800 transition-all">
                            Manage CRUD Panel
                        </Link>
                    </div>
                </section>

                {/* MEET THE DEVELOPERS SECTION */}
                <section id="about" className="bg-slate-900/60 backdrop-blur-md py-16 border-y border-cyan-500/20 relative">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Meet the Developers</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Developer 1 - Dan Ivan V. Pascual */}
                            <div className="bg-slate-900/90 p-8 rounded-2xl border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col items-center text-center">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400 bg-slate-950 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                    <img src="/images/profile.jpg" alt="Dan Ivan Pascual" className="w-full h-full object-cover object-top" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-100">Dan Ivan V. Pascual</h3>
                                <p className="text-cyan-400 text-sm font-medium mb-3">Lead Developer & Full-Stack Architect</p>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    Specializes in Laravel backend architecture, React frontend integration, and database management systems.
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center text-xs">
                                    <span className="px-2.5 py-1 bg-cyan-950 text-cyan-300 border border-cyan-500/30 rounded-lg">Laravel</span>
                                    <span className="px-2.5 py-1 bg-cyan-950 text-cyan-300 border border-cyan-500/30 rounded-lg">React</span>
                                    <span className="px-2.5 py-1 bg-cyan-950 text-cyan-300 border border-cyan-500/30 rounded-lg">Tailwind</span>
                                </div>
                            </div>

                            {/* Developer 2 - John Rey P. Elizaga */}
                            <div className="bg-slate-900/90 p-8 rounded-2xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.15)] flex flex-col items-center text-center">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-purple-400 bg-slate-950 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                                    <img src="/images/profile2.jpg" alt="John Rey P. Elizaga" className="w-full h-full object-cover object-top" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-100">John Rey P. Elizaga</h3>
                                <p className="text-purple-400 text-sm font-medium mb-3">UI/UX Designer & Frontend Specialist</p>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    Specializes in cyberpunk visual styling, layout responsiveness, 2D vector assets, and 3D modeling integration.
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center text-xs">
                                    <span className="px-2.5 py-1 bg-purple-950 text-purple-300 border border-purple-500/30 rounded-lg">UI/UX Design</span>
                                    <span className="px-2.5 py-1 bg-purple-950 text-purple-300 border border-purple-500/30 rounded-lg">2D Vector</span>
                                    <span className="px-2.5 py-1 bg-purple-950 text-purple-300 border border-purple-500/30 rounded-lg">Blender 3D</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DYNAMIC PROJECTS SECTION */}
                <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</h2>
                            <p className="text-slate-400 mt-1">Filter portfolio projects by category.</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {[
                                { key: 'all', label: 'All' },
                                { key: 'web', label: 'Web Development' },
                                { key: '2d', label: '2D Vector Art' },
                                { key: '3d', label: '3D Art' }
                            ].map((filter) => (
                                <button
                                    key={filter.key}
                                    type="button"
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`px-4 py-2 text-sm rounded-xl font-medium cursor-pointer transition uppercase ${
                                        activeFilter === filter.key
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                            : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/40'
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <article key={project.id} className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 flex flex-col group">
                                <div className="relative overflow-hidden h-52">
                                    <img src={`/storage/${project.image}`} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-bold text-xl mb-1 text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <p className="text-xs text-cyan-400 font-medium mb-3">Completed: {project.date_completed}</p>
                                    <p className="text-slate-300 text-sm mb-5 flex-grow leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 text-xs font-semibold">
                                        <span className="px-2.5 py-1 bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 rounded-lg uppercase">
                                            {project.category === 'web' ? 'Web Development' : project.category === '2d' ? '2D Vector Art' : '3D Art'}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                        {filteredProjects.length === 0 && (
                            <p className="col-span-3 text-center text-slate-500 py-10">No projects found for this category.</p>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}