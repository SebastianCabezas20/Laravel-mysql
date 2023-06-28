<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Models\TypeModel;
use Illuminate\Http\Request;

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

        if ($request->producto["brand_id"] == -1) {
            // Se crea la marca
            $marca = Brand::create([
                "nombre" => $request->marcaNueva[0],
            ]);
            // Se crea el producto enlazando esa marca
            $product = Product::create([
                "nombre" => $request->producto["nombre"],
                "stock" => $request->producto["stock"],
                "precio" => $request->producto["precio"],
                "descripcion" => $request->producto["descripcion"],
                "descuento" => $request->producto["descuento"],
                "brand_id" => $marca->id
            ]);


        } else {
            // Producto con marca ya creada
            $product = Product::create([
                "nombre" => $request->producto["nombre"],
                "stock" => $request->producto["stock"],
                "precio" => $request->producto["precio"],
                "descripcion" => $request->producto["descripcion"],
                "descuento" => $request->producto["descuento"],
                "brand_id" => $request->producto["brand_id"]
            ]);
        }


        //Insercion de especificaciones segun el producto
        $product->specifications()->createMany($request->especificaciones);


        //Enlace de modelos, tipo de modelo y productos

        if ($request->modelo["tipo"] == -1) { // Caso no existe el tipo modelo
            // Se crea el tipo en la base de datos
            $tipo = TypeModel::Create([
                "tipo" => $request->modelo["tipoNuevo"][0]

            ]);

            $modelos = $request->modelo["modelos"];
            $product->modelproducts()->createMany(array_map(function ($modelo) use ($tipo) {
                return [
                    'typemodel_id' => $tipo->id,
                    "descripcion" => $modelo

                ];
            }, $modelos));


        } else {
            // Caso contrario, el tipo ya existe y se enlaza con el producto
            $modelos = $request->modelo["modelos"];
            $product->modelproducts()->createMany(array_map(function ($modelo) use ($request) {
                return [
                    'typemodel_id' => $request->modelo["tipo"],
                    "descripcion" => $modelo

                ];
            }, $modelos));
        }



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