<?php

namespace Database\Seeders;

use App\Models\ClassModel;
use App\Models\FeeVoucher;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

use Carbon\Carbon;

class FeeVouchersSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $classes = ClassModel::with('category', 'quizzes', 'author', 'users')->get();
        
        foreach ($classes as $class) {
            foreach( $class->users as $user ){
                $fee_voucher = FeeVoucher::create([
                    'title' => "Fee Voucher - user:{$user->name} - class:{$class->title}",
                    'description' => "This Fee Voucher is generated for user:{$user->name} regarding enrollment into the class:{$class->title}.",
                    'amount' => $class->fee_amount,
                    'due_date' => fake()->dateTimeBetween('now', '+30 days', 'Asia/Karachi')->format('Y-m-d'),
                    'status' => 'unpaid',
                    'payment_proof_image_url' => '',
                    'author_id' => 1,
                    'user_id' => $user->id,
                    'class_id' => $class->id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

    }

    
}
