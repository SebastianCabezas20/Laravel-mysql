<?php

namespace Database\Seeders;


use App\Models\Brand;
use App\Models\Product;
use App\Models\Specification;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpecificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Specification::factory()->count(3)->for(Product::factory()->for(Brand::factory()))->create();
    }
}