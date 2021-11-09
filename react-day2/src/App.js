import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div>
    <MyNavbar />
    <Welcome />
    <Container>
      <Row>
        <Col xs={12} md={4} lg={3}>
          <LatestRelease />
        </Col>
      </Row>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
