import { useState, useEffect } from "react";
import CommentList from './CommentList'
import CommentArea from './CommentArea'

const ReadComments =(props)=> {
  const [comments, setComments] = useState([])
  // state = {
  //   comments:[],
  // }
  useEffect(async()=> {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
        props.asin,
        {
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzY2NDIzOTcsImV4cCI6MTYzNzg1MTk5N30.8rTKp0SJcpuvBn84gsfwTWnfrbs47GmOZrCNbNejqbM"
          }
        }
      );
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }

  }, [props.asin])

    return(
      <>
      <div>
        <CommentList commentsToShow={comments} />

      </div>
      </>
    )



  }
  export default ReadComments
