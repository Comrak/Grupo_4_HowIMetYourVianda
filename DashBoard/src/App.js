import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import ProductList from "./pages/ProductList/ProductList";


function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
