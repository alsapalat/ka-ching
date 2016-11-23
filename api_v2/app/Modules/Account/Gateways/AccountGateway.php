<?php

namespace App\Modules\Account\Gateways;

use App\Modules\Account\Interfaces\AccountInterface as Repository;
use App\Services\ApiResponse;

class AccountGateway
{
    protected $repository;

    public function __construct(Repository $repository)
    {
        $this->repository = $repository;
    }
}