import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import ProjectForm from '@/Components/ProjectForm';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category: '',
        description: '',
        date_completed: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('projects.store'));
    };

    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4 font-sans">
            <Head title="Create Project" />
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-cyan-400">Add New Project</h1>
                    <Link href={route('projects.index')} className="text-slate-400 hover:text-white transition">← Back to List</Link>
                </div>
                <ProjectForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    handleSubmit={handleSubmit}
                    submitLabel="Save Project"
                />
            </div>
        </div>
    );
}