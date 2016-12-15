<?php

namespace App\Abstracts;

abstract class AbstractRepository 
{

    /**
     * @var Model
     */
    protected $model;

    /**
     * @var array
     */
    public $errors = [];

    /**
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $columns
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function all($columns = ['*'])
    {
        return $this->model->all($columns);
    }

    /**
     * @param       $id
     * @param array $columns
     *
     * @return mixed
     */
    public function find($id, $columns = ['*'])
    {
        return $this->model->find($id, $columns);
    }

    /**
     * @param        $field
     * @param        $value
     * @param string $operator
     *
     * @return mixed
     */
    public function findBy($field, $value, $operator = '=')
    {
        return $this->model->where($field, $operator, $value);
    }

    /**
     * @param array $data
     *
     * @return array|static
     */
    public function create(array $data)
    {
        return $this->model->create($data);
    }

    /**
     * @param       $id
     * @param array $data
     *
     * @return array
     */
    public function update($id, array $data)
    {
        $model = $this->model->findOrFail($id);
        return $model->update($data);
    }

    /**
     * @param $id
     *
     * @return int
     */
    public function delete($id)
    {
        return $this->model->destroy($id);
    }
}