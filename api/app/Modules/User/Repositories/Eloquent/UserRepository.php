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

   	public function SaveUser($data)
    {

        $user = new $this->model;

        $user->email = $data['email'];
        $user->display_name = $data['display_name'];
        $user->password = $data['display_name'];

        $user->save();

    }
}