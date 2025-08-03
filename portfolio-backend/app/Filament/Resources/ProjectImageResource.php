<?php

namespace App\Filament\Resources;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use App\Filament\Resources\ProjectImageResource\Pages;
use App\Filament\Resources\ProjectImageResource\RelationManagers;
use App\Models\ProjectImage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\TextColumn;

class ProjectImageResource extends Resource
{
    protected static ?string $model = ProjectImage::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
       
       return $form->schema([
        Select::make('project_id')
            ->label('Project')
            ->required()
            ->options(fn () => auth()->user()->projects()->pluck('title', 'id')),

        FileUpload::make('image_url')
            ->label('Image')
            ->image()
            ->directory('project_images')
            ->required(),
    ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('project.title')->label('Project Title'),
                TextColumn::make('image_url')->label('Image URL'),
                
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjectImages::route('/'),
            'create' => Pages\CreateProjectImage::route('/create'),
            'edit' => Pages\EditProjectImage::route('/{record}/edit'),
        ];
    }
}
