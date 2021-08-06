<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeaponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weapons', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->tinyInteger('type');
            $table->tinyInteger('rarity');
            $table->unsignedBigInteger('weapon_ascension_material_id');
            $table->timestamps();

            $table->index('type');
            $table->index('rarity');
            $table->index('weapon_ascension_material_id');
            $table->foreign('weapon_ascension_material_id')->references('id')->on('weapon_ascension_materials');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weapons');
    }
}
