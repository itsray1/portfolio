<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model
{
        protected $fillable = [
        'project_id',
        'image_url',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
