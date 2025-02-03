<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use App\Models\Medico;
use App\Models\Estudiante;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CitaController extends Controller
{

    // get citas por estudiantes
    public function citasPorEstudiante($estudiante_id): JsonResponse
    {
        $citas = Cita::where('estudiante_id', $estudiante_id)->get();
        return response()->json($citas);
    }

    // get medicos
    public function medicosTotal(): JsonResponse
    {
        $medicos = Medico::all();
        return response()->json($medicos);
    }

    // get estudiantes
    public function estudiantesTotal(): JsonResponse
    {
        $estudiante = Estudiante::all();
        return response()->json($estudiante);
    }

    // registrar citas
    public function registrarCita(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'estudiante_id' => 'required|exists:estudiante,id',
            'medico_id' => 'required|exists:medico,id',  // `medico_id` es obligatorio
            'fecha' => 'required|date',
            'hora' => 'required',
            'estado' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ], 400);
        }

        $cita = Cita::create([
            'estudiante_id' => $request->input('estudiante_id'),
            'medico_id' => $request->input('medico_id'),
            'fecha' => $request->input('fecha'),
            'hora' => $request->input('hora'),
            'estado' => $request->input('estado'),
        ]);

        return response()->json([
            'message' => 'Cita registrada con éxito',
            'cita' => $cita
        ], 201);
    }

    // eliminar citas
    public function eliminarCita($id): JsonResponse
    {
        $cita = Cita::find($id);

        if (!$cita) {
            return response()->json([
                'error' => 'Cita no encontrada'
            ], 404);
        }

        $cita->delete();

        return response()->json([
            'message' => 'Cita eliminada con éxito'
        ], 200);
    }
}
