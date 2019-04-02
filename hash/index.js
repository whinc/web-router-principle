
window.addEventListener('DOMContentLoaded', onLoad)
window.addEventListener('hashchange', onHashChange)

var routeEl = null
function onLoad () {
  routeEl = document.querySelector('#route')
  onHashChange()
}

function onHashChange () {
  console.log('hashchange:', location.href)
  if (!routeEl) return

  if (location.hash.indexOf('#/home') !== -1) {
    routeEl.innerHTML = 'home'
  } else if (location.hash.indexOf('#/about') !== -1) {
    routeEl.innerHTML = 'about'
  } else {

  }
}