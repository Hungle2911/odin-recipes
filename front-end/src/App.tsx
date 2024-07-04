import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import RecipesPage from "./routes/RecipesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
    </>
  );
}

export default App;
