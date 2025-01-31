import './assets/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Markdown from "./components/Markdown";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Markdown' element={<Markdown />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;