<?php

namespace App\Modules\Account\Models;

use App\Modules\Product\Model\Product;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    //
    public function products()
    {
    	return $this->hasMany(Product::class);
    }
}
