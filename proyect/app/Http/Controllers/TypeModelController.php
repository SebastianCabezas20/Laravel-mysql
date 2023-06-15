<?php

namespace App\Http\Controllers;

use App\Models\TypeModel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TypeModelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TypeModel::all();
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TypeModel $typeModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TypeModel $typeModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TypeModel $typeModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TypeModel $typeModel)
    {
        //
    }
}