import Home from "../Home/Home";
import SearchResult from "../SearchResult/SearchResult";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:user" element={<SearchResult />} />
          {/* <Route path="*" element={<PageNotFound />}/> */}
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
