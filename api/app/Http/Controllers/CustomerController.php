<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        return Customer::all();
    }

    public function store(Request $request)
    {
        return Customer::create($request->all());
    }

    public function show($id)
    {
        return Customer::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
       $customer= Customer::findOrFail($id);
       return $customer->update($request->all());
    }

    public function destroy(Request $request, $id)
    {
        $customer= Customer::find($id);
        return $customer->delete();
    }
}
