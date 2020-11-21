$(document).ready(function(){
jsonTest();
})

var dom = "";

function jsonTest(){

	var len = Object.keys(news).length;

	for(var i = len-1; i >= 0; i--)
		makeList(i);

	addCode();
}

function makeList(num) {

	if (news[num].image == null) {
		dom += "<div class='card'>"
			+ "<div class='card-body'>"
			+ "<h4 class='card-title project_title'>"
			+ news[num].title
			+ "</h4>"
			+ "<p class='card-text'>"
			+ news[num].contents
			+ "</p>"
			+ "<p class='card-text'>"
			+ "<small class='text-muted'>"
			+ news[num].date
			+ "</small>"
			+ "</p>"
			+ "</div>"
			+ "</div>";
	} else {
		dom += "<div class='card'>"
			+ "<div class='card-body'>"
			+ "<h4 class='card-title project_title'>"
			+ news[num].title
			+ "</h4>"
			+ "<p class='card-text'>"
			+ news[num].contents
			+ "</p>"
			+ "<p class='card-text'>"
			+ "<small class='text-muted'>"
			+ news[num].date
			+ "</small>"
			+ "</p>"
			+ "</div>"
			+ "</div>";
	}
}

function addCode() {

	var adding = document.getElementById("news_list");
	
	adding.innerHTML = dom;
}