<?php

namespace App\Filament\Resources;


use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Hidden;

use App\Filament\Resources\SkillResource\Pages;
use App\Filament\Resources\SkillResource\RelationManagers;
use App\Models\Skill;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\TextColumn;

class SkillResource extends Resource
{
    protected static ?string $model = Skill::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                    TextInput::make('name')->required(),
                    Select::make('level')->options([
                        'Beginner' => 'Beginner',
                        'Intermediate' => 'Intermediate',
                        'Expert' => 'Expert',
                    ]),
                    TextInput::make('progress')->numeric()->minValue(0)->maxValue(100),
                    TextInput::make('icon'),
                    Select::make('category_id')
                        ->relationship('category', 'name')
                        ->required(),
                        Hidden::make('user_id')
                    ->default(auth()->id())
                    ->dehydrated(),
                    
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('Skill Name'),
                TextColumn::make('level')->label('Skill Level'),
                TextColumn::make('progress')->label('Progress (%)'),
                TextColumn::make('category.name')->label('Category'),
               
            ])
            ->filters([
                
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
    public static function getEloquentQuery(): Builder
{
    $query = parent::getEloquentQuery();

   
    if (auth()->user()->hasRole('user')) {
        $query->where('user_id', auth()->id());
    }

    return $query;
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
            'index' => Pages\ListSkills::route('/'),
            'create' => Pages\CreateSkill::route('/create'),
            'edit' => Pages\EditSkill::route('/{record}/edit'),
        ];
    }
}
