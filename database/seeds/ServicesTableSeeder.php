<?php

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        // Create 50 service records
        for ($i = 0; $i < 50; $i++) {
            Service::create([
                'title'         => $faker->title,
                'minutes'   => $faker->paragraph,
                'price'         => $faker->randomNumber(2),
            ]);
        }
    }
}
