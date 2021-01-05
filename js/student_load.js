$(document).ready(function(){
load();
})

var dom = "";

function load() {
	jsonProf();
	jsonMS();
	jsonUnder();
	jsonAlumni();
}

function jsonProf(){

	var len = Object.keys(prof).length;
	
	var cnt =0;

	for (var i = 0; i < len; i++) {

		makeList(prof, i);
		cnt++;

		if (i == len-1)
			if (cnt%3==1)
				makeBlank(2);
			else if (cnt%3==2)
				makeBlank(1);
	}

	addCode("prof_data");
}

function jsonMS(){

	var len = Object.keys(msStu).length;
	
	var cnt =0;

	for (var i = 0; i < len; i++) {

		makeList(msStu, i);
		cnt++;

		if (i == len-1)
			if (cnt%3==1)
				makeBlank(2);
			else if (cnt%3==2)
				makeBlank(1);
	}

	addCode("msStu_list");
}

function jsonUnder() {

	var len = Object.keys(underStu).length;
	
	var cnt =0;

	for (var i = 0; i < len; i++) {

		makeList(underStu, i);
		cnt++;

		if (i == len-1)
			if (cnt%3==1)
				makeBlank(2);
			else if (cnt%3==2)
				makeBlank(1);
	}

	addCode("underStu_list");
}

function jsonAlumni() {

	var len = Object.keys(alumni).length;
	
	var cnt =0;

	for (var i = 0; i < len; i++) {

		makeList(alumni, i);
		cnt++;

		if (i == len-1)
			if (cnt%3==1)
				makeBlank(2);
			else if (cnt%3==2)
				makeBlank(1);
	}

	addCode("alumni_list");
}


function makeBlank(cnt) {
	for (var i = 0; i < cnt; i++)
		dom += "<div class='card none-card'></div>"
}

function makeList(str, num) {

	if (num%3 == 0)
		dom += "<div class='card-deck'>"

	dom += "<div class='card'>"
		+ "<img src='" + str[num].pic + "' class='card-img-top'>"
		+ "<div class='card-body'>"
		+ "<h5 class='card-title'>" 
		+ str[num].name
		+ "</h5>"
		+ "<p class='card-text'>"
		+ str[num].position
		+ "</p>"
		+ "<p class='card-text'>"
		+ str[num].interest
		+ "</p>"
		+ "<p class='card-text'>"
		+ str[num].mail
		+ "</p>"
		+ "</div>"
		+ "<div class='btn-cus'>"
		
	inputData(str, num)
        
    dom += "</div>"
        + "</div>"

    if (num%3 == 2)
    	dom += "</div>"
}

function inputData(str, num){

	if(str[num].homepage != null) {
		dom += "<a href='" + str[num].homepage	+ "'>"
			+ "<svg width='32' height='32' viewBox='0 0 16 16' class='bi bi-globe' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>"
            + "<path fill-rule='evenodd' d='M1.018 7.5h2.49c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM2.255 4H4.09a9.266 9.266 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.024 7.024 0 0 0 2.255 4zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.173.324-.33.682-.468 1.068H7.5V1.077zM7.5 5H4.847a12.5 12.5 0 0 0-.338 2.5H7.5V5zm1 2.5V5h2.653c.187.765.306 1.608.338 2.5H8.5zm-1 1H4.51a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm1 2.5V8.5h2.99a12.495 12.495 0 0 1-.337 2.5H8.5zm-1 1H5.145c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm-2.173 2.472a6.695 6.695 0 0 1-.597-.933A9.267 9.267 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM1.674 11H3.82a13.651 13.651 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm8.999 3.472A7.024 7.024 0 0 0 13.745 12h-1.834a9.278 9.278 0 0 1-.641 1.539 6.688 6.688 0 0 1-.597.933zM10.855 12H8.5v2.923c.67-.204 1.335-.82 1.887-1.855A7.98 7.98 0 0 0 10.855 12zm1.325-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm.312-3.5h2.49a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.91 4a9.277 9.277 0 0 0-.64-1.539 6.692 6.692 0 0 0-.597-.933A7.024 7.024 0 0 1 13.745 4h-1.834zm-1.055 0H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z'/>"
            + "</svg>"
			+ "</a>"
	}
	if(str[num].git != null) {
		dom += "<a href='" + str[num].git	+ "'>"
			+ "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' class='navbar-nav-svg' viewBox='0 0 512 499.36' role='img'>"
			+ "<path fill='currentColor' fill-rule='evenodd' d='M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z'/>"
			+ "</svg>"
			+ "</a>"
	}
	if (str[num].linkdIn != null) {
		dom += "<a href='" + str[num].linkdIn	+ "'>"
			+ "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>"
			+ "<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>"
	        + "</svg>"
	        + "</a>"
	}
	if (str[num].mail != null) {
		dom += "<a href='mailto:" + str[num].mail	+ "'>"
	        + "<svg width='32' height='32' viewBox='0 0 16 16' class='bi bi-envelope-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>"
			+ "<path fill-rule='evenodd' d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z'/>"
			+ "</svg>"
	        + "</a>"
	}

}

function addCode(str) {

	var adding = document.getElementById(str);
	
	adding.innerHTML = dom;

	dom = "";
}