const inputMealName = document.getElementById('inputMealName')
const searchBtn = document.getElementById('searchBtn')
const menu = document.getElementById('menu')
const showIngredients = document.getElementById('showIngredients')
searchBtn.addEventListener('click', searchName)
menu.addEventListener('click',showDetail)



function searchName(){
    let inputWard = inputMealName.value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputWard}`)
    .then(res => res.json())
    .then(data =>{
        let menuDetails = ``
        if(data.meals){
        data.meals.forEach(meal => {
            menuDetails += `
            <div class="meal-item" id="idMeal">
          <div class="xxx">  
          <img src="${meal.strMealThumb}">
          <h3>${meal.strMeal}<h3/></div>

            <div/> `
            
            })
         } else{
             menuDetails = 'sorry , we did not find any meal!'
         }
             menu.innerHTML = menuDetails
            
    });    
}  
        
function showDetail(){
    let inputWard = document.getElementById('inputMealName').value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputWard}`)
    .then(res => res.json())
    .then(data =>{
    
        let allIngredients= `
       
        <ul>
        <li>${data.meals[0].strIngredient1}</li>
        <li>${data.meals[0].strIngredient2}</li>
        <li>${data.meals[0].strIngredient3}</li>
        <li>${data.meals[0].strIngredient4}</li>
        <li>${data.meals[0].strIngredient5}</li>
        <li>${data.meals[0].strIngredient6}</li>
        <li>${data.meals[0].strIngredient7}</li>
        <li>${data.meals[0].strIngredient8}</li>
        </ul>
        `

        showIngredients.innerHTML = allIngredients
    
    
    
    })
   
}
    
       

        
            
    
