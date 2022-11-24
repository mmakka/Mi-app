import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailConteiner from './components/ItemDetailContainer';
import{Layout} from "./components/Layout";



function App() {
  return ( 
    <div className = "App" >
         <Layout>
          <ItemsListContainer/>
          <ItemDetailConteiner/>
          </Layout>
      </div>
  );
}

export default App;