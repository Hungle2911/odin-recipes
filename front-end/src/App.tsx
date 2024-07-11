import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import RecipesPage from "./routes/RecipesPage";
import RecipeDetailsPage from "./routes/RecipeDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
