<?php

namespace App\Modules\User\Gateways;

use App\Modules\User\Interfaces\CoreUserInterface as User;
use App\Services\ApiResponse;
use Illuminate\Support\Facades\Auth;
use App\Modules\User\Interfaces\UserInterface as UserRepository;

/**
 * Class CoreUserGateway
 * @package App\Modules\User\Gateways
 */
class UserGateway
{
    protected $userRepo;
    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;

    }
    public function getIndex()
    {
        return $this->userRepo->all();
    }

    public function newUser($data)
    {
         $this->userRepo->SaveUser($data);
        return "New User Added";
    }
    public function getByID($id)
    {
        return $this->userRepo->find($id);
    }
    public function editUser($id, $user)
    {
        $update = $this->userRepo->update($id, $user);

        if (!$update){
            return ApiResponse::forbidden('Failed');
        }else{
            return ApiResponse::responseOK();
        }
    }
    public function deleteUser($id) 
    {
        return $this->userRepo->delete($id);
    }
    public function verifyemail($email)
    {
  
        $user = $this->userRepo->findBy('email',$email)->get(['display_name']);
        if ($user->isempty()){
            $response = [
                'status'     => false,
                'message'    => 'Email not found!'
            ];
            return ApiResponse::responseData($response);
        }
        $response = [
            'status'     => true,
            'credential' => $user,
            'message'    => 'Success!'
        ];
        return ApiResponse::responseData($response);
        
    }

}