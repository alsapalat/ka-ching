<?php

namespace App\Contracts\Services;

interface ApiResponseInterface
{
	public function response();

	public function append($key, $data);

	public function appendData($key, $data);

	public function setErrors($errors);

	public function appendError($key, $data);

	public function getErrors();

	public function setMessage($message);

	public function getMessage();

	public function setStatus($status);

	public function getStatus();

	public function statusOk();

	public function statusCreated();

	public function statusFound();

	public function statusNotFound();

	public function statusForbidden();

	public function statusUnauthorized();

	public function statusBadRequest();

	public function statusUnproccessedEntity();
}