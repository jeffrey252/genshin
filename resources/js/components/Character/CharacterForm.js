import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import CharacterService from '../../_services/character-service';
import TalentMaterialService from '../../_services/talent-material-service';

import { alertService } from '../../_services';



const CharacterForm = () => {

    const initialCharacterState = {
        name: '',
        vision: '',
        weapon: '',
        rarity: '',
        talentMaterial: '',
    };

    const [character, setCharacter] = useState(initialCharacterState);
    const [talentMaterials, setTalentMaterials] = useState([]);

    useEffect(()=> {
        getTalentMaterials();
    }, [])

    const getTalentMaterials = () => {
        TalentMaterialService.getAll()
            .then(response => {
                setTalentMaterials(response.data.data)
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

    const history = useHistory();

    const saveCharacter = event => {
        event.preventDefault();
        var characterData = {
            name: character.name,
            rarity: character.rarity,
            vision: character.vision,
            weapon: character.weapon,
            talent_material_id: character.talentMaterial
        };
        CharacterService.create(characterData)
        .then(response => {
            console.log(response);
        })

        alertService.sendAlert(
            {
                type: 'success',
                text: "Character added successfully!",
            }
        );

        history.push('/character');
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
                            <Form.Check name="rarity" value="5" inline onChange={handleInputChange} type="radio" label="Five"/>
                            <Form.Check name="rarity" value="4" inline onChange={handleInputChange} type="radio" label="Four" />
                        </div>
                        
                        <Form.Label>Vision</Form.Label>
                        <Form.Select name="vision" value={character.vision} onChange={handleInputChange} >
                            <option value="1">Pyro</option>
                            <option value="2">Cryo</option>
                            <option value="3">Hydro</option>
                            <option value="4">Electro</option>
                            <option value="5">Anemo</option>
                            <option value="6">Geo</option>
                        </Form.Select>
                        
                        <Form.Label>Weapon</Form.Label>
                        <Form.Select name="weapon" value={character.weapon} onChange={handleInputChange} >
                            <option value="1">Sword</option>
                            <option value="2">Claymore</option>
                            <option value="3">Bow</option>
                            <option value="4">Polearm</option>
                            <option value="5">Catalyst</option>
                        </Form.Select>

                        <Form.Label>Talent Material</Form.Label>
                        <Form.Select name="talentMaterial" value={character.talentMaterial} onChange={handleInputChange} >
                            {talentMaterials && talentMaterials.map(
                                talentMaterial => (
                                    <option key={talentMaterial.id} value={talentMaterial.id}>{talentMaterial.name} ( {talentMaterial.schedule.name} ) </option>
                                )
                            )
                            }
                        </Form.Select>
                        <br />
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </div>
            </div>
    )
}

export default CharacterForm;