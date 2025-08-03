<?php

namespace App\Providers;
// use Filament\Filament;


use Illuminate\Support\ServiceProvider;

use App\Filament\Resources\UserResource;
use App\Filament\Resources\RoleResource;
use App\Filament\Resources\PermissionResource;
// use BezhanSalleh\FilamentShield\FilamentShieldPlugin;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    //     info('AppServiceProvider boot running');  
    //     // filament::registerPlugin(FilamentShieldPlugin::class);
    //     Filament::serving(function () {
    //     Filament::registerResources([
    //         UserResource::class,
    //         RoleResource::class,
    //         PermissionResource::class,
    //     ]);
    // });
    }
}
