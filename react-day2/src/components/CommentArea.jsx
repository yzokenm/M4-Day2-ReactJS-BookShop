import {Component} from 'react'

class CommentArea extends Component {
  state = {
    comments: {
      "comment": string,
      "rate": string,
      "elementId": string
    }
  }

  render() {
    return(
      <>
        <Form.Group>
            <Form.Label>Rate me</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>

            <Form.Label>Leave a Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
      </>
    )
  }
}
export default CommentArea
