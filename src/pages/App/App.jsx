import Home from '../Home/Home'
import SearchResult from '../SearchResult/SearchResult';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search/:user" element={<SearchResult />}/>
      {/* <Route path="*" element={<PageNotFound />}/> */}
      </Routes>
    </Router>
  );
}

export default App
