import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CharacterService from "../../_services/character-service";
import CookieService from "../../_services/cookie-service";
import PlayerService from "../../_services/player-service";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

const CharacterList = ({ match }) => {
  const [requestData, setRequestData] = useState(new Date());
  const { path } = match;

  const [character, setCharacter] = useState({});
  const [characters, setCharacters] = useState([]);
  const [playerCharacters, setPlayerCharacters] = useState([]);
  const [characterId, setCharacterId] = useState("");

  useEffect(() => {
    getPlayerCharacters();
    getCharacters();
  }, []);

  function getCharacters() {
    CharacterService.getAll()
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getPlayerCharacters() {
    let auth = CookieService.getAuthAccess();
    PlayerService.getAll(auth.user.id)
      .then((response) => {
        console.log(response.data);
        setPlayerCharacters(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleDelete = () => {};

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
  };

  const handleOnHover = (result) => {
    // the item hovered
  };

  const handleOnSelect = (item) => {
    // the item selected
    setCharacter(item);
  };

  const handleOnFocus = () => {};

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  function addCharacter() {
    let auth = CookieService.getAuthAccess();
    PlayerService.create(auth.user.id, character)
      .then((response) => {
        console.log(response.data);
        setPlayerCharacters(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">Current Characters</div>
        <div className="container card-body">
          <div className="col-md-8">
            <ReactSearchAutocomplete
              items={characters}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
            <br />
            <Button onClick={addCharacter} variant="primary">
              Add Character
            </Button>
          </div>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {playerCharacters &&
                playerCharacters.map((character) => (
                  <tr key={character.id}>
                    <td>{character.name}</td>
                    <td>
                      <Button
                        data-character-id={character.id}
                        onClick={handleDelete}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
