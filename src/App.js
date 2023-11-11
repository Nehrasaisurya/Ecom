import "./App.css";
import Body from "./Components/Body";
import Singleproduct from "./Components/Singleproduct";
import { Provider } from "react-redux";
import appStore from "./Constants/appStore";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/:id" element={<Singleproduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
