<?php

namespace App\Modules\User\Http\Requests;

use App\Http\Requests\Request;

class UserSignupRequest extends Request
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
            'email'     =>  'required|email|unique:email',
            'password'  =>  'required|confirmed',
            'password_confirmation' => 'required'
        ];
    }
}
