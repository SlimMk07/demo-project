import React from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import OneStudent from './one-student';

const students = [
    {
        image: require('./students-img/1.jpg'),
        name: 'Rondino',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>
    },
    {
        image: require('./students-img/9.jpg'),
        name: 'Amelie',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./students-img/3.jpg'),
        name: 'David',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    }, 
    {
        image: require('./students-img/2.jpg'),
        name: 'Zoubaida',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    
    {
        image: require('./students-img/5.jpg'),
        name: 'El-Ajmi',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./students-img/8.jpg'),
        name: 'Mariam',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./students-img/6.jpg'),
        name: 'Lotfi',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./students-img/7.jpg'),
        name: 'Monjia',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>
    },
    {
        image: require('./students-img/4.jpg'),
        name: 'Celine',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
   
]


function StudentList() {
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className='students-list'>
                                        <div className='row students'>
                                            <OneStudent student={students} />
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


export default StudentList;