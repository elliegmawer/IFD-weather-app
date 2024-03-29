//load appropriate partial html content when user clicks on nav links and triggers hashchange

function fetchFile(path, callback) {

 var request = new XMLHttpRequest();

 request.onload = function() {
  callback(request.responseText);
 };

 request.open("GET", path);
 request.send(null);
}

function getContent(fragmentId, callback) {
 fetchFile(fragmentId + ".html", callback);
}


function navigate() {

 var contentDiv = document.getElementById("content"),

  fragmentId = location.hash.substr(1);

 getContent(fragmentId, function(content) {
  contentDiv.innerHTML = content;
 });


}

if (!location.hash) {

 location.hash = "#home"; //default to home.html content
}

navigate();

window.addEventListener("hashchange", navigate); //load appropriate partial html content when user 'navigates' and triggers hashchange