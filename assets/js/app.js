const menuBar = document.getElementById('menubar')
const toggleBtn = document.getElementById('toggle-btn')
const sideBarOverlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', function(){
    // menuBar.classList.toggle('hide-menu')
    // console.log(closeBtn)

    toggleMenubarHandler()

    // if (menuClassess.contains('hide-menu')) {
    //     console.log('Has hide-menu class')
    //     menuClassess.remove('hide-menu')
    // }else{
    //     console.log('Hide-menu class does not exist')
    //     menuClassess.add('hide-menu')
    // }
})

sideBarOverlay.addEventListener('click', () => toggleMenubarHandler())

closeBtn.addEventListener('click', () => {
    toggleMenubarHandler()
})

const toggleMenubarHandler = () => {
    const menuClassess = menuBar.classList
    const sideBarOverlayClassess = sideBarOverlay.classList
    menuClassess.contains('hide-menu') ? menuClassess.remove('hide-menu') : menuClassess.add('hide-menu')
    sideBarOverlayClassess.contains('hide-menu') ? sideBarOverlayClassess.remove('hide-menu') : sideBarOverlayClassess.add('hide-menu')
}