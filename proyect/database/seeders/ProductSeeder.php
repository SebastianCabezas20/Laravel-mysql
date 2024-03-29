<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\ModelProduct;
use App\Models\Product;
use App\Models\Specification;
use App\Models\TypeModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Product::factory()->count(2)->for(Brand::factory())->create();
        Product::factory()->count(2)->for(Brand::factory())->has(Specification::factory()->count(2))->has(ModelProduct::factory()->count(4)->for(TypeModel::factory()))->hasAttached(Category::factory()->count(4))->create();

    }
}