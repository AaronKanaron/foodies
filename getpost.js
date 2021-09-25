const search = (new URLSearchParams(window.location.search)).get('s');

console.log(search)


fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "fe547365c9msh05885876c12c449p15bb23jsn68cb9b7b84d8"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});