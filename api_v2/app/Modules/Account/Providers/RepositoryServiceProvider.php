<?php

namespace App\Modules\Account\Providers;

use Illuminate\Support\ServiceProvider;
use App\Modules\Account\Models\Account;
use App\Modules\Account\Interfaces\AccountInterface;
use App\Modules\Account\Repositories\Eloquent\AccountRepository;

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

        $app->bind(AccountInterface::class, function ($app) {
           return new AccountRepository(new Account);
        });
    }
}
