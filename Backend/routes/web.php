<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitaController;

Route::get('/', function () {
    return view('welcome');
});


Route::post('/citas', [CitaController::class, 'registrarCita']); // Agendar cita
Route::get('/citas/estudiante/{estudiante_id}', [CitaController::class, 'citasPorEstudiante']); //Ver cita
Route::delete('/citas/{citasId}', [CitaController::class, 'eliminarCita']); // Cancelar cita
Route::get('/medicos-total', [CitaController::class, 'medicosTotal']); // Ver medicos
