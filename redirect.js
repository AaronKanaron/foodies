function search(query){
	const urlParams = new URLSearchParams(window.location.search);
	urlParams.set('s', query);
	Param = window.location.search = urlParams;
	window.location.href = "search.html?" + Param;
	
}
console.log(window.location.search)