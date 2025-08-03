<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PortfolioController ;

Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});

Route::prefix('profile/{username}')->group(function () {

    Route::get('/', [PortfolioController ::class, 'getUser']);
    Route::get('/about', [PortfolioController ::class, 'getAbout']);
    Route::get('/skills', [PortfolioController ::class, 'getSkills']);
    Route::get('/projects', [PortfolioController ::class, 'getProjects']);
    Route::get('/experiences', [PortfolioController ::class, 'getExperiences']);
    Route::get('/contacts', [PortfolioController::class, 'getContacts']);
    Route::get('/check', [PortfolioController::class, 'checkUserExists']);
});

