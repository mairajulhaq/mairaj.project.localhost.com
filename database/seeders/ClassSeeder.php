<?php

namespace Database\Seeders;

use App\Models\ClassModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

use Carbon\Carbon;

class ClassSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $authorId = 1; // Replace with a valid user ID from your 'users' table

        $classes = [
            [
                'title' => 'Algebra Essentials',
                'description' => 'Learn the fundamentals of algebra including variables, expressions, and equations.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Calculus Mastery',
                'description' => 'Dive deep into limits, derivatives, and integrals with practical applications.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Newtonian Mechanics',
                'description' => 'Understand the laws of motion, gravity, and energy in classical physics.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Thermodynamics and Heat',
                'description' => 'Explore the principles of heat, temperature, and energy transfer.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Organic Chemistry Basics',
                'description' => 'Study carbon-based compounds and their reactions in organic chemistry.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Atoms and Molecules',
                'description' => 'Understand atomic structure, chemical bonds, and molecular interactions.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Cell Biology',
                'description' => 'Explore cell structure, function, and reproduction.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Genetics and Evolution',
                'description' => 'Learn how traits are passed and how species evolve over time.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'English Grammar Deep Dive',
                'description' => 'Master advanced grammatical structures for fluent writing and speaking.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Creative Writing Workshop',
                'description' => 'Improve storytelling skills and write compelling narratives.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Intro to Programming with Python',
                'description' => 'Learn programming basics using Python: variables, loops, and functions.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Data Structures & Algorithms',
                'description' => 'Efficiently solve problems using arrays, trees, graphs, and sorting algorithms.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'World War II Explained',
                'description' => 'Analyze the causes, events, and consequences of World War II.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 7,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Ancient Civilizations',
                'description' => 'Explore Mesopotamia, Egypt, Greece, and early human societies.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 7,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Physical Geography',
                'description' => 'Learn about landscapes, climate, and natural processes shaping Earth.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Human Geography Fundamentals',
                'description' => 'Study population, urbanization, and cultural geography.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Introduction to Microeconomics',
                'description' => 'Understand supply, demand, and how markets function.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Macroeconomic Principles',
                'description' => 'Study national income, inflation, and fiscal policy.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Introduction to Psychology',
                'description' => 'Learn about cognition, behavior, and mental processes.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Developmental Psychology',
                'description' => 'Understand how humans grow and change over a lifetime.',
                'status' => 'active',
                'fee_amount' => rand(250, 500), 
                'author_id' => rand(2, 4),
                'category_id' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add similar entries for categories 11-15 if needed...
        ];
        

        foreach ($classes as $class_data) {
            $class = ClassModel::create($class_data);

             // Attach fifteen random users to the category
            // $class->users()->attach([
            //     rand(5, 20), // Assuming you have 15 users in your database
            //     rand(5, 20),
            //     rand(5, 20),
            //     rand(5, 20),
            //     rand(5, 20),
            //     rand(5, 20),
            //     rand(5, 20),
            //     rand(5, 20),
            //     rand(5, 20),
            //     rand(5, 20),
            // ], ['created_at' => now(), 'updated_at' => now()]);


            /**
             * range(1, 100) creates an array from 1 to 100.
             * shuffle() randomizes the order.
             * take(10) gets the first 10 numbers.
             * values()->all() returns a plain PHP array.
             */
            $random_users_ids = collect(range(5, 20))
            ->shuffle()
            ->take(10)
            ->values()
            ->all();

            $class->users()->attach( $random_users_ids, ['created_at' => now(), 'updated_at' => now()]);


        }

    }

    
}
