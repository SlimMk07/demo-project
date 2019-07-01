import React from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import OneTeacher from './one-teacher';

const teachers = [
    {
        image: require('./teachers-img/1.jpg'),
        name: 'Alex',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>
    },
    {
        image: require('./teachers-img/9.jpg'),
        name: 'Sarah',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./teachers-img/3.jpg'),
        name: 'Mustapha',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    }, 
    {
        image: require('./teachers-img/2.jpg'),
        name: 'Fawzia',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    
    {
        image: require('./teachers-img/5.jpg'),
        name: 'Diego',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./teachers-img/8.jpg'),
        name: 'Bornia',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./teachers-img/6.jpg'),
        name: 'Fawzi',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./teachers-img/7.jpg'),
        name: 'Samira',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>
    },
    {
        image: require('./teachers-img/4.jpg'),
        name: 'Valentino',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
   
]


function TeacherList() {
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className='teachers-list'>
                                        <div className='row teachers'>
                                            <OneTeacher teacher={teachers} />
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>





    );
}


export default TeacherList;