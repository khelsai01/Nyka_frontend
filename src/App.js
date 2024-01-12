import { useSelector } from 'react-redux';
import './App.css';
import AddProduct from './pages/AddProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AllRoutes from './pages/AllRoutes';
import Navbar from './pages/Navbar';


function App() {

  const {isAuth} = useSelector((store)=>store.authReducer.isAuth);

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
     {/* {!isAuth?  <Login/>:  <Dashboard />} */}
      {/* <AddProduct /> */}
    
    </div>
  );
}

export default App;
