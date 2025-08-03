<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{



     public function getUser($username)
    {
        $user = User::where('username', $username)->firstOrFail();

        return response()->json([
            'message' => 'User profile retrieved successfully',
            'username' => $user->username,
            'name' => $user->name,
            'email' => $user->email,
        ]);
    }

    public function getAbout($username)
    {
        $user = User::where('username', $username)->firstOrFail();

        return response()->json([
            'about_me' => $user->aboutMe,
        ]);
    }

  public function getSkills($username)
{
    $user = User::where('username', $username)->firstOrFail();

 
    $skills = $user->skills()->with('category')->get();

  
    $categories = $skills->pluck('category')->unique('id')->values();

    return response()->json([
        'skills' => $skills,
        'categories' => $categories,
    ]);
}

    public function getProjects($username)
    {
         $user = User::where('username', $username)->firstOrFail();

    return response()->json([
        'projects' => $user->projects()->with('images')->get(),
        ]);
    }

    public function getExperiences($username)
    {
        $user = User::where('username', $username)->firstOrFail();

        return response()->json([
            
            'experiences' => $user->workExperiences,
        ]);
    }

    public function getContacts($username)
    {
        $user = User::where('username', $username)->firstOrFail();

        return response()->json([
            'contacts' => $user->contacts,
        ]);
    }

        public function checkUserExists($username)
{
    $exists = User::where('username', $username)->exists();

    if ($exists) {
        return response()->json(['message' => 'User exists'], 200);
    }

    $availableUsernames = User::pluck('username');

    return response()->json([
        'message' => 'User not found',
        'available_usernames' => $availableUsernames,
    ], 404);
}
}
