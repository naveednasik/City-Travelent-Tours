// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import TravelentTourPage from './page/TravelentTourPage/TravelentTourPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <Routes>
        <Route index element={<TravelentTourPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
