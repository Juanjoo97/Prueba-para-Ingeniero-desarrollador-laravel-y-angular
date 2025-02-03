<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CitaController extends Controller
{
    public function citasPorEstudiante($estudiante_id): JsonResponse
    {
        $citas = Cita::where('estudiante_id', $estudiante_id)->get();
        return response()->json($citas);
    }

    public function registrarCita(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'estudiante_id' => 'required|exists:estudiantes,id',
            'fecha' => 'required|date',
            'hora' => 'required',
            'estado' => 'required boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ], 400);
        }

        $cita = Cita::create([
            'estudiante_id' => $request->estudiante_id,
            'fecha' => $request->fecha,
            'hora' => $request->hora,
            'estado' => $request->estado,
        ]);

        return response()->json([
            'message' => 'Cita registrada con éxito',
            'cita' => $cita
        ], 201);
    }
}
