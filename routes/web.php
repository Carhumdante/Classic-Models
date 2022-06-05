<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductLineController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/create_token', [CustomerController::class, 'create_token']);


Route::post('/customers_index', [CustomerController::class, 'index']);
Route::post('/customers_create', [CustomerController::class, 'store']);
Route::post('/customers_update', [CustomerController::class, 'update']);
Route::post('/customers_delete', [CustomerController::class, 'destroy']);


Route::post('/employee_index', [EmployeeController::class, 'index']);
Route::post('/employee_create', [EmployeeController::class, 'store']);
Route::post('/employee_update', [EmployeeController::class, 'update']);
Route::post('/employee_delete', [EmployeeController::class, 'destroy']);

Route::post('/office_index', [OfficeController::class, 'index']);
Route::post('/office_create', [OfficeController::class, 'store']);
Route::post('/office_update', [OfficeController::class, 'update']);
Route::post('/office_delete', [OfficeController::class, 'destroy']);

Route::post('/order_index', [OrderController::class, 'index']);
Route::post('/order_create', [OrderController::class, 'store']);
Route::post('/order_update', [OrderController::class, 'update']);
Route::post('/order_delete', [OrderController::class, 'destroy']);

Route::post('/orderdetail_index', [OrderdetailController::class, 'index']);
Route::post('/orderdetail_create', [OrderdetailController::class, 'store']);
Route::post('/orderdetail_update', [OrderdetailController::class, 'update']);
Route::post('/orderdetail_delete', [OrderdetailController::class, 'destroy']);

Route::post('/product_index', [ProductController::class, 'index']);
Route::post('/product_create', [ProductController::class, 'store']);
Route::post('/product_update', [ProductController::class, 'update']);
Route::post('/product_delete', [ProductController::class, 'destroy']);

Route::post('/productline_index', [ProductLineController::class, 'index']);
Route::post('/productline_create', [ProductLineController::class, 'store']);
Route::post('/productline_update', [ProductLineController::class, 'update']);
Route::post('/productline_delete', [ProductLineController::class, 'destroy']);

Route::view('/{path?}', 'welcome')
    ->where('path', '.*');