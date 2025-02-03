<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cita', function (Blueprint $table) {
            $table->id();
            $table->foreignId('estudiante_id')->constrained('estudiante')->onDelete('cascade');
            $table->foreignId('medico_id')->constrained('medico')->onDelete('cascade');
            $table->date('fecha');
            $table->time('hora');
            $table->enum('estado', ['pendiente', 'confirmada', 'cancelada', 'completada'])->default('pendiente');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cita');
    }
};
