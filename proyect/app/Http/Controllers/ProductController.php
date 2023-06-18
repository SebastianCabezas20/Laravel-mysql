<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Models\TypeModel;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $product = Product::create([
            "nombre" => $request->producto["nombre"],
            "stock" => $request->producto["stock"],
            "precio" => $request->producto["precio"],
            "descripcion" => $request->producto["descripcion"],
            "descuento" => $request->producto["descuento"],
            "brand_id" => $request->producto["brand_id"]
        ]);
        //Insercion de especificaciones segun el producto
        $product->specifications()->createMany($request->especificaciones);




        //Enlace de modelos, tipo de modelo y productos
        $modelos = $request->modelo["modelos"];
        $product->modelproducts()->createMany(array_map(function ($modelo) use ($request) {
            return [
                'typemodel_id' => $request->modelo["tipo"],
                "descripcion" => $modelo

            ];
        }, $modelos));

        $categorias = $request->categorias;

        foreach ($categorias as $categoria) {
            $product->categories()->attach($categoria["id"]);
        }

        //Insercion de categorias segun producto
        return $product->categories()->createMany($request->categoriasNuevas);







    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {

        return [
            "producto" => $product,
            "specs" => $product->specifications()->get(),
            "modelo" => $product->modelproducts()->with("typeModel")->get(),
            "categorias" => $product->categories()->get()
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->nombre = $request->nombre ? $request->nombre : $product->nombre;
        $product->stock = $request->stock ? $request->stock : $product->stock;
        $product->descripcion = $request->descripcion ? $request->descripcion : $product->descripcion;
        $product->precio = $request->precio ? $request->precio : $product->precio;
        $product->descuento = $request->descuento ? $request->descuento : $product->descuento;
        $product->brand_id = $request->brand_id ? $request->brand_id : $product->brand_id;

        return $product->save();


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {

        return $product->delete();
    }
}