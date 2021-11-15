import { ListGroup } from 'react-bootstrap'

const CommentList = ({ commentsToShow }) => (
    <ListGroup style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
              <ListGroup.Item>{comment.comment}</ListGroup.Item>

            ))
        }
    </ListGroup>
)

export default CommentList
