function fetchFile(path, callback){

  var request = new XMLHttpRequest();

  request.onload = function () {
    callback(request.responseText);
  };

  request.open("GET", path);
  request.send(null);
}

function getContent(fragmentId, callback){
  fetchFile( fragmentId + ".html", callback );
}

// // Sets the "active" class on the active navigation link.
// function setActiveLink(fragmentId){
//   var navbarDiv = document.getElementById("navbar"),
//       links = navbarDiv.children,
//       i, link, pageName;
//   for(i = 0; i < links.length; i++){
//     link = links[i];
//     pageName = link.getAttribute("href").substr(1);
//     if(pageName === fragmentId) {
//       link.setAttribute("class", "active");
//     } else {
//       link.removeAttribute("class");
//     }
//   }
// }

function navigate(){

  var contentDiv = document.getElementById("content"),

      fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });

//   // Toggle the "active" class on the link currently navigated to.
//   setActiveLink(fragmentId);
}

if(!location.hash) {

  location.hash = "#home";
}

navigate();

window.addEventListener("hashchange", navigate)