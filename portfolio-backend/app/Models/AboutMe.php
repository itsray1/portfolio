<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutMe extends Model
{
     protected $fillable = [
        'first_name',
        'last_name',
        'bio',
        'image_url',
        'location',
        'cv_url',
        'email',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
