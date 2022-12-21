
import './App.css';
import ItemsListContainer from './components/ItemsListContainer';
import { cartContext } from './context/cartContext';
import{Layout} from "./components/Layout";



function App() {
  return ( 
    <div className = "App" >
       <cartContext.Provider value ={[]}>
         <Layout>
          <ItemsListContainer/>
          </Layout>
          </cartContext.Provider>
      </div>
  );
}

export default App;