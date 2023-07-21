<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Customer::all();
    }

    public function store(Request $request)
    {
        return Customer::create($request->all());
    }

    public function show($id): \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        return Customer::find($id);
    }

    public function update(Request $request, $id): bool|int
    {
       $customer= Customer::find($id);
       return $customer->update($request->all());
    }

    public function destroy(Request $request, $id)
    {
        $customer= Customer::find($id);
        return $customer->delete();
    }
}
