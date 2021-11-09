import {Card, Button} from 'react-bootstrap'
import books from '../data/horror.json'
const LatestRelease =()=> (
      <Card xs={12} md={4} lg={3}>
      {
        books.map(book => (
          <Card.Body>
          <Card.Img src={book.img} />
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.category}
            </Card.Text>
            <Button variant="primary">${book.price}</Button>
          </Card.Body>
        ))
      }
      </Card>


)
export default LatestRelease
