<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Purchase;

class PurchaseController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Purchase::all();
    }

    public function store(Request $request)
    {
        return Purchase::create($request->all());
    }

    public function show($id): \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        return Purchase::find($id);
    }

    public function update(Request $request, $id): bool|int
    {
       $customer= Purchase::find($id);
       return $customer->update($request->all());
    }

    public function destroy(Request $request, $id)
    {
        $customer= Purchase::find($id);
        return $customer->delete();
    }
}
