
//Food search Area 
document.getElementById('button-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchInText = searchField.value;
    searchField.value = '';
    // console.log(searchInText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInText}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => loadingFood(data.meals))

})

const loadingFood = foods => {
    const foodContainer = document.getElementById('foodsContainer');
    foodContainer.textContent = '';
    foods.forEach(food => {
        // console.log(food)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
            ` <div onclick="displayMealDetails('${food.idMeal}')" class="card h-100">
       <img src="${food.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">${food.strMeal}</h5>
           <p class="card-text">${food.strInstructions.slice(0, 300)}</p>
       </div>
   </div>
       `;
        foodContainer.appendChild(div)
    })
}

function displayMealDetails(idMeal) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(IDmeal => signgleMeal(IDmeal.meals))
}

const signgleMeal = meals => {
    const mealContainer = document.getElementById('single-meal');
    mealContainer.textContent = '';
    for (const meal of meals) {
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML =
            `<h3>Region:${meal.strArea}</h3> 
            <h4>ID number: ${meal.idMeal}</h4>
            <p>Weight: ${meal.strMeasure1}</p>
            <p>Category: ${meal.strCategory}</p>
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       `;
        mealContainer.appendChild(div)
    }
}
