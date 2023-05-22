import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import Pages404 from "./components/pages-404";
import CreateNewHotel from "./components/NewHotel";
import ComingSoon from "./components/ComingSoon";
import HotelDetails from "./components/HotelDetails";
import MyProperty from "./components/MyProperty";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}></Route>
                <Route path={'/404'} element={<Pages404/>}></Route>
                <Route path={'/create'} element={<CreateNewHotel/>}></Route>
                <Route path={'/coming-soon'} element={<ComingSoon/>}></Route>
                <Route path={'/hotels/'} element={<HotelDetails/>}></Route>
                <Route path={'/my-property/'} element={<MyProperty/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App;
