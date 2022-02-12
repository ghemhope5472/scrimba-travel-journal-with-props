
import './App.css';
import Navbar from './components/Navbar';
import Places from './components/Places';
import Data from './Data'

function App() {

  const destination = Data.map( (place) => {
    return(
       <Places  
            key={place.id}
            {...place}
       />
    )
  })
  
  return (
    <>
      <Navbar />
       { destination }
      
    </>
  );
}

export default App;
