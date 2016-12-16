<?php

namespace App\Modules\User\Http\Requests;

use App\Abstracts\AbstractRequest;
class UserSignupRequest extends AbstractRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'     =>  'required|email|unique:users,email',
            'password'  =>  'required|confirmed',
            'password_confirmation' => 'required'
        ];
    }
}
