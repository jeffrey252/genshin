import React, { useEffect, useState } from 'react';
import { Button, Form, ButtonGroup } from 'react-bootstrap';
import CharacterService from '../../_services/character-service';
import TalentMaterialService from '../../_services/talent-material-service';

import { alertService } from '../../_services';

const CharacterForm = ({ history, match }) => {

    const { id } = match.params;
    const isAddMode = !id;

    const initialCharacterState = {
        name: "",
        rarity: '',
        vision: '',
        weapon: '',
        talent_material_id: '',
    };

    const [character, setCharacter] = useState(initialCharacterState);
    const [talentMaterials, setTalentMaterials] = useState([]);

    useEffect(()=> {
        if(!isAddMode)
            getCharacter(id);

        getTalentMaterials();
    }, [])

    const getCharacter = id => {
        CharacterService.get(id)
        .then(response => {
            setCharacter(response.data)
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    const getTalentMaterials = () => {
        TalentMaterialService.getAll()
            .then(response => {
                setTalentMaterials(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCharacter({
            ...character,
            [name]: value
        });
    }

    const saveCharacter = event => {
        event.preventDefault();
        isAddMode ? addCharacter() : updateCharacter()
    }

    function addCharacter() {
        CharacterService.create(character)
        .then(response => {
            alertService.sendAlert(
                {
                    type: 'success',
                    text: "Character added successfully!",
                }
            );
            history.push('/characters');
        })
    }

    function updateCharacter() {
        CharacterService.update(character)
        .then(response => {
            alertService.sendAlert(
                {
                    type: 'success',
                    text: "Character updated successfully!",
                }
            );
            history.push('/characters');
        })
    }

    return (
        <div className='card'>
            <div className='card-header'>Create a Character</div>
            <div className='card-body'>

                <Form onSubmit={saveCharacter}>
                    <Form.Group className="mb-3" controlId="characterForm.ControlInput1">
                        
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={character.name} onChange={handleInputChange} placeholder="Name of character" /> 
                        <Form.Label>Rarity</Form.Label>
                        <div className="mb-3">
                            <Form.Check name="rarity" value="5" inline onChange={handleInputChange} type="radio" checked={character.rarity == 5} label="Five"/>
                            <Form.Check name="rarity" value="4" inline onChange={handleInputChange} type="radio" checked={character.rarity == 4} label="Four" />
                        </div>
                        
                        <Form.Label>Vision/Element</Form.Label>
                        <Form.Control as="select" name="vision" value={character.vision} onChange={handleInputChange} >
                            <option value="" disabled>Select Vision/Element</option>
                            <option value="1">Pyro</option>
                            <option value="2">Cryo</option>
                            <option value="3">Hydro</option>
                            <option value="4">Electro</option>
                            <option value="5">Anemo</option>
                            <option value="6">Geo</option>
                        </Form.Control>
                        
                        <Form.Label>Weapon</Form.Label>
                        <Form.Control as="select" name="weapon" value={character.weapon} onChange={handleInputChange} >
                            <option value="" disabled>Select weapon</option>
                            <option value="1">Sword</option>
                            <option value="2">Claymore</option>
                            <option value="3">Bow</option>
                            <option value="4">Polearm</option>
                            <option value="5">Catalyst</option>
                        </Form.Control>

                        <Form.Label>Talent Material</Form.Label>
                        <Form.Control as="select" name="talent_material_id" value={character.talent_material_id} onChange={handleInputChange} >
                            <option value="" disabled>Select talent material</option>
                            {talentMaterials && talentMaterials.map(
                                talentMaterial => (
                                    <option key={talentMaterial.id} value={talentMaterial.id}>{talentMaterial.name} ( {talentMaterial.schedule.name} ) </option>
                                )
                            )
                            }
                        </Form.Control>

                        <br />
                        <Button type="submit">{isAddMode ? 'Submit' : 'Update'}</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default CharacterForm;