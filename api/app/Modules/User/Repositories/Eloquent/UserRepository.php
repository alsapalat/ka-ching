<?php

namespace App\Modules\User\Repositories\Eloquent;

use App\Abstracts\AbstractRepository;
use App\Modules\User\Interfaces\UserInterface;
use Illuminate\Database\Eloquent\Model;

class UserRepository extends AbstractRepository implements UserInterface
{

    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }


}