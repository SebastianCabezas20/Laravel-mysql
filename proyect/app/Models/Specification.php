<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specification extends Model
{
    use HasFactory;
    protected $fillable = [
        "descripcion",
        "nombre",
        "product_id"
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}