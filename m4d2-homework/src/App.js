import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import WelcomeJumbotron from './components/Welcome'
import LatestReleaseFantasy from './components/LatestReleaseFantasy'

function App() {
  return (
  <>
    <MyNav title="Book-Castle In The Sky"/>
    <WelcomeJumbotron/>
    <LatestReleaseFantasy/>
    <MyFooter title="Book-Castle In The Sky" person="WH Ang"/>
  </>

  )
}

export default App;
