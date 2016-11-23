<?php

namespace App\Modules\Product\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Model;
use App\Modules\Product\Interfaces\ProductInterface;

class ProductRepository implements ProductInterface
{
    protected $model;

    public function __construct(Model $model)
    {
       $this->model = $model;
    }
}