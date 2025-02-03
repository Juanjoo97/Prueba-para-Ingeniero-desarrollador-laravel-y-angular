<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;

    protected $table = 'estudiante';
    
    protected $fillable = [
        'nombre',
        'correo',
        'programa_academico',
    ];

    public function citas()
    {
        return $this->hasMany(Cita::class);
    }
}