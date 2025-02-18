import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Layout from "./components/layout/Layout"; // Ensure correct path

function App() {
  console.log("App is rendering");
  return (
    <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
          </Routes>
        </Layout>
    </Router>
  );
}

export default App;
