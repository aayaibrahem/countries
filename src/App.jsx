import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="bg-gray-50 h-screen  dark:bg-gray-800 dark:text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter />
                <Countries />
              </>
            }
          />
          <Route path="/countries/:name" element={<Country />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
