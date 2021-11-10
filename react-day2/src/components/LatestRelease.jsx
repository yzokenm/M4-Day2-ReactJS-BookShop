import {Card, Button, Container, Row, Col, Form} from 'react-bootstrap'
import books from '../data/scifi.json'
import {Component} from 'react'

class LatestRelease extends Component {
  state = {
    queryBook:'',
  }
  filteredBooks(queryBook){
    return( this.props.books.filter((book) => book.title.includes(queryBook)));
  }
  render(){
    return(
      <Container>
      <Form>
      <Form.Group>
      <Form.Control type="text" placeholder="Search..." value={this.state.queryBook}
      onChange={(e)=>{
        this.setState({queryBook: e.target.value})

      }}


      />
      </Form.Group>
      </Form>
      <Row>
          {
            books.map(book => (
              <Col xs={12} md={6} lg={3}>
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
