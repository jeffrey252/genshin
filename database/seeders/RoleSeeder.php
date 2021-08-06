<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RoleSeeder extends Seeder
{

    const ADMIN_ROLE_ID = 'admin';
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('roles')->insert([
            'user_id' => 1,
            'role'=> self::ADMIN_ROLE_ID,
        ]);
    }
}
