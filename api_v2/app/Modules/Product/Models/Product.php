<?php

namespace Product;

use App\Modules\Account\Model\Account;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    public function account()
    {
    	return $this->belongsTo(Account::class);
    }
}
