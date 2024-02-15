import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import LandingPage from "./pages/LandingPage";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
