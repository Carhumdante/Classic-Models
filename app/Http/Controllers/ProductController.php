<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $Product = Product::find($request->productCode);
        return $Product;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Product = Product::create([
            'productCode' => $request->productCode,
            'productName' => $request->productName,
            'productLine' => $request->productLine,
            'productScale' =>$request->productScale,
            'productVendor'=>$request ->productVendor,
            'productDescription' =>$request->productDescription,
            'quantityInStock' =>$request->quantityInStock,
            'buyPrice'=>$request->buyPrice,
            'MSRP'=>$request->MSRP
        ]);
        echo $Product;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
       //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $Product = Product::find($request->productCode);
        $Product->productCode = $request->productCode2;
        $Product->productName = $request->productName;
        $Product->productLine = $request->productLine;
        $Product->productScale = $request->productScale;
        $Product->productVendor = $request->productVendor;
        $Product->productDescription = $request->productDescription;
        $Product->quantityInStock = $request->quantityInStock;
        $Product->buyPrice = $request->buyPrice;
        $Product->MSRP = $request->MSRP;
        $Product->save();
        return $Product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Product = Product::find($request->productCode);
        $Product->delete();
    }
}
