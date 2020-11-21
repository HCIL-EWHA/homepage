$(document).ready(function(){
jsonTest();
})

var dom = "";

function jsonTest(){

	var len = Object.keys(news).length;
	var cnt = 0;

	for(var i = len-1; i >= 0; i--)
	{	
		if (cnt == 4)
			break;

		makeList(i);

		cnt++;

	}

	addCode();
}

function makeList(num) {

	if (news[num].image == null) {
		dom += "<div class='col-sm-6 col-cus'>"
			+ "<div class='card'>"
			+ "<div class='card-body card-cus'>"
			+ "<h5 class='card-title card-title-cus'>"
			+ news[num].title
			+ "</h5>"
			+ "<p class='card=text'>"
			+ news[num].contents
			+ "</p>"
			+ "<p class='card-text'>"
			+ "<small class='text-muted'>"
			+ news[num].date
			+ "</small>"
			+ "</p>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
	} else {
		dom += "<div class='col-sm-6 col-cus'>"
			+ "<div class='card'>"
			+ "<div class='card-body card-cus'>"
			+ "<h5 class='card-title card-title-cus'>"
			+ news[num].title
			+ "</h5>"
			+ "<p class='card=text'>"
			+ news[num].contents
			+ "</p>"
			+ "<p class='card-text'>"
			+ "<small class='text-muted'>"
			+ news[num].date
			+ "</small>"
			+ "</p>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
	}
}

function addCode() {

	var adding = document.getElementById("headline");

	adding.innerHTML = dom;
}