<?php

namespace App\Modules\Account\Http\Controllers;

use App\Modules\Account\Models\Account;
use App\Http\Requests\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index(){
    	$account = Account::all();
    	return $account; 
    }

    public function show($id){
    	$account = Account::find($id);
    	return $account;
    }

    public function store(Request $request)
    {
        $account = new Account;
        $account->email = $request->email;
        $account->username = $request->username;
        $account->password = $request->password;

        save($account);
    }

    public function update(Request $request, $id)
    {
    	
    }

    public function destroy($id)
    {

    }
}