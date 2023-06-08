<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('model_products', function (Blueprint $table) {
            $table->id();
            $table->string("descripcion", 20);
            $table->unsignedBigInteger("product_id");
            $table->timestamps();
            $table->unsignedBigInteger("typemodel_id");

            $table->foreign('product_id')->references('id')->on('products')->onDelete("cascade");
            $table->foreign("typemodel_id")->references("id")->on('type_models')->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('model_products');
    }
};