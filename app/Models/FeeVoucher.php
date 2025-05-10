<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\ClassModel;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

use Illuminate\Support\Facades\Log;

class FeeVoucher extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'amount',
        'due_date',
        'status',
        'payment_proof_image_url',
        'author_id',
        'user_id',
        'class_id'
    ];

    /** 
     * Relationship: One to One / Has One
     * https://laravel.com/docs/12.x/eloquent-relationships#one-to-one
     */
    public function author(): HasOne
    {
        return $this->hasOne(User::class,  'id', 'author_id');
    }

    /** 
     * Relationship: One to One / Has One
     * https://laravel.com/docs/12.x/eloquent-relationships#one-to-one
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    /** 
     * Relationship: One to One / Has One
     * https://laravel.com/docs/12.x/eloquent-relationships#one-to-one
     */
    public function class(): HasOne
    {
        return $this->hasOne(ClassModel::class, 'id', 'class_id');
    }


    /** 
     * Relationship: One to One / Has One
     * https://laravel.com/docs/12.x/eloquent-relationships#one-to-one
     */
    public function tutor(): HasOneThrough
    {
        
        // First get the class, then get its author
        return $this->hasOneThrough(
            User::class,        // The model we want to access (tutor)
            ClassModel::class,   // The intermediate model
            'id',               // Foreign key on classes table
            'id',               // Foreign key on users table
            'class_id',         // Local key on fee_vouchers table
            'author_id'         // Local key on classes table
        );
        

    }

}