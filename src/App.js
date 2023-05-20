import './App.css';
import CreateNewHome from "./components/demo-upload/CreateNewHome";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Pages404 from "./components/pages-404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/404'} element={<Pages404/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
