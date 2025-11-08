import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layouts from './components/Layouts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layouts />} />
      </Routes>
    </Router>
  );
}

export default App;