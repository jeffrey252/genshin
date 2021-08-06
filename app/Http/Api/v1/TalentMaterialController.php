<?php

namespace App\Http\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\TalentMaterial;
use App\Models\Schedule;

use App\Http\Resources\Collections\TalentMaterialCollection;
use App\Http\Resources\TalentMaterial as TalentMaterialResource;

class TalentMaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new TalentMaterialCollection(TalentMaterial::with('schedule')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    { 
        $talentMaterial = new TalentMaterial($request->all());
        $talentMaterial->save();
        return new TalentMaterialResource($talentMaterial);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'schedule_id' => 'required',
        ]);

        TalentMaterial::create($request->all());
     
        return redirect()->route('talentMaterials.index')
                        ->with('success','Post created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $talentMaterial = TalentMaterial::findOrFail($id);
        return new TalentMaterialResource($talentMaterial);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $talentMaterial = TalentMaterial::findOrFail($id);
        $talentMaterial->fill($request->all());
        $talentMaterial->save();
        return new TalentMaterialResource($talentMaterial);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        TalentMaterial::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}
