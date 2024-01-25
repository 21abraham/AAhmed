import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Dashboard from "./pages/Dashboard";
import Clone1 from "./pages/clone1";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Clone1 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
