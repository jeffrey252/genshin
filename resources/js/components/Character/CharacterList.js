import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CharacterService from '../../_services/character-service'; 

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    
    
    useEffect(() => {
      getCharacters();
    }, []);

    const getCharacters = () => {
        CharacterService.getAll()
        .then(response => {
            setCharacters(response.data.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <div className='card'>
            <div className='card-header'>All Characters</div>
            <div className='card-body'>
            <Button href="/react/character/create/" variant="outline-primary">Create Character</Button>
            <table className='table'>
                <thead>
                <tr>
                    <th>Vision</th>
                    <th>Name</th>
                    <th>Rarity</th>
                    <th>Weapon</th>
                    <th>Talent Material</th>
                </tr>
                </thead>
                <tbody>
                {characters && characters.map(
                    character => (
                    <tr key = {character.id}>
                        <td>{character.vision}</td>
                        <td>{character.name}</td>
                        <td>{character.rarity}</td>
                        <td>{character.weapon}</td>
                        <td>{character.talent_material.name} ( {character.talent_material.schedule.name} ) </td>
                    </tr>
                )
                )}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default CharacterList;