import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/homePage";
import Layouts from "./Layouts/indexLayout";
import Login from './pages/login/index';
import ReactDOM from "react-dom/client";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          { <Route path="login" element={<Login />} /> }
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// export default App;
