<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use Illuminate\Support\Facades\Log;

class ClassModel extends Model
{

    // Explicitly specify the table name if it doesn't follow Laravel's naming convention
    protected $table = 'classes'; 

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'status',
        'payment_proof_image_url',
        'author_id',
        'category_id',
    ];

}