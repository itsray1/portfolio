<?php

namespace App\Filament\Resources\ProjectImageResource\Pages;

use App\Filament\Resources\ProjectImageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProjectImage extends EditRecord
{
    protected static string $resource = ProjectImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
