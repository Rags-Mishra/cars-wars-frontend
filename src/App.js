import Navbar from "./components/Navbar";
import UserAuthState from "./context/userAuth/UserAuthState";
import CarsCatalogue from "./screens/CarsCatalogue";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import CarsState from "./context/cars/CarsState";
import Home from "./screens/Home";
function App() {
  return (
    <>
      <CarsState>
        <UserAuthState>
        <Router>

          <Navbar />
            <Routes>
              <Route exact path="/cars-catalogue" element={<CarsCatalogue />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        </UserAuthState>
      </CarsState>
    </>
  );
}

export default App;
