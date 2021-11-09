import {Card, Button} from 'react-bootstrap'
import books from '../data/horror.json'
const LatestRelease =()=> (
      <Card>
      {
        books.map(book => (
          <Card.Body key={book.asin}>
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
