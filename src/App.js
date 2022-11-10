import logo from './logo.svg';
import './App.css';
import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from './components/NavBar';
import {FontAwesonmeIcon} from "@fortawesome/react-fontawesome";
import faBell from "@fortawesome/free-solid-svg-icons";

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