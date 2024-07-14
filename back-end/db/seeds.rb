# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Recipe.destroy_all

Recipe.create!([{
  name: "Baked Dijon Salmon",
  description: "This mustard-crusted salmon is a wonderful way to prepare fresh salmon fillets in the oven. Be sure to make extra — your family will be begging for more!",
  ingredients: '¼ cup butter, melted, 3 tablespoons Dijon mustard, 1 ½ tablespoons honey, ¼ cup dry bread crumbs, ¼ cup finely chopped pecans, 4 teaspoons chopped fresh parsley, 4 (4 ounce) fillets salmon, salt and pepper to taste, 1 lemon, for garnish',
  instruction: 'Preheat the oven to 400 degrees F (200 degrees C). Stir together butter, mustard, and honey in a small bowl. Set aside. Mix together bread crumbs, pecans, and parsley in another bowl. Brush each salmon fillet lightly with honey mustard mixture, and sprinkle the tops of fillets with bread crumb mixture. Bake salmon in the preheated oven until it flakes easily with a fork, 12 to 15 minutes. Season with salt and pepper, and garnish with a wedge of lemon.',
  image: 'https://i.ibb.co/thLK46w/21176.webp'
},
{
  name: "Creamy Bay Scallop Spaghetti",
  description: "This scallop pasta dinner with a creamy sauce is fast and easy. I cook the scallops a bit longer than many chefs, but that gives the dish more flavor and they're still tender and moist. I think you'll agree, the sherry sauce benefits significantly from the longer cook time.",
  ingredients: '8 ounces uncooked thick spaghetti, 1 tablespoon vegetable oil, 1 pound bay scallops, 2 tablespoons butter, 3 cloves garlic, minced, ⅓ cup dry sherry, 1 cup heavy cream, 2 tablespoons chopped Italian parsley, divided, 1 lemon',
  instruction: 'Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until tender yet firm to the bite, about 10 minutes or 1 minute less than directed on the package. Meanwhile, heat oil in a large skillet over high heat. When oil just starts to smoke, add scallops and move them into a single layer. Let sear on high for about 1 minute. Toss to turn. Add butter and stir scallops until butter melts. Stir in garlic. Add lemon zest and red pepper flakes. Stir in sherry and cook and stir until alcohol cooks off, about 1 minute. Pour in cream. When mixture begins to simmer, reduce heat to medium-low. Add salt, pepper, and lemon juice. Drain pasta. Transfer to skillet with scallops; bring to a simmer. Add 1/2 of the chopped parsley. Cook until pasta is heated through and tender, about 1 minute. Remove from heat. Garnish generously with grated cheese. Add the rest of the parsley. Serve in warm bowls.
',
image: 'https://i.ibb.co/6NkxTsv/255021.webp'
},
{
  name: "Tuna Fish Salad",
  description: "This tuna fish is excellent served on top of a green salad or between two pieces of bread with fresh lettuce. Sprinkle a little paprika on top to add a little flavor and color.",
  ingredients: '½ cup mayonnaise, ¼ cup chopped celery, ¼ cup chopped onion, 1 tablespoon chopped fresh parsley, ½ teaspoon lemon juice, ¼ teaspoon garlic powder',
  instruction: 'To get started, you’ll need to drain your tuna. After cutting the lid with a can opener, press the lid against the tuna and tilt the can to drain all the liquid out over a sink. Remove the lid and place the tuna in a medium sized bowl. Then, add the mayonnaise, celery, red onion, parsley, and dijon mustard to the bowl. Use a fork to mix everything together, while breaking up any large pieces of tuna. Season with salt and pepper to taste – and that’s it!',
  image: 'https://i.ibb.co/PNFLjJV/16468.webp'
}])

p "Created #{Recipe.count} movies"