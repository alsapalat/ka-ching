<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use App\Services\ApiResponse;
use Illuminate\Support\Facades\Config;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
class JWTSiteAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        self::jwtSiteInit();
        try{
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                $msg = 'The given token doesn\'t have any matching credentials.';
                return ApiResponse::badRequest($msg);
            }
        }catch(JWTException $e){
            if ($e instanceof TokenExpiredException) {
                $msg = 'Token Expired';
                return ApiResponse::badRequest($msg);
      
            }else{
                $msg = 'Invalid Token';
                return ApiResponse::badRequest($msg);
            }
    
        }
    
        return $next($request);
    }

    public static function jwtSiteInit()
    {
        Config::set('jwt.user', 'App\Modules\Authentication\Models\AuthUser');
        Config::set('jwt.secret', '!@#$%^&*(SECRET)*&^%$#@!');
        Config::set('auth.providers.users.model', 'App\Modules\Authentication\Models\AuthUser');
    }
}
