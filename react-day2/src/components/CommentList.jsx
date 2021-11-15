import { ListGroup } from 'react-bootstrap'

const CommentList = ({ commentsToShow }) => (
    <ListGroup style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                <div>{comment.comment}</div>
            ))
        }
    </ListGroup>
)

export default CommentList
