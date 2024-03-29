<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Brand::all();
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

        return Brand::create([
            "nombre" => $request->nombre,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        return $brand;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        $brand->nombre = $request->nombre ? $request->nombre : $brand->nombre;

        return $brand->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        return $brand->delete();
    }
}