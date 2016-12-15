<?php

namespace App\Modules\User\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\User\Gateways\UserGateway;

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
        return $this->gateway->newUser($request->all());
    }

    public function show($id)
    {
        return $this->gateway->getByID($id);
    }

    public function update(Request $request, $id)
    {
        $user = array(
            "display_name" => $request->input('name'),
            "email" => $request->input('email'),
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
