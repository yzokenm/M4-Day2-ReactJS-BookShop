import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'
import WarningSign from './components/WarningSign'
import Mybadge from './components/Mybadge'

function App() {
  return (
    <div>
    <MyNavbar />
    <Welcome />
    <WarningSign text="This is a Warning Alert " />
    <Mybadge color='danger' name ="Important!"/>
    <LatestRelease />
    <MyFooter />
    </div>
  );
}

export default App;
