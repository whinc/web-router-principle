window.addEventListener("DOMContentLoaded", onLoad);
window.addEventListener("hashchange", onHashChange);

var routeView = null;
function onLoad() {
  routeView = document.querySelector("#route");
  onHashChange();
}

function onHashChange() {
  console.log("hashchange:", routeView, location.href, location.hash);
  if (location.hash === "#/home") {
    routeView.innerHTML = "home";
  } else if (location.hash === "#/about") {
    routeView.innerHTML = "about";
  } else {
  }
}
