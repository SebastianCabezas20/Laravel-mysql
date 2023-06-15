<?php

use App\Http\Controllers\ViewController;
use App\Models\TypeModel;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::resources(
    [
        "product" => ProductController::class,
        "brand" => BrandController::class,
        //"type_model" => TypeModel::class,
    ]
);

Route::get("/createProduct", [ViewController::class, "createProduct"]);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});