<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*DB::table("brands")->insert([
            "nombre" => "marca generica",
            "created_at" => date(now()),
            "updated_at" => date(now()),

        ]);

        Brand::create(["nombre" => "Marca generica 2"]);

        $brand = new Brand();
        $brand->nombre = "Marca generica 3";
        $brand->save();*/

        Brand::factory()->count(3)->has(Product::factory()->count(3))->create();
    }
}