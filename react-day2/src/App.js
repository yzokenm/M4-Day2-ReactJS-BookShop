import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'
import WarningSign from './components/WarningSign'
import Mybadge from './components/Mybadge'
import ReceiveComment from './components/ReceiveComment'
import CommentArea from './components/CommentArea'
import {Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div>
    <MyNavbar />
    <Welcome />
    <WarningSign text="This is a Warning Alert " />
    <Row>
      <Col xs={12} md={8} lg={8}>
        <Mybadge color='danger' name ="Important!" />
        <LatestRelease />
      </Col>
      <Col xs={4} md={4} lg={3} className="mt-5">
        <CommentArea />
      </Col>
    </Row>
    <MyFooter />
    </div>
  );
}

export default App;
