const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let search = " ";
const APP_ID = "c6f7f6b6";
const APP_key = "c78b1d0f509a34f5d83b4ff2a6c461c2";

let baseURL = `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=${APP_ID}&app_key${APP_key}`;

// When we submit the form we want to do something
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    search = e.target.querySelector("input").value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=${APP_ID}&app_key${APP_key}&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results){
    let generateHTML = " ";
    results.map(result => {
        generateHTML += 
        `
        <div class="item">
            <img src="${result.recipe.image}" alt="html.com">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="view-btn" href="${result.recipe.url}"><ion-icon name="add-outline"></ion-icon></a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.tofixed(2)}</p>
        </div>
        `
    })
    searchResult.innerHTML = generateHTML;
}