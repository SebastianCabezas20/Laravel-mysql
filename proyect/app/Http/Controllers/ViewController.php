<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\TypeModel;
use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function createProduct()
    {
        return [
            "marcas" => Brand::all(),
            "tipo_modelos" => TypeModel::all(),
            "categorias" => Category::all()

        ];
    }
}