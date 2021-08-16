<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Http\Resources\Character as CharacterResource;


class Character extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'rarity', 'vision', 'weapon', 'talent_material_id'];

    public function getRarityOptions()
    {
        return [
            4 => 'four stars',
            'five stars',
        ];
    }

    public function getVisionOptions()
    {
        return [
            1 => 'Pyro',
            'Cryo',
            'Hydro',
            'Electro',
            'Anemo',
            'Geo'
        ];
    }

    public function getWeaponTypes()
    {
        return [
            1 => 'Sword',
            'Claymore',
            'Bow',
            'Polearm',
            'Catalyst'
        ];
    }

    public function talentMaterial()
    {
        return $this->hasOne(\App\Models\TalentMaterial::class, 'id', 'talent_material_id');
    }

    public function getWeaponLabel()
    {
        return isset($this->getWeaponTypes()[$this->weapon]) ? $this->getWeaponTypes()[$this->weapon] : 'undefined';
    }
    
    public function getVisionLabel()
    {
        return isset($this->getVisionOptions()[$this->vision]) ? $this->getVisionOptions()[$this->vision] : 'undefined';
    }

    public function transformForApi()
    {
        $this->vision = $this->getVisionLabel();
        $this->weapon = $this->getWeaponLabel();
        return $this;
    }

    public function toResource()
    {
        return new CharacterResource($this);
    }
}