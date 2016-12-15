<?php

namespace App\Abstracts;

use Illuminate\Foundation\Http\FormRequest;

abstract class AbstractRequest extends FormRequest
{
  public function response(array $errors)
  {
    $response['status'] = 422;
    $response['errors'] = $errors;
    return \Response::json($response ,422);
  }
}
