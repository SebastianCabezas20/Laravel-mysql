<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            /*
            protected $fillable = [
        "stock",
        "descripcion",
        "nombre",
        "precio",
        "descuento",
        "brand_id"
    ];*/
            "stock" => fake()->numberBetween(0, 200),
            "descripcion" => fake()->text(150),
            "nombre" => fake()->word(),
            "precio" => fake()->numberBetween(1000, 90000),
            "descuento" => fake()->randomFloat(1, 0, 1),
        ];
    }
}