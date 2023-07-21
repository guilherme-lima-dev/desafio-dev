<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return User::all();
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function show($id): \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        return User::find($id);
    }

    public function update(Request $request, $id): bool|int
    {
       $customer= User::find($id);
       return $customer->update($request->all());
    }

    public function destroy(Request $request, $id)
    {
        $customer= User::find($id);
        return $customer->delete();
    }
}
