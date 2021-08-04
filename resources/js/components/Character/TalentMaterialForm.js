import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import ScheduleService from '../../_services/schedule-service';
import TalentMaterialService from '../../_services/talent-material-service';

import { alertService } from '../../_services';



const TalentMaterialForm = () => {

    const initialTalentMaterialState = {
        name: '',
        scheduleId: '',
    };

    const [talentMaterial, setTalentMaterial] = useState(initialTalentMaterialState);
    const [schedules, setSchedules] = useState([]);

    useEffect(()=> {
        getSchedules();
    }, [])

    const getSchedules = () => {
        ScheduleService.getAll()
            .then(response => {
                setSchedules(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleInputChange = event => {
        
        const { name, value } = event.target;
        setTalentMaterial({
            ...talentMaterial,
            [name]: value
        });
    }

    const history = useHistory();

    const saveTalentMaterial = event => {
        event.preventDefault();
        var talentMaterialData = {
            name: talentMaterial.name,
            schedule_id: talentMaterial.scheduleId,
        };
        TalentMaterialService.create(talentMaterialData)
        .then(response => {
            console.log(response);
        })

        alertService.sendAlert(
            {
                type: 'success',
                text: "Talent Material added successfully!",
            }
        );

        history.push('/talentMaterials');
    }

    return (
        <div className='card'>
            <div className='card-header'>Create a TalentMaterial</div>
            <div className='card-body'>

                <Form onSubmit={saveTalentMaterial}>
                    <Form.Group className="mb-3" controlId="talentMaterialForm.ControlInput1">
                        
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={talentMaterial.name} onChange={handleInputChange} placeholder="Name of Talent Material" /> 

                        <Form.Label>Schedule</Form.Label>
                        <Form.Control as="select" name="scheduleId" value={talentMaterial.scheduleId} onChange={handleInputChange}>
                            <option value="" disabled>Select schedule</option>
                            {schedules && schedules.map(
                                schedule => (
                                    <option key={schedule.id} value={schedule.id}>{schedule.name}</option>
                                )
                            )
                            }
                        </Form.Control>

                        <br />
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default TalentMaterialForm;