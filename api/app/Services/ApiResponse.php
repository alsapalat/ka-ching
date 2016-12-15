<?php

namespace App\Services;

use App\Contracts\Services\ApiResponseInterface;
use Illuminate\Http\Response as HttpResponse;

class ApiResponse implements ApiResponseInterface
{
	protected $response;
	protected $status;
	protected $message;
	protected $errors;

	public function __construct()
	{
		$this->setStatus(HttpResponse::HTTP_OK);
	}

	public function response()
	{
		return response()->json($this->response, $this->status);
	}

	public function append($key, $data)
	{
		$this->response[$key] = $data;
		return $this;
	}

	public function setResponse($data)
	{
		$data = is_array($data)?$data:$data->toArray();
		foreach($data as $i=>$v)
		{
			$this->response[$i] = $v;
		}
		return $this;
	}

	public function appendData($key, $data = null)
	{
		if(is_array($key)) return $this->setData($key);
		$this->response['data'][$key] = $data;
		return $this;
	}

	public function setData($data)
	{
		$this->response['data'] = $data;
		return $this;
	}

	public function setErrors($errors)
	{
		$this->response['errors'] = $errors;
		return $this;
	}

	public function appendError($key, $data)
	{
		$this->response['errors'][$key] = $data;
		return $this;
	}

	public function getErrors()
	{
		return $this->errors;
	}

	public function setMessage($message=null)
	{
		if(!$message) return $this;
		$this->message = $message;
		$this->response['message'] = $message;
		return $this;
	}

	public function getMessage()
	{
		return $this->message;
	}

	public function setStatus($status)
	{
		$this->status = $status;
		$this->response['status'] = $this->status;
		$this->setDefaultMessage($status);
		return $this;
	}

	public function getStatus()
	{
		return $this->status;
	}

	public function statusOk()
	{
		$this->setStatus(HttpResponse::HTTP_OK);
		return $this;
	}

	public function statusCreated()
	{
		$this->setStatus(HttpResponse::HTTP_CREATED);
		return $this;
	}

	public function statusFound()
	{
		$this->setStatus(HttpResponse::HTTP_FOUND);
		return $this;
	}

	public function statusNotFound()
	{
		$this->setStatus(HttpResponse::HTTP_NOT_FOUND);
		return $this;
	}

	public static function resourceNotFound($msg = null)
	{
		$response = new static;
		$response->statusNotFound();
		if($msg != null)
			$response->setMessage($msg);

		return $response->response();
	}

	public static function badRequest($msg = null)
	{
		$response = new static;
		$response->statusBadRequest();
		if($msg != null)
			$response->setData(['message' => $msg]);

		return $response->response();
	}

	public static function responseOK($msg = null)
	{
		$response = new static;
		if($msg != null)
			$response->setMessage($msg);

		return $response->response();
	}

	public static function responseData($data, $msg = null)
	{
		$response = new static;
		$response->setData($data);
		if($msg != null)
			$response->setMessage($msg);

		return $response->response();
	}

	public static function forbidden($msg = null)
	{
		$response = new static;
		$response->statusForbidden();
		if($msg != null)
			$response->setData(['message' => $msg]);

		return $response->response();
	}

	public function statusForbidden()
	{
		$this->setStatus(HttpResponse::HTTP_FORBIDDEN);
		return $this;
	}

	public function statusUnauthorized()
	{
		$this->setStatus(HttpResponse::HTTP_UNAUTHORIZED);
		return $this;	
	}

	public function statusBadRequest()
	{
		$this->setStatus(HttpResponse::HTTP_BAD_REQUEST);
		return $this;	
	}

	public function statusUnproccessedEntity()
	{
		$this->setStatus(HttpResponse::HTTP_UNPROCESSABLE_ENTITY);
		return $this;	
	}

	public function statusInternalServerError()
	{
		$this->setStatus(HttpResponse::HTTP_INTERNAL_SERVER_ERROR);
		return $this;
	}

	private function setDefaultMessage($status)
	{
		$this->setMessage(HttpResponse::$statusTexts[$status]);
	}
}