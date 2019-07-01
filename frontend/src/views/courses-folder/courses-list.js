import React from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import OneCourse from './one-course';

const courses = [
    {
        image: require('./courses-img/1.jpg'),
        name: 'Computer sciences',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>
    },
    {
        image: require('./courses-img/3.jpg'),
        name: 'English',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    }, 
    {
        image: require('./courses-img/2.jpg'),
        name: 'Mathematics',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    
    {
        image: require('./courses-img/5.jpg'),
        name: 'Sports',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
    {
        image: require('./courses-img/4.jpg'),
        name: 'Science',
        button: <button type="button" className="btn btn-primary btn-sm">Infos</button>

    },
   
]


function CourseList() {
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className='courses-list'>
                                        <div className='row courses'>
                                            <OneCourse course={courses} />
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


export default CourseList;