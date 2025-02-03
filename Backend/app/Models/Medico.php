<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    // use HasFactory;

    protected $table = 'medico';
    public $timestamps = false;
    // protected $fillable = [
    //     'nombre',
    //     'especialidad',
    // ];

    // public function citas()
    // {
    //     return $this->hasMany(Cita::class);
    // }
}