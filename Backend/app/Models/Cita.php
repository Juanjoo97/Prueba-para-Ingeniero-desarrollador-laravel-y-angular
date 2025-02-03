<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

    // Desactivar los timestamps automáticos
    public $timestamps = false;

    protected $table = 'citas';

    protected $fillable = [
        'estudiante_id',
        'medico_id',
        'fecha',
        'hora',
        'estado',
    ];

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class, 'estudiante_id');
    }

    public function medico()
    {
        return $this->belongsTo(Medico::class, 'medico_id');
    }
}
