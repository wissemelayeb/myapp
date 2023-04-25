import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MESSI from '../../Image/MESSI.jpg'
const ProfilePhoto = () => {
return (
<div style = {{ display : 'flex', justifyContent : 'center', marginTop : '30px'}}>
<Card style={{ width: '18rem'}}>
<Card.Img variant="top" src={MESSI} />
<Card.Body>
<Card.Title>Leonel Messi</Card.Title>
<Card.Text>
Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, 
est un footballeur international argentin jouant au poste d'attaquant au Paris Saint-Germain. 
Septuple vainqueur du Ballon d'or, un record, 
il est considéré comme l'un des meilleurs joueurs de football toutes générations confondues.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
</div>
)
}

export default ProfilePhoto
