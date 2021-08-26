import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import WelcomeJumbotron from './components/Welcome'
import LatestRelease from './components/LatestRelease'

function App() {
  return (
  <>
    <MyNav title="Book-Castle In The Sky"/>
    <WelcomeJumbotron/>
    <LatestRelease/>
    <div className="m-5">
      <h4>End of Page</h4>
    </div>
    <MyFooter title="Book-Castle In The Sky" person="WH Ang"/>
  </>

  )
}

export default App;
