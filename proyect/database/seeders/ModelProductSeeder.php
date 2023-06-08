<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\ModelProduct;
use App\Models\Product;
use App\Models\TypeModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModelProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ModelProduct::factory()->count(2)->for(Product::factory()->for(Brand::factory()))->for(TypeModel::factory())->create();
    }
}