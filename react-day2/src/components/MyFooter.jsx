import {Nav} from 'react-bootstrap'


const MyFooter =()=>(

      <Nav className="my-row justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
      </Nav>
)
export default MyFooter
