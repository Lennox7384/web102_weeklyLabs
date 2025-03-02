import './App.css'; //Imports the CSS file with code that styles the root application.
import Calendar from './components/Calendar';


const App = () => {

  return (
    <div className="App">
      <h1> The Week Before Ted Bundy got arrested</h1>
      <h2> This timetable charts his final spree, a chilling tale before the final end took him</h2>  
      <Calendar/> 
    </div>
  )
}

export default App



