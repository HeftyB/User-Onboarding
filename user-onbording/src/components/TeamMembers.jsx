import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function TeamMembers(props) {
    const {teamMembers} = props;
    const team = teamMembers.map( (item) => {
        return (
            <div className="teamMember" key={item.id}>
                <Card>
                <CardImg className="userImg" top width="10%" src={item.avatar} alt={`Img of ${item.name} has failed to load.....`} />
                <CardBody>
                    <CardTitle>Name: {item.first_name} {item.last_name}</CardTitle>
                    <CardSubtitle>Role: {!item.role?`No Role Selected`:item.role}</CardSubtitle>
                    <CardText>Email: {item.email}</CardText>
                    {/* <Button 
                    // git clickevent callback to direct user to git
                    >User's Git</Button> */}
                </CardBody>
                </Card>
            </div>
        )
    })

    return (
        <div>
            <h1>The Current Team</h1>
            {team}            
        </div>
    )
}
