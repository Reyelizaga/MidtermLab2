import React from 'react';

export default function ProjectForm({ data, setData, errors, processing, handleSubmit, submitLabel }) {
    return (
        <form onSubmit={handleSubmit} className="space-y-5 bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-[0_0_25px_rgba(0,0,0,0.5)]">
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Project Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 focus:border-cyan-400 outline-none"
                    placeholder="e.g. Cyberpunk Portfolio App"
                />
                {errors.title && <p className="text-red-400 text-xs mt-1.5">{errors.title}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Category</label>
                <select
                    value={data.category}
                    onChange={(e) => setData('category', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 focus:border-cyan-400 outline-none"
                >
                    <option value="">Select Category</option>
                    <option value="web">Web Development</option>
                    <option value="2d">2D Vector Art</option>
                    <option value="3d">3D Blender Art</option>
                </select>
                {errors.category && <p className="text-red-400 text-xs mt-1.5">{errors.category}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Description</label>
                <textarea
                    rows="4"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 focus:border-cyan-400 outline-none"
                    placeholder="Describe your project details..."
                />
                {errors.description && <p className="text-red-400 text-xs mt-1.5">{errors.description}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Date Completed</label>
                <input
                    type="date"
                    value={data.date_completed}
                    onChange={(e) => setData('date_completed', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 focus:border-cyan-400 outline-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                />
                {errors.date_completed && <p className="text-red-400 text-xs mt-1.5">{errors.date_completed}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Project Image</label>
                <input
                    type="file"
                    onChange={(e) => setData('image', e.target.files[0])}
                    className="w-full px-4 py-2 bg-slate-950 text-slate-400 rounded-xl border border-slate-800 file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-950 file:text-cyan-300 hover:file:bg-cyan-900 cursor-pointer"
                />
                {errors.image && <p className="text-red-400 text-xs mt-1.5">{errors.image}</p>}
            </div>

            <button
                type="submit"
                disabled={processing}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all cursor-pointer"
            >
                {processing ? 'Saving...' : submitLabel}
            </button>
        </form>
    );
}