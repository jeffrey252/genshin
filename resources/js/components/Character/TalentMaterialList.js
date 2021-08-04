import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import TalentMaterialService from '../../_services/talent-material-service'; 

const TalentMaterialList = ( {match} ) => {
    const { path } = match;
    const [talentMaterials, setTalentMaterials] = useState([]);
    
    useEffect(() => {
      getTalentMaterials();
    }, []);

    const getTalentMaterials = () => {
        TalentMaterialService.getAll()
        .then(response => {
            setTalentMaterials(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <div className='card'>
            <div className='card-header'>All TalentMaterials</div>
            <div className='card-body'>
            <Button href={`${path}/create`} variant="outline-primary">Create TalentMaterial</Button>
            <br />
            <br />
            <table className='table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Schedule</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {talentMaterials && talentMaterials.map(
                    talentMaterial => (
                    <tr key = {talentMaterial.id}>
                        <td>{talentMaterial.name}</td>
                        <td>{talentMaterial.schedule.name}</td>
                        <td>
                            <Button href={`${path}/edit/${talentMaterial.id}`} variant="dark">Edit</Button>
                        </td>
                    </tr>
                )
                )}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default TalentMaterialList;