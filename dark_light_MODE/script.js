const fullDark = document.querySelector('#full-dark')
const containerDark = document.querySelector('#container-dark')
const containerII = document.querySelector('.containerII')

const isFullDark =JSON.parse(localStorage.getItem('fullDark'))
const isContainerDark =JSON.parse(localStorage.getItem('containerDark'))

if(isFullDark){
    fullDark.checked = true
}
if(isContainerDark){
    containerDark.checked = true
}
   changeFullDarkMode()
    changeContainedDarkMode()

function changeContainedDarkMode() {
    // if (containerDark.checked) {
    //     containerII.classList.add('dark')
    //     localStorage.setItem('containerDark', true)
    // } else {
    //     containerII.classList.remove('dark')
    //     localStorage.setItem('containerDark', false)
    // }
    changeTheme(containerDark,containerII,'containerDark')
}
function changeFullDarkMode() {
    // if (fullDark.checked) {
    //     document.body.classList.add('dark')
    //     localStorage.setItem('fullDark', true)
    // } else {
    //     document.body.classList.remove('dark')
    //     localStorage.setItem('fullDark', false)
    // }
    // containerDark.checked = fullDark.checked
    changeTheme(fullDark,document.body,'fullDark')
}

function changeTheme(checkBox, element, localstorage) {
    if (checkBox.checked) {
        element.classList.add('dark')
        localStorage.setItem(localstorage, true)
    } else {
        element.classList.remove('dark')
        localStorage.setItem(localstorage, false)
    }
}

fullDark.addEventListener('change', () => {
    changeFullDarkMode()
    changeContainedDarkMode()
})
containerDark.addEventListener('change', changeContainedDarkMode)
