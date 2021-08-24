
import {Container, Card, Row, Col} from 'react-bootstrap'
import fantasybooks from '../data/fantasy.json'
import {Component} from 'react'
import './LatestReleaseFantasy.css'

class LatestReleaseFantasy extends Component{

    // mandatory method for every class
    render() {
        return(
            <Container>
                <Row className="justify-content-center">
                    
                        {
                           fantasybooks.map(book =>( 
                               //a unique key is needed
                            <Col xs={12} sm={6} md={4} className="mb-2" key={book.asin}>
                            <Card id={book.asin} className="wholeCard">
                                <Card.Img variant="top" src={book.img} style={{height: "16rem" }} className="img-fluid" alt="bookimage"/>
                                    <Card.Body>
                                        <Card.Title id="bookTitle">{book.title}</Card.Title>
                                    </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Price: {book.price}Eur</small>
                                </Card.Footer>
                            </Card> 
                            </Col>

                            )
                           )
                        }
                   
                </Row>
            </Container>
        )
    }

}

export default LatestReleaseFantasy

