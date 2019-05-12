// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件
window.addEventListener('DOMContentLoaded', onLoad)
// 监听路由变化
window.addEventListener('hashchange', onHashChange)

// 路由视图
var routerView = null

function onLoad () {
  routerView = document.querySelector('.vanilla.hash .container')
  onHashChange()
}

// 路由变化时，根据路由渲染对应 UI
function onHashChange () {
  switch (location.hash) {
    case '#/home':
      routerView.innerHTML = '<h2>Home</h2>'
      return
    case '#/about':
      routerView.innerHTML = '<h2>About</h2>'
      return
    default:
      return
  }
}