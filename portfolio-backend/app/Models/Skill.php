<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'name',
        'level',
        'progress',
        'icon',
        'category_id',
        'user_id',

    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
     public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
