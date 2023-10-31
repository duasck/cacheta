function toggleMenu() {
    var sidebar = document.getElementById('sideMenu');
    var header = document.getElementById('header');
    if (sidebar.className === 'sidebar') {
        sidebar.className = 'sidebarActive';
        header.className = 'sidebar';
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.className = 'sidebar';
        header.className = '';
        document.body.style.overflow = 'auto';
    }
}

function toggleHome() {
    let sidebar = document.getElementById('sideMenu');
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {
        document.body.style.overflow = 'auto';
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    else {
        document.body.style.overflow = 'auto';
        sidebar.className = 'sidebar';
        header.className = '';
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}

function toggleComo() {
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let larguraDaTela = window.innerWidth;
    if (larguraDaTela > 1025) {
        document.body.style.overflow = 'auto';
        smoothScrollToDiv('comoJogar');
    } else {
        sidebar.className = 'sidebar';
        header.className = '';
        document.body.style.overflow = 'auto';
        smoothScrollToDiv('comoJogar-mobile');
    }
}

function toggleModos() {
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {
        document.body.style.overflow = 'auto';
        smoothScrollToDiv('modosDeJogo');
    } else {
        document.body.style.overflow = 'auto';
        sidebar.className = 'sidebar';
        header.className = '';
        smoothScrollToDiv('modosDeJogo');
    }
}

function toggleDownload() {
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {
        document.body.style.overflow = 'auto';
        smoothScrollToDiv('disponivel');
    } else {
        document.body.style.overflow = 'auto';
        sidebar.className = 'sidebar';
        header.className = '';
        smoothScrollToDiv('disponivel-mobile');
    }
}

function toggleEntrar() {
    var urlExterna = 'https://www.google.com';

    window.open(urlExterna, '_blank');
}

function togglePlayStore() {
    var urlExterna = 'https://play.google.com/store/apps/details?id=com.kk.cacheta&hl=pt_BR&gl=US';

    window.open(urlExterna, '_blank');
}

function toggleAppleStore() {
    var urlExterna = 'https://apps.apple.com/br/app/cacheta-league/id1582103209://www.google.com';

    window.open(urlExterna, '_blank');
}

function toggleContato() {
    var urlExterna = 'https://www.google.com';

    window.open(urlExterna, '_blank');
}

const scrollPaddingTop = document.querySelector("header").clientHeight;

function smoothScrollToDiv(id) {
    smoothScrollToDiv(id, scrollPaddingTop);
}

function smoothScrollToDiv(id) {
    const scrollTop = document.documentElement.scrollTop;
    const div = document.getElementById(id);
    const divTop = div.offsetTop;
    const distance = divTop - scrollTop - scrollPaddingTop;
    
    window.scrollTo({
        top: scrollTop + distance,
        behavior: "smooth",
    });
}