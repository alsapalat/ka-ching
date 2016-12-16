<?php

namespace App\Modules\User\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
	protected $table = 'users';
    protected $fillable = ['display_name','email','password'];
}
