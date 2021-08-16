<?php

namespace App\Repositories\Api;

use App\Models\Character;
use App\Repositories\Interfaces\CharacterRepositoryInterface;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Repositories\Api\Abstracts\Repository;
use App\Http\Resources\Character as CharacterResource;
use App\Http\Resources\Collections\CharacterCollection;
use Illuminate\Support\Facades\DB;

class CharacterRepository extends Repository implements CharacterRepositoryInterface
{

   /**
    * UserRepository constructor.
    *
    * @param User $model
    */
   /**
    * @return Collection
    */
   public function all()
   {
       return DB::table('characters')->get();
   }

   public function read($id): JsonResource
   {
        return new CharacterResource(Character::find($id));
   }
}