import { useSelector } from 'react-redux';
import './App.css';
import AllRoutes from './pages/AllRoutes';
import Navbar from './pages/Navbar';



function App() {

  const {isAuth} = useSelector((store)=>store.authReducer.isAuth);

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
