import {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import ReadComments from './ReadComments'


class SingleBook extends Component {
  state = {
    selectedCard: false
  }


  render(){
    return(
      <>
        <Card.Body key={this.props.bk.asin}
        onClick={() => {
          this.setState({ selectedCard: !this.state.selectedCard });


        }}
        style={{ border: this.state.selectedCard ? '1px solid blue' : 'none' }}
        >

        <Card.Img  style={{objectFit:'cover'}} src={this.props.bk.img} />
        <Card.Title>{this.props.bk.title}</Card.Title>
        <Card.Text>{this.props.bk.category}</Card.Text>
        <Button variant="primary">${this.props.bk.price}</Button>
        </Card.Body>

        {
          this.state.selectedCard &&
          <ReadComments asin={this.props.bk.asin}

          />
        }
      </>

    )
  }
}
export default SingleBook
