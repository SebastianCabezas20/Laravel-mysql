<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function all()
    {
        return Inertia::render("Admin/All", ["producto" => "holas"]);
    }
}