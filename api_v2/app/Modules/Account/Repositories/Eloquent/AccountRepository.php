<?php

namespace App\Modules\Account\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Model;
use App\Modules\Account\Interfaces\AccountInterface;

class AccountRepository implements AccountInterface
{
    protected $model;

    public function __construct(Model $model)
    {
       $this->model = $model;
    }
}