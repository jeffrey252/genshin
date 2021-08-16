<?php
namespace App\Repositories\Interfaces;

use App\Model\Character;
use Illuminate\Http\Resources\Json\JsonResource;

interface CharacterRepositoryInterface
{
   public function read($id);
}