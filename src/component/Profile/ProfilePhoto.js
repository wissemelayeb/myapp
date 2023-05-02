import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MESSI from '../../Image/MESSI.jpg'
import Form from 'react-bootstrap/Form';
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
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
</Card.Body>
</Card>
</div>
)
}

export default ProfilePhoto