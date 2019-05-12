
let selectedFramework = ''
let selectedMode = ''

onFrameworkChange(value => {
  selectedFramework = value
  onChange()
})

onModeChange(value => {
  selectedMode = value
  onChange()
})

function onChange () {
  if (!selectedFramework || !selectedMode) return

  console.log('selectedFramework:', selectedFramework, ', selectedMode:', selectedMode)

  resetVisible()
  const el = document.querySelector(`.${selectedFramework.toLocaleLowerCase()}.${selectedMode.toLocaleLowerCase()}`)
  el.classList.add('visible')
}

function resetVisible () {
  const previewList = document.querySelectorAll('.preview')
  for (let i = 0; i < previewList.length; ++i) {
    previewList[i].classList.remove('visible')
  }
}

function onFrameworkChange (onChange) {
  const radioBtns = document.querySelectorAll('input[name=framework]')

  for (let i = 0; i < radioBtns.length; ++i) {
    radioBtns[i].addEventListener('change', e => onChange(e.target.value))
  }

  onChange([...radioBtns].find(item => item.checked).value)
}

function onModeChange(onChange) {
  const radioBtns = document.querySelectorAll('input[name=mode]')

  for (let i = 0; i < radioBtns.length; ++i) {
    radioBtns[i].addEventListener('change', e => onChange(e.target.value))
  }

  onChange([...radioBtns].find(item => item.checked).value)
}