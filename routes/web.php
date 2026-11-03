<?php

use App\Http\Controllers\ProjectController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Portfolio Landing Page
Route::get('/', function () {
    return Inertia::render('Portfolio', [
        'projects' => Project::all()
    ]);
})->name('portfolio');

// Resource Routes para sa Project CRUD
Route::resource('projects', ProjectController::class);