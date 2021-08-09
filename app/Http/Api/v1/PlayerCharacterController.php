<?php

namespace App\Http\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PlayerCharacter;

use App\Http\Resources\Collections\PlayerCharacterCollection;
use App\Http\Resources\Collections\PlayerCharacter as PlayerCharacterResource;

class PlayerCharacterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
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
        $playerCharacter = new PlayerCharacter($request->all());
        $playerCharacter->save();

        $user = User::findOrFail($playerCharacter->user_id);
        $characters = $user->getCharacterRoster();

        return new PlayerCharacterCollection($characters);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //var_dump(auth('api')->user()->role()->first()->role);
        $user = User::findOrFail($id);
        $characters = $user->getCharacterRoster();
        return new PlayerCharacterCollection($characters);
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
