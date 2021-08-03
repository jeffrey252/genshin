<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('characters')->insert([
            'name' => 'Diluc',
            'rarity' => 5,
            'vision' => 1,
            'weapon' => 2,
        ]);
    }
}
