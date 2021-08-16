<?php   

namespace App\Repositories\Api\Abstracts;   

use App\Repositories\Interfaces\EloquentRepositoryInterface; 
use Illuminate\Database\Eloquent\Model;   

use Illuminate\Http\Resources\Json\JsonResource;

abstract class Repository
{     
    /**
    * @param array $attributes
    *
    * @return Model
    */
    //abstract function create(array $attributes);
 
    /**
    * @param $id
    * @return Model
    */
    //abstract function find($id);


    abstract function all();
    abstract function read($id);

}