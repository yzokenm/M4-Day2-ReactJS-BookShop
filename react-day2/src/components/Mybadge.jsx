import Badge from 'react-bootstrap/Badge'

const Mybadge =(props)=> (
  <Badge variant={props.color} className="mb-5">{props.name}</Badge>
)
export default Mybadge
