import { Component } from "react";
import CommentList from './CommentList'
import CommentArea from './CommentArea'

class ReadComments extends Component{
  state = {
    comments:[],
  }

  componentDidMount =async()=> {
    try {
     let response = await fetch(
       "https://striveschool-api.herokuapp.com/api/comments/" +
         this.props.asin,
       {
         headers: {
           Authorization:
             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzY2NDIzOTcsImV4cCI6MTYzNzg1MTk5N30.8rTKp0SJcpuvBn84gsfwTWnfrbs47GmOZrCNbNejqbM"
         }
       }
     );
     if (response.ok) {
       let comments = await response.json();
       this.setState({ comments: comments});
     } else {
       console.log("error");
     }
    } catch (error) {
     console.log(error);
   }
  };
  render(){
    return(
      <>
      <div>
        <CommentList commentsToShow={this.state.comments} />

      </div>
      </>
    )
  }



  }
  export default ReadComments
