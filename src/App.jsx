import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Translator from "./components/Translator";
import StringGenerator from "./components/StringGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/string_generator" element={<StringGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
