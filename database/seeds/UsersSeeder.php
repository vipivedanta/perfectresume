<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        for($i=0;$i<=5;$i++){
        	$faker = Faker::create();
        	$user = new User;
        	$user->first_name = $faker->firstName;
        	$user->last_name = $faker->lastName;
        	$user->email = $faker->email;
        	$user->email_verified_at = date('Y-m-d H:i:s');
        	$user->password = Hash::make('password');
        	$user->direct_signup = 1;
        	$user->save();
        }
    }
}
