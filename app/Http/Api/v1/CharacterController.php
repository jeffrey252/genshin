<?php

namespace App\Http\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Character;

use App\Http\Resources\Collections\CharacterCollection;

use App\Repositories\Interfaces\CharacterRepositoryInterface;

class CharacterController extends Controller
{

    private $characterRepository;

    public function __construct(CharacterRepositoryInterface $characterRepository)
    {
        $this->middleware(['scope:admin'])->except('index');
        $this->characterRepository = $characterRepository;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        return $this->characterRepository->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $character = new Character($request->all());
        $character->save();
        return new CharacterResource($character->transformForApi());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->characterRepository->read($id);
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
        $character = Character::findOrFail($id);
        $character->fill($request->all());
        $character->save();
        return new CharacterResource($character);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Character::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}
