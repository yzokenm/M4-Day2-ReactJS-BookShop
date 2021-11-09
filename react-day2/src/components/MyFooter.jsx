import {Nav, Container, Row} from 'react-bootstrap'


const MyFooter =()=>(
  <Container >
    <Row className="my-row d-flex justify-content-center">
      <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
      </Nav>
    </Row>
  </Container>
)
export default MyFooter
