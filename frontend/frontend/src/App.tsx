import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Layout from "./components/Layout"; // Ensure correct path

function App() {
  console.log("App is rendering");
  return (
    <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<Order />} />
          </Routes>
        </Layout>
    </Router>
  );
}

export default App;
