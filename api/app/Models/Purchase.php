<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class Purchase extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    protected $fillable = [
        'nfe',
        'discount',
        'customer_id',
        'data'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'id');
    }

    public function purchaseProduct()
    {
        return $this->hasMany(PurchaseProduct::class, 'purchase_id');
    }
}
