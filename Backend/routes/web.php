<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitaController;

Route::get('/', function () {
    return view('welcome');
});


// Route::post('/citas', [CitaController::class, 'store']); // Registrar cita
// Route::get('/citas/estudiante/{estudiante_id}', [CitaController::class, 'citasPorEstudiante']); // Consultar citas de estudiante
// Route::put('/citas/cancelar/{id}', [CitaController::class, 'cancelarCita']); // Cancelar cita


Route::post('/citas', [CitaController::class, 'registrarCita']);

Route::get('/citas/estudiante/{estudiante_id}', [CitaController::class, 'citasPorEstudiante']);
