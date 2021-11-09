import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import books from '../data/horror.json'
const LatestRelease =()=> (
  <Container>
    <Row>
      <Col xs={12} md={6} lg={3}>
      <Card>
      {
        books.map(book => (
          <Card.Body>
          <Card.Img variant="top" src={book.img} />
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.category}
            </Card.Text>
            <Button variant="primary">${book.price}</Button>
          </Card.Body>
        ))
      }
      </Card>

      </Col>
    </Row>
  </Container>
)
export default LatestRelease
