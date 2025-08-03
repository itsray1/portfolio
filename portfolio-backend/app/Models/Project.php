<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
     protected $fillable = [
        'title',
        'description',
        'url',
        'tech_stack',
      
        'user_id',
    ];


    protected $casts = [
        'tech_stack' => 'array',
    ];
 
    public function user()
    {
        return $this->belongsTo(User::class);
    }
   

    public function images()
    {
        return $this->hasMany(ProjectImage::class);
    }


}
