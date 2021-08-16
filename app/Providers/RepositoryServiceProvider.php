<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\CharacterRepositoryInterface; 
use App\Repositories\Api\CharacterRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //$this->app->bind(Repository::class, CharacterRepository::class);
        //$this->app->bind(CharacterRepositoryInterface::class, CharacterRepository::class);
        $this->app->bind(CharacterRepositoryInterface::class, CharacterRepository::class);
    }
}
