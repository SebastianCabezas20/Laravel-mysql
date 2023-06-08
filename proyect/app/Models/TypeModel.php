<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeModel extends Model
{
    use HasFactory;

    protected $fillable = [
        "tipo",
    ];

    public function modelproduct()
    {
        return $this->hasOne(ModelProduct::class, "typemodel_id");
    }
}