<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\ShowResource;
use App\Http\Resources\ShowCollection;
use App\Show;

class ShowController extends Controller
{
    public function index()
    {
        return new ShowCollection(Show::paginate());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required | min:3',
            'year'     => 'required',
            'producer' => 'required',
            'type'     => 'required | in:series,movie'
        ]);

        $show_data = $request->all();

        $show = Show::create($show_data);

        return response()->json(new ShowResource($show), Response::HTTP_CREATED);
    }

    public function show(Show $show)
    {
        return response()->json(new ShowResource($show));
    }

    public function update(Show $show, Request $request)
    {
        $request->validate([
            'name'     => 'required',
            'year'     => 'required',
            'producer' => 'required',
        ]);

        $show_data = $request->all();

        $show->update($show_data);

        return response()->json(new ShowResource($show), Response::HTTP_OK);
    }

    public function destroy(Show $show)
    {
        $show->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
