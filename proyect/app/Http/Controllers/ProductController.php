<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
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

        /*return Product::create([
            "nombre" => $request->nombre,
            "stock" => $request->stock,
            "precio" => $request->precio,
            "descripcion" => $request->descripcion,
            "descuento" => $request->descuento,
            "brand_id" => $request->brand_id
        ]);*/


        $request->user();

        return redirect("dashboard");
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return $product;
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