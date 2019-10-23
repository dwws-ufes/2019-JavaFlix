<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder //phpcs:ignore
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'     => 'Admin',
            'email'    => 'admin@admin.com',
            'is_admin' => 1,
            'password' => bcrypt('secret'),
        ]);

        User::create([
            'name'     => 'User',
            'email'    => 'user@user.com',
            'is_admin' => 0,
            'password' => bcrypt('secret'),
        ]);
    }
}
