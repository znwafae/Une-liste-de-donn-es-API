async function get(){
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Moroccan")
        const data = await response.json()
        console.log(data)

        data.meals.map(food=> {         
        document.getElementsByClassName('foods')[0].innerHTML += `<div class="shadow-lg col-sm-3 cardUi card bg-dark text-light text-center mb-4 my-5">
        <img class="card-img-top" src = ${food.strMealThumb}><br> <p>${food.strMeal}</p><br></div>`        
        });
}
get()