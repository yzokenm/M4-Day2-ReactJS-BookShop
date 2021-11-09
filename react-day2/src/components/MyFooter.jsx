import {Nav} from 'react-bootstrap'


const MyFooter =()=>(

      <Nav className="my-row justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#">FAQ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#">About</Nav.Link>
          </Nav.Item>
      </Nav>
)
export default MyFooter
