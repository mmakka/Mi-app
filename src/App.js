
import './App.css';
import {ItemsListContainer} from './components/ItemsListContainer';
import{Layout} from "./components/Layout";

function App() {
  return ( 
    <div className = "App" >
      <Layout>
       <ItemsListContainer/>
       </Layout>
   </div>
);
}

export default App;