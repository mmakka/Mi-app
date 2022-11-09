import logo from './logo.svg';
import './App.css';
import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from './components/NavBar';

function App() {
  return ( 
    <div className = "App" >
     <header>
      <NavBar />
     </header>
     <main>
      <ItemsListContainer greeting={"Bienvenidos"} />
     </main>
    </div>
  );
}

export default App;