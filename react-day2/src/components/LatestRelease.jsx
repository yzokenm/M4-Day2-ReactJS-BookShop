import {Container, Row, Col, Form} from 'react-bootstrap'
import books from '../data/scifi.json'
import {Component} from 'react'
import SingleBook from './SingleBook'

class LatestRelease extends Component {
  state = {
    queryBook:'',
    isLoading: true
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
                  <SingleBook bk={books} />
              </Col>
            ))
          }
        </Row>
        </Container>)
  }

}
export default LatestRelease
