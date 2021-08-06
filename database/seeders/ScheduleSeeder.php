<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $days = [
            ['name' => 'Monday / Thursday'],
            ['name' => 'Tuesday / Friday'],
            ['name' => 'Wednesday / Saturday'],
        ];

        DB::table('schedules')->insert($days);
    }
}
