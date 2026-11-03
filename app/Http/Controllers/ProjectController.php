<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'          => 'required|string|max:255|unique:projects,title',
            'category'       => 'required|string|in:2d,3d',
            'description'    => 'required|string|min:10',
            'image'          => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'date_completed' => 'required|date',
        ], [
            'title.unique'   => 'This project title already exists. Please choose a unique name.',
            'image.max'      => 'The uploaded project image must not exceed 2MB in size.',
            'description.min'=> 'The description must be at least 10 characters long.',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = $path;
        }

        Project::create($validated);

        return redirect()->route('projects.index')->with('success', 'Project created successfully!');
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project
        ]);
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title'          => 'required|string|max:255|unique:projects,title,' . $project->id,
            'category'       => 'required|string|in:web,2d,3d',
            'description'    => 'required|string|min:10',
            'image'          => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'date_completed' => 'required|date',
        ], [
            'title.unique'   => 'This project title already exists.',
            'image.max'      => 'The image must not exceed 2MB.',
        ]);

        if ($request->hasFile('image')) {
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }
            $validated['image'] = $request->file('image')->store('projects', 'public');
        } else {
            unset($validated['image']);
        }

        $project->update($validated);

        return redirect()->route('projects.index')->with('success', 'Project updated successfully!');
    }

    public function destroy(Project $project)
    {
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully!');
    }
}