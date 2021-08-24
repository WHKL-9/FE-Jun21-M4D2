import {Nav, Container, Row, Col} from 'react-bootstrap'
import './MyFooter.css'

const MyFooter = ({title, person}) => (
    <Container className="Footer-Container mt-5">
        <Row className="p-0">
            <Col sm={2} md={2} lg={2}></Col>
            <Col sm={8} md={8} lg={8}>
                <Nav defaultActiveKey="/home" className="flex-column text-center" background="dark" variant="dark">
                    <Nav.Link href="/home">Company: {title} </Nav.Link>
                    <Nav.Link eventKey="link-1">Contact: {person} </Nav.Link>
                    <Nav.Link eventKey="link-2">Imprint</Nav.Link>
                </Nav>
            </Col>
            <Col sm={2} md={2} lg={2}></Col>
        </Row>
    </Container>
)

export default MyFooter


