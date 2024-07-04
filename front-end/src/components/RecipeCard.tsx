import { Link } from "react-router-dom";
import { RecipeCardProps } from "../types/types";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="">
      <div className=" ">
        <img src={recipe.image} className="" alt={`${recipe.name} image`} />
        <div className="">
          <h5 className="">{recipe.name}</h5>
          <Link to={`/recipe/${recipe.id}`} className="">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
