<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PurchaseProduct;

class PurchaseProductController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return PurchaseProduct::all();
    }

    public function store(Request $request)
    {
        return PurchaseProduct::create($request->all());
    }

    public function show($id): \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        return PurchaseProduct::find($id);
    }

    public function update(Request $request, $id): bool|int
    {
       $customer= PurchaseProduct::find($id);
       return $customer->update($request->all());
    }

    public function destroy(Request $request, $id)
    {
        $customer= PurchaseProduct::find($id);
        return $customer->delete();
    }
}
