<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Category;

class CategoryController extends Controller
{
    public function index()
    {
        return new CategoryCollection(Category::paginate());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3'
        ]);

        $cat_data = $request->all();

        $cat = Category::create($cat_data);

        return response()->json(new CategoryResource($cat), Response::HTTP_CREATED);
    }

    public function show(Category $category)
    {
        return response()->json(new CategoryResource($category));
    }

    public function update(Category $category, Request $request)
    {
        $request->validate([
            'name' => 'required|min:3'
        ]);

        $cat_data = $request->all();

        $category->update($cat_data);

        return response()->json(new CategoryResource($category), Response::HTTP_OK);
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
