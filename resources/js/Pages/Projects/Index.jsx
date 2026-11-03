import React from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';

export default function Index({ projects }) {
    const { flash } = usePage().props;

    const handleDelete = (id, title) => {
        if (confirm(`Are you sure you want to delete "${title}"?`)) {
            router.delete(route('projects.destroy', id));
        }
    };

    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4 font-sans">
            <Head title="Manage Projects | Admin" />
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Project Management</h1>
                        <p className="text-slate-400 text-sm mt-1">Manage dynamic portfolio cards in the database</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/" className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition">View Public Site</Link>
                        <Link href={route('projects.create')} className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition">+ Add Project</Link>
                    </div>
                </div>

                {flash?.success && (
                    <div className="mb-6 p-4 rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-medium">
                        {flash.success}
                    </div>
                )}

                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                    <table className="w-full text-left text-slate-300 text-sm">
                        <thead className="bg-slate-800/80 text-cyan-400 uppercase text-xs">
                            <tr>
                                <th className="p-4">Image</th>
                                <th className="p-4">Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Date Completed</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {projects.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-800/40 transition">
                                    <td className="p-4">
                                        <img src={`/storage/${item.image}`} alt={item.title} className="w-16 h-12 object-cover rounded-lg border border-slate-700" />
                                    </td>
                                    <td className="p-4 font-semibold text-slate-100">{item.title}</td>
                                    <td className="p-4">
                                        <span className="px-2.5 py-1 bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs uppercase font-bold">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="p-4">{item.date_completed}</td>
                                    <td className="p-4 text-right space-x-2">
                                        <Link href={route('projects.edit', item.id)} className="px-3 py-1.5 bg-blue-600/20 text-blue-400 border border-blue-500/40 rounded-lg hover:bg-blue-600/40 transition">Edit</Link>
                                        <button onClick={() => handleDelete(item.id, item.title)} className="px-3 py-1.5 bg-red-600/20 text-red-400 border border-red-500/40 rounded-lg hover:bg-red-600/40 transition cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-6 text-center text-slate-500">No projects found in database.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}