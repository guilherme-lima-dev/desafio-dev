<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class Product extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name', 'value', 'product_type_id'
    ];

    public function purchaseProduct()
    {
        return $this->hasMany(PurchaseProduct::class);
    }

    public function productType()
    {
        //todo: https://laravel.com/docs/10.x/eloquent-relationships#aggregating-related-models
        return $this->belongsTo(ProductType::class);//indicar chave estrangeira no segundo parametro
    }

}
