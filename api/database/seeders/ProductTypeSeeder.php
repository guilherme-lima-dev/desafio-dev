<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTypeSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('product_types')->insert([
            [
                'name' => 'Eletronicos',
                'tax' => 14,
            ],
            [
                'name' => 'Alimentos',
                'tax' => 5,
            ],
            [
                'name' => 'Vestuário',
                'tax' => 15,
            ],
        ]);
    }
}
