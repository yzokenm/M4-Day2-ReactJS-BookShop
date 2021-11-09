import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import books from '../data/scifi.json'
import {Component} from 'react'

class LatestRelease extends Component {
  render(){
    return(
      <Container>
      <Row>
          {
            books.map(book => (
              <Col xs={4} md={6} lg={3}>
                  <Card.Body key={book.asin}>
                    <Card.Img  style={{objectFit:'cover'}} src={book.img} />
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Button variant="primary">${book.price}</Button>
                  </Card.Body>
                  </Col>
            ))
          }
        </Row>
        </Container>)
  }

}
export default LatestRelease
