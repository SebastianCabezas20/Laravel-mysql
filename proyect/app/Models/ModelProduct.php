<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        "descripcion",
        "product_id",
        "typemodel_id"
    ];

    public function typeModel()
    {
        return $this->belongsTo(TypeModel::class, "typemodel_id");
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

}