<?php

namespace App\Repositories\Api;

use App\Models\Character;
use App\Repositories\Interfaces\CharacterRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Repositories\Api\Abstracts\Repository;
use App\Http\Resources\Character as CharacterResource;


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
       //return $this->model->all();    
   }

   public function read($id)
   {
        return new CharacterResource(Character::find($id));
   }
}