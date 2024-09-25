function showSidebar() {
    const sidebar = document.querySelector('#sidebar')
    const menubtn = document.querySelector('#menu-btn')
    sidebar.style.display = 'flex';
    menubtn.style.display = 'none';
}
function hideSidebar() {
    const sidebar = document.querySelector('#sidebar')
    const menubtn = document.querySelector('#menu-btn')
    sidebar.style.display = 'none';
    menubtn.style.display = 'block';
}