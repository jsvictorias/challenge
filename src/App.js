import Main from "./components/main";
import Bag from "./components/bag";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="Bag" element={<Bag />}/>
      </Routes>
    </Router>
  );
}

export default App;
