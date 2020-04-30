import React, {Component} from "react"
import { Container, Form, FormLabel, FormControl, FormText, Button } from "react-bootstrap"

class Contacts extends Component{
    render(){
        return(
                <Container style={{width: '500px'}}>
                    <h1 className='text-center'>Contact us</h1>
                    <Form.Group controlId='formBasicEmail'>
                        <FormLabel>Email address</FormLabel>
                        <FormControl type='email' placeholder='Enter email'/>
                        <FormText>
                            Мы никому не отправим ваши данные
                        </FormText>
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <FormLabel>Example textarea</FormLabel>
                        <FormControl as='textarea' rows='3'></FormControl>
                    </Form.Group>

                    <Form.Group controlId='formBasicCheck'>
                        <Form.Check type='checkbox' label='Check me out'/>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Submit</Button>
                </Container>
        )
    }
}

export default Contacts
