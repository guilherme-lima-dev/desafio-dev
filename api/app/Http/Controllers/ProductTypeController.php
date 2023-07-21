<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ProductType;

class ProductTypeController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return ProductType::all();
    }

    public function store(Request $request)
    {
        return ProductType::create($request->all());
    }

    public function show($id): \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        return ProductType::find($id);
    }

    public function update(Request $request, $id): bool|int
    {
       $customer= ProductType::find($id);
       return $customer->update($request->all());
    }

    public function destroy(Request $request, $id)
    {
        $customer= ProductType::find($id);
        return $customer->delete();
    }
}
