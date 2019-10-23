<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder //phpcs:ignore
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Artisan::call('passport:install');
        $this->call(UsersTableSeeder::class);
        $this->call(ShowsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
    }
}
