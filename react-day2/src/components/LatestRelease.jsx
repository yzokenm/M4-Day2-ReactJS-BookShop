import {Container, Row, Col, Form} from 'react-bootstrap'
import books from '../data/scifi.json'
import {useState} from 'react'
import SingleBook from './SingleBook'

const LatestRelease =()=> {
  const [queryBook, setQueryBook] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  const filteredBooks = (queryBook) => {
    return(
      books.filter((book) => book.title.toLowerCase().includes(queryBook))
    );
  }
    return(
      <Container>
        <Form>
        <Form.Group>
        <Form.Control type="text" placeholder="Search..." value={queryBook}
        onChange={(e)=>{
          setQueryBook(e.target.value)

        }}
        />
        </Form.Group>
        </Form>
      <Row>

          {
            filteredBooks(queryBook).map(books => (
              <Col xs={12} md={6} lg={3}>
                  <SingleBook bk={books} />
              </Col>
            ))
          }
        </Row>
        </Container>)

}
export default LatestRelease
