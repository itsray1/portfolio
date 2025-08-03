<?php

namespace App\Filament\Resources;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Hidden;



use App\Filament\Resources\AboutMeResource\Pages;
use App\Filament\Resources\AboutMeResource\RelationManagers;
use App\Models\AboutMe;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;


use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;


use Filament\Tables\Columns\TextColumn;

class AboutMeResource extends Resource
{
    protected static ?string $model = AboutMe::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                   TextInput::make('first_name')->required(),
                    TextInput::make('last_name')->required(),
                    Textarea::make('bio'),
                    TextInput::make('image_url'),
                    TextInput::make('location'),
                    TextInput::make('cv_url'),
                    TextInput::make('email')->email(),
                    Hidden::make('user_id')
                    ->default(auth()->id())
                    ->dehydrated(),
  ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                       Tables\Columns\TextColumn::make('first_name')->label('First Name'),
                        Tables\Columns\TextColumn::make('last_name')->label('Last Name'),
                        Tables\Columns\TextColumn::make('email')->label('Email'),
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
           
        ];
    }
    public static function getEloquentQuery(): Builder
{
    $query = parent::getEloquentQuery();

   
    if (auth()->user()->hasRole('user')) {
        $query->where('user_id', auth()->id());
    }

    return $query;
}


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAboutMes::route('/'),
            'create' => Pages\CreateAboutMe::route('/create'),
            'edit' => Pages\EditAboutMe::route('/{record}/edit'),
        ];
    }
}
