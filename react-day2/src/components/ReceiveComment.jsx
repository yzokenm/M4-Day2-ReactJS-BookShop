import {Component} from 'react'
import Table from 'react-bootstrap/Table'




class ReceiveComment extends Component {
  state = {
    postedComments: [],
  }


ComponentDidMount =()=> {
  this.fetchComments()
}


fetchComments =async()=> {
  try {
    let response = await fetch('https://striveschool-api.herokuapp.com/api/comments' ,{
      headers: {
         'Content-type': 'application/json',
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzY2NDIzOTcsImV4cCI6MTYzNzg1MTk5N30.8rTKp0SJcpuvBn84gsfwTWnfrbs47GmOZrCNbNejqbM"
      }
    })
    if(response.ok){
      let data = await response.json()
      this.setState({
        postedComments : data,

      })
    }
  } catch (e) {
    alert(e)

  }
}


render() {

    return(
      <>

      {
        this.state.postedComments.map(comments => (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>{comments.rate}</th>
                <th>{comments.comment}</th>
                <th>{comments.elementId}</th>
              </tr>
            </thead>
          </Table>


        ))
      }
    </>
    )
  }
}
export default ReceiveComment
