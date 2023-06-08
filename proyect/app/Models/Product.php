<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "stock",
        "descripcion",
        "nombre",
        "precio",
        "descuento",
        "brand_id"
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function modelproducts()
    {
        return $this->hasMany(ModelProduct::class);
    }

    public function specifications()
    {
        return $this->hasMany(Specification::class);
    }
}