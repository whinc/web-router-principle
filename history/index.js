
window.addEventListener('DOMContentLoaded', onLoad)
window.addEventListener('popstate', onPopState)

var routeEl = null
function onLoad () {
  routeEl = document.querySelector('#route')
  onPopState()
}

function onPopState () {
  console.log('popstate:', location.pathname)
  if (!routeEl) return

  if (location.pathname.indexOf('/home') !== -1) {
    routeEl.innerHTML = 'home'
  } else if (location.pathname.indexOf('/about') !== -1) {
    routeEl.innerHTML = 'about'
  } else {

  }
}