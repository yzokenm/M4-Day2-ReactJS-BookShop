import {Card, Button, Container, Row, Col, Form} from 'react-bootstrap'
import books from '../data/scifi.json'
import {Component} from 'react'

class LatestRelease extends Component {
  state = {
    queryBook:'',
  }
  filteredBooks(queryBook){
    return(
      books.filter((book) => book.title.toLowerCase().includes(queryBook))
    );
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
            this.filteredBooks(this.state.queryBook).map(books => (
              <Col xs={12} md={6} lg={3}>
                  <Card.Body key={books.asin}>
                    <Card.Img  style={{objectFit:'cover'}} src={books.img} />
                    <Card.Title>{books.title}</Card.Title>
                    <Card.Text>{books.category}</Card.Text>
                    <Button variant="primary">${books.price}</Button>
                  </Card.Body>
                  </Col>
            ))
          }
        </Row>
        </Container>)
  }

}
export default LatestRelease
