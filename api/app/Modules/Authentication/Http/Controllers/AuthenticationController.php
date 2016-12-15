<?php

namespace App\Modules\Authentication\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\Authentication\Gateways\AuthenticationGateway;

class AuthenticationController extends Controller
{
    protected $gateway;

    public function __construct(AuthenticationGateway $gateway)
    {
        $this->gateway = $gateway;
    }
    public function authenticate(Request $request)
    {
        return $this->gateway->authenticate(
            $request->only('email', 'password')
        );
        // return $request->only('email', 'password');
    }
}
