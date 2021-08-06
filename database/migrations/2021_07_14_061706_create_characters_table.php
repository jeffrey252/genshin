<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->tinyInteger('rarity');
            $table->tinyInteger('vision');
            $table->tinyInteger('weapon');
            $table->unsignedBigInteger('talent_material_id');
            $table->timestamps();

            $table->index('rarity');
            $table->index('vision');
            $table->index('weapon');
            $table->index('talent_material_id');
            $table->foreign('talent_material_id')->references('id')->on('talent_materials');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters');
    }
}
