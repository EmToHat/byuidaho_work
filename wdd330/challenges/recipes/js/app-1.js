const breakfastRecipes = "./recipes-1.json";

const bb_recipe_ul = document.querySelector("#breakfast-info-ul");

fetch(breakfastRecipes)
  .then((response) => response.json())
  .then(function (jsonObject) {
    console.table(jsonObject);
    const recipes = jsonObject["recipes"];
    recipes.forEach(showRecipes);
  });

function showRecipes(recipe) {
  //Elements
  // Element holds everything img | name | time | servings | ingredients
  let bb_recipe_li = document.createElement("li");
  
  // IMAGES
  let image_figure = document.createElement("figure");
  let image = document.createElement("img");

  // FIGCAPTION
  let recipeName_1 = document.createElement("h3")

  let recipeName = document.createElement("figcaption");

  let recipeInstructions = document.createElement("p");

  //innerHTML
  recipeName_1.innerHTML = `${recipe.name}`;
  recipeInstructions.innerHTML = `${recipe.instructions}`;
  // instructions container
  // ul 
  // li

  // Recipe Imgs
  image.setAttribute("src", recipe.imageurl);
  image.setAttribute("alt", "Image of " + `${recipe.name}`);
  image.setAttribute('loading', 'lazy');

  
  recipeName.appendChild(recipeName_1);
  image_figure.appendChild(image);
  image_figure.appendChild(recipeName);

  //Append the items to the container recipeBox
  bb_recipe_li.appendChild(image_figure);
  bb_recipe_li.appendChild(recipeInstructions);

  //Append the recipeBox to the list recipeBoxes
  bb_recipe_ul.appendChild(bb_recipe_li);
}