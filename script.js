function toggleMenu() {
    var sidebar = document.getElementById('sideMenu');

    if (sidebar.className === 'sidebar') {
        sidebar.className = 'sidebarActive';
    } else {
        sidebar.className = 'sidebar';
    }
}
