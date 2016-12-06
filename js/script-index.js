$(document).ready( function(){
	$(".js-back").hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	$(recipesArray).each(function(index){
		if(recipesArray[index].hasOwnProperty("highlighted") && recipesArray[index]["highlighted"] === true) {
			renderRecipe(index);
		}
	})
}

/*
* Función que se encarga de pintar UNA receta que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>TITULO DE LA RECETA</span><span class='metadata-recipe'><span class='author-recipe'> NOMBRE DEL AUTOR DE LA RECETA</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src='http'/></a>").appendTo(".list-recipes");
	$(".list-recipes img").last().attr("src", "img/recipes/320x350/" + recipesArray[recipe].name +  ".jpg");
	$(".title-recipe").last().text(recipesArray[recipe].title);
	$(".author-recipe").last().text(recipesArray[recipe].source.name);

	console.log(recipesArray[recipe].title);
	

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


function printNews(){
	$(".callout-news > p").text("NUEVAS RECETAS");
}
printNews();