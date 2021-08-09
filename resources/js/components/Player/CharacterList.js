import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CharacterService from '../../_services/character-service'; 
import CookieService from '../../_services/cookie-service';

const CharacterList = ({ match }) => {

    const [requestData, setRequestData] = useState(new Date());
    const { path } = match;

    const [characters, setCharacters] = useState([]);
    
    const [characterId, setCharacterId] = useState('');
    
    useEffect(() => {
      getPlayerCharacters();
    }, [requestData]);


    const getPlayerCharacters = () => {
        console.log('aaaa')
        setRequestData(new Date());
    };
    return (
        <div>
            <div className='card'>
                <div className='card-header'>All Characters</div>
                <div className='card-body'>
                <Button href="/characters/create/" variant="outline-primary">Add Character</Button>
                <br />
                <br />
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {characters && characters.map(
                        character => (
                        <tr key = {character.id}>
                            <td>{character.name}</td>
                            <td>
                                <Button data-character-id={character.id} onClick={handleShowDeleteModal} variant="danger">Delete</Button>
                            </td>
                        </tr>
                    )
                    )}
                    </tbody>
                </table>
                </div>
            </div>

        </div>
    );
}

export default CharacterList;