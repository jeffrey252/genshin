import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CharacterService from '../../_services/character-service'; 
import CookieService from '../../_services/cookie-service';

const CharacterList = ({ match }) => {

    const [requestData, setRequestData] = useState(new Date());
    const { path } = match;

    const [characters, setCharacters] = useState([]);
    
    const [characterId, setCharacterId] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    
    useEffect(() => {
        console.log(CookieService.getAuthAccess());
      getCharacters();
    }, [requestData]);

    const handleShowDeleteModal = event => {
        setCharacterId(event.target.getAttribute('data-character-id'));
        setShowDeleteModal(true);
    }

    const getCharacters = () => {
        CharacterService.getAll()
        .then(response => {
            setCharacters(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const deleteCharacter = () => {
        CharacterService.destroy(characterId)
            .then(response => {
                handleCloseDeleteModal();
                setRequestData(new Date());
            })
            .catch(e => {
                console.log(e);
            });

    }

    return (
        <div>
            <div className='card'>
                <div className='card-header'>All Characters</div>
                <div className='card-body'>
                <Button href="/characters/create/" variant="outline-primary">Create Character</Button>
                &nbsp; <Button href="/characters/talentMaterials/" variant="outline-primary">Manage Talent Materials</Button>
                <br />
                <br />
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Vision</th>
                        <th>Name</th>
                        <th>Rarity</th>
                        <th>Weapon</th>
                        <th>Talent Material</th>
                        <th></th>
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
                            <td>
                            <Button href={`${path}/edit/${character.id}`} variant="dark">Edit</Button>
                                    &nbsp; <Button data-character-id={character.id} onClick={handleShowDeleteModal} variant="danger">Delete</Button>
                            </td>
                        </tr>
                    )
                    )}
                    </tbody>
                </table>
                </div>
            </div>

            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Talent Material</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteCharacter}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CharacterList;