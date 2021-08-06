import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList'
import CharacterForm from './CharacterForm'
import { alertService } from '../../_services';
import { Alert } from 'react-bootstrap';

const CharacterContainer = ( {match} ) => {
    const { path } = match;

    const [ alertMessage, setAlertMessage] = useState([]);

    useEffect(() => {
        const subscription = alertService.getAlert().subscribe(alert => {
            if(alert) {
                setAlertMessage([...alertMessage, alert]);
            } else {
                setAlertMessage([]);
            }
        });
        return () => {
            subscription.unsubscribe();
        }

    }, [])


    return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-12'>
                <h2> Manage Characters </h2>

                { alertMessage.map((message, index) =>
                <Alert variant={message.type} key={index}>
                <p>
                    { message.text }
                </p>
                </Alert>
            )
            }
                <Switch>
                    <Route exact path={path} component={CharacterList} />
                    <Route path={`${path}/create`} component={CharacterForm} />
                    <Route path={`${path}/edit/:id`} component={CharacterForm} />
                </Switch>
                </div>
            </div>
        </div>
    );
}

export default CharacterContainer;