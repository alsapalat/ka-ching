<?php

namespace App\Abstracts;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

abstract class AbstractModel extends Model
{
    public function getCreatedAtAttribute($date)
    {
      return $this->modelDefaultFormat($date);
    }

    public function getUpdatedAtAttribute($date)
    {
      return $this->modelDefaultFormat($date);
    }

    private function modelDefaultFormat($date)
    {
      $date = new Carbon($date);
      return $date->format(config('basemodel.response_default_date_format'));
    }
}
