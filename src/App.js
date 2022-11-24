import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import ItemsListContainer from './components/ItemsListContainer';



function App() {
  return ( 
    <div className = "App" >
       <header>
            <Navbar/>
     </header>
      <main>
          <ItemsListContainer/>
      </main>
      <footer>
      </footer>
      
      </div>
  );
}

export default App;