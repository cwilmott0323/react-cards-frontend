import './App.css';
import Dashboard from './Dashboard';
import AddCards from './AddCards';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useToken from "./useToken";
import TestRoute from "./TestRoute";
const App = () => {

     return (
            <div>
                <Router>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route exact path="/addcards" element={<AddCards/>}/>
                            <Route exact path="/dashboard" element={<Dashboard/>}/>
                            <Route exact path="/login" element={<Login/>}/>
                            <Route exact path="/test" element={<TestRoute/>}/>
                        </Routes>
                </Router>
            </div>
        );
}
export default App
