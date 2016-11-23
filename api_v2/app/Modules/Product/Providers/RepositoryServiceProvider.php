<?php

namespace App\Modules\Product\Providers;

use Illuminate\Support\ServiceProvider;
use App\Modules\Product\Models\Product;
use App\Modules\Product\Interfaces\ProductInterface;
use App\Modules\Product\Repositories\Eloquent\ProductRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
    * Define your module's repository model bindings, pattern filters, etc.
    *
    * @return void
    */
    public function boot()
    {
        //
    }

    /**
    * Register bindings in the container.
    *
    * @return void
    */
    public function register()
    {
        $app = $this->app;

        $app->bind(ProductInterface::class, function ($app) {
           return new ProductRepository(new Product);
        });
    }
}
