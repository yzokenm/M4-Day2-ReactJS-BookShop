import {Navbar, Nav} from 'react-bootstrap'


const MyNavbar =()=> (
  <Navbar className="my-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"> StriveBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>



)

export default MyNavbar
