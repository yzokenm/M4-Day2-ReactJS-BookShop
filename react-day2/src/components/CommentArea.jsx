import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'


class CommentArea extends Component {
  state = {
    comments: {
      comment: this.props.comment,
      rate: this.props.rate,
      elementId: this.props.asin,
    }
  }
  handleComment = (commentArea, value) => {
        this.setState({
            comments: {
                ...this.state.comments,
                [commentArea]: value
            }
        })
    }


   handleSubmit =async(e)=> {
    e.preventDefault()
    console.log(this.state.comments)
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method:"POST",
        body: JSON.stringify(this.state.comments),
        headers: {
           'Content-type': 'application/json',
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzY2NDIzOTcsImV4cCI6MTYzNzg1MTk5N30.8rTKp0SJcpuvBn84gsfwTWnfrbs47GmOZrCNbNejqbM"
        }
      })

      if(response.ok){
        alert("Posted")

      }else{
        alert("Error")
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
              <Form.Label>Rate me</Form.Label>
              <Form.Control as="select"  value={this.state.comments.rate}
              onChange={(e) => {
                this.handleComment('rate', e.target.value)
              }}
              required


              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>

              <Form.Label className="mt-4" >Leave a Comment</Form.Label>
              <Form.Control  as="textarea" rows={3}
              value={this.state.comments.comment}
              onChange={(e) => {
                this.handleComment('comment', e.target.value)
              }}
              required

               />
               <Form.Label className="mt-4">Give an ID</Form.Label>
              <Form.Control
                 type="number"
                 value={this.state.comments.elementId}
                 onChange={(e) => {
                     this.handleComment('elementId', e.target.value)
                 }}
                 required
              />
          </Form.Group>
          <Button type="submit" variant="success">Submit</Button>
        </Form>
      </>
    )
  }
}
export default CommentArea
