<?php

namespace App\Modules\Authentication\Gateways;

use Auth;
use Config;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use App\Services\ApiResponse;
use App\Modules\User\Interfaces\UserInterface as User;

class AuthenticationGateway
{
	/**
     * @var CoreUser
     */
    protected $user;

    /**
     * @var Token
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

     public function authenticate($credentials)
    {
        
        self::jwtInitCore();

        if(! $token = JWTAuth::attempt($credentials)) {
            
            return ApiResponse::forbidden('Invalid Email or Password');
        }

        return $this->getUserDetails($token);
    }

    protected function jwtInitCore()
    {
        Config::set('jwt.user', 'App\Modules\Authentication\Models\AuthUser');
        Config::set('jwt.secret', '!@#$%^&*(SECRET)*&^%$#@!');
        Config::set('auth.providers.users.model', 'App\Modules\Authentication\Models\AuthUser');
    }

    private function getUserDetails($token)
    {
        $currentUser = Auth::user();

        $response = [
            'status'     => true,
            'token'      => $token,
            'credential' => $this->buildCredentialData($currentUser),
            'message'    => 'You have successfully logged in!'
        ];

        return ApiResponse::responseData($response);
    }

    private function buildCredentialData($currentUser)
    {
        return $credential = [
            'id'        => $currentUser->id,
            'email'     => $currentUser->email,
        ];
    }

}
	