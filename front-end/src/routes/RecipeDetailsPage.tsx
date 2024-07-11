import { Link, useNavigate, useParams } from "react-router-dom";
import Hero from "../components/RecipeHero";
import RecipeIngredients from "../components/RecipeIngredients";
import Instructions from "../components/RecipeInstruction";

const RecipeDetailsPage = () => {
  const recipe = {
    id: 4,
    name: "Baked Dijon Salmon",
    description:
      "This mustard-crusted salmon is a wonderful way to prepare fresh salmon fillets in the oven. Be sure to make extra — your family will be begging for more!",
    ingredients:
      "¼ cup butter, melted, 3 tablespoons Dijon mustard, 1 ½ tablespoons honey, ¼ cup dry bread crumbs, ¼ cup finely chopped pecans, 4 teaspoons chopped fresh parsley, 4 (4 ounce) fillets salmon, salt and pepper to taste, 1 lemon, for garnish",
    instruction:
      "Preheat the oven to 400 degrees F (200 degrees C). Stir together butter, mustard, and honey in a small bowl. Set aside. Mix together bread crumbs, pecans, and parsley in another bowl. Brush each salmon fillet lightly with honey mustard mixture, and sprinkle the tops of fillets with bread crumb mixture. Bake salmon in the preheated oven until it flakes easily with a fork, 12 to 15 minutes. Season with salt and pepper, and garnish with a wedge of lemon.",
    image:
      "https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg",
    created_at: "2024-07-05T02:34:56.758Z",
    updated_at: "2024-07-05T02:34:56.758Z",
  };
  return (
    <>
      <Hero image={recipe.image} name={recipe.name} />

      <div className="container py-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-1/4 px-2 mb-4 lg:mb-0">
            <RecipeIngredients ingredients={recipe.ingredients} />
          </div>
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <Instructions instructions={recipe.instruction} />
          </div>
          <div className="w-full lg:w-1/4 px-2"></div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/recipes" className="text-blue-600 hover:underline">
            Back to recipes
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailsPage;
