<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        return Product::create($request->all());
    }

    public function show($id): \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        return Product::find($id);
    }

    public function update(Request $request, $id): bool|int
    {
       $customer= Product::find($id);
       return $customer->update($request->all());
    }

    public function destroy(Request $request, $id)
    {
        $customer= Product::find($id);
        return $customer->delete();
    }
}
