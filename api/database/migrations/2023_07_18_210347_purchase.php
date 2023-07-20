<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->string('nfe');
            $table->date('data');
            $table->string('cpf');
            $table->string('discount');
            $table->foreignId('customer_id')->constrained();
            $table->timestamps();//created_at, updated_at
        });
    }

    public function down(): void
    {
        //
    }
};
