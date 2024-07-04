import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import RecipeCard from "../components/RecipeCard";
import NoRecipes from "../components/NoRecipe";
import { useEffect } from "react";

const fetchRecipes = async () => {
  const url = "http://localhost:3000/api/v1/recipes";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
};

const RecipesPage = () => {
  const navigate = useNavigate();

  const {
    data: recipes = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => fetchRecipes(),
  });

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading recipes</div>;
  }

  return (
    <>
      <section className="">
        <div className="">
          <h1 className="">Recipes for every occasion</h1>
          <p className="">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="">
        <main className="">
          <div className="">
            <Link to="/recipe" className=" ">
              Create New Recipe
            </Link>
          </div>
          <div className="">
            {recipes.length > 0 ? (
              recipes.map((recipe: any) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <NoRecipes />
            )}
          </div>
          <Link to="/" className=" ">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default RecipesPage;
