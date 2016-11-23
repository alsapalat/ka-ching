<?php

namespace App\Modules\Product\Gateways;

use App\Modules\Product\Interfaces\ProductInterface as Repository;
use App\Services\ApiResponse;

class ProductGateway
{
    protected $repository;

    public function __construct(Repository $repository)
    {
        $this->repository = $repository;
    }
}