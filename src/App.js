import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Data from './components/Data';
function App() {
  const card=Data.map(item =>{
    return(
      <Cards 
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <>
    <Navbar></Navbar>
    {card}
    <hr />
    </>

  );
}

export default App;
