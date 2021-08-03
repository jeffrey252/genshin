<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TalentMaterial extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'schedule_id'];

    public function schedule()
    {
        return $this->hasOne('App\Models\Schedule', 'id', 'schedule_id');
    }
}
