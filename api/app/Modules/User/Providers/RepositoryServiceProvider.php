<?php
namespace App\Modules\User\Providers;

use Illuminate\Support\ServiceProvider;
use App\Modules\User\Models\User;
use App\Modules\User\Interfaces\UserInterface;
use App\Modules\User\Repositories\Eloquent\UserRepository;

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

      $app->bind(UserInterface::class, function ($app) {
        return new UserRepository(new User);
      });

  }
}
