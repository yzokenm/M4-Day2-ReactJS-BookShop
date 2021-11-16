import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const CommentArea =(props)=> {
  const [comments, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: props.asin

  })

  // state = {
  //   comments: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   }
  // }
  const handleComment = (commentArea, value) => {
        setComment({...comments, [commentArea]: value })
    }


   const handleSubmit =async(e)=> {
    e.preventDefault()
    console.log(comments)
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method:"POST",
        body: JSON.stringify(comments),
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

    return(
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>Rate me</Form.Label>
              <Form.Control as="select"  value={comments.rate}
              onChange={(e) => {
                handleComment('rate', e.target.value)
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
              value={comments.comment}
              onChange={(e) => {
                handleComment('comment', e.target.value)
              }}
              required

               />
               <Form.Label className="mt-4">Give an ID</Form.Label>
              <Form.Control
                 type="number"
                 value={comments.elementId}
                 onChange={(e) => {
                    handleComment('elementId', e.target.value)
                 }}
                 required
              />
          </Form.Group>
          <Button type="submit" variant="success">Submit</Button>
        </Form>
      </>
    )
}
export default CommentArea
