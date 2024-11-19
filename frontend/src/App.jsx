import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/protected/Home"
import Search from "./pages/protected/Search"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/search" element={<Search/>} />
          <Route exact path="/user" element={<h1>User</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
