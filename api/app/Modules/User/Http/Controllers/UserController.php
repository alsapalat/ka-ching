<?php

namespace App\Modules\User\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\User\Gateways\UserGateway;
use App\Modules\User\Http\Requests\UserSignupRequest;
class UserController extends Controller
{
    protected $gateway;
    public function __construct(UserGateway $gateway)
    {
        $this->gateway = $gateway;
    }
    public function index()
    {
        return $this->gateway->getIndex();
    }
    public function store(UserSignupRequest $request)
    {
        return $this->gateway->newUser($request->only(['email','password']));
    }

    public function show($id)
    {
        return $this->gateway->getByID($id);
    }

    public function update(Request $request, $id)
    {
        $user = array(
            "display_name" => $request->input('display_name')
            );
 

        
        return $this->gateway->editUser($id, $user);
    }

    public function destroy($id)
    {
        return $this->gateway->deleteUser($id);
    }


    public function verifyemail(Request $request)
    {
        return $this->gateway->verifyemail($request->email);
    }
}
