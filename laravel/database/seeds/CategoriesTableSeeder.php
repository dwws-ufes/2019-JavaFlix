<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesTableSeeder extends Seeder //phpcs:ignore
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name' => 'Animation'],
            ['name' => 'Comedy'],
            ['name' => 'Sci-Fi'],
            ['name' => 'Drama'],
            ['name' => 'Fantasy'],
            ['name' => 'Romance'],
            ['name' => 'Documentary'],
            ['name' => 'Musical'],
            ['name' => 'History'],
            ['name' => 'Horror'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
