<?php

namespace App\Http\Resources\Collections;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CharacterCollection extends ResourceCollection
{
    public static $wrap = null;
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // modify identifiers to reflect name of weapon and vision
        $this->collection->map(function($character) {
            $character->weapon = $character->getWeaponLabel();
            $character->vision = $character->getVisionLabel();
        });

        return $this->collection;
    }
}
