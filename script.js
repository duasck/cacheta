function toggleMenu() {
    var sidebar = document.getElementById('sideMenu');
    var header = document.getElementById('header');


    if (sidebar.className === 'sidebar') {
        sidebar.className = 'sidebarActive';
        header.className = 'sidebar';
        document.bodystyle.overflow = 'hidden';
    } else {
        sidebar.className = 'sidebar';
        header.className = '';
        document.body.style.overflow = 'auto';
    }
}

function toggleHome() {
    let scrollTopButton = document.getElementById("home");
    let minhaDiv = document.getElementById("header");
    let sidebar = document.getElementById('sideMenu');
    let deslocamento = minhaDiv.getBoundingClientRect().top;
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {

    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
        sidebar.className = 'sidebar';
        minhaDiv.className = '';
        button.addEventListener("click", function () {
            window.scrollBy({ top, behavior: "smooth" });
        });
    }



}

function toggleComo() {
    let button = document.getElementById("comoBtn");
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let larguraDaTela = window.innerWidth;

    button.addEventListener("click", function () {

        if (larguraDaTela > 1025) {
            let minhaDiv = document.getElementById("comoJogar");
            minhaDiv.scrollIntoView({ behavior: "smooth" });
        } else {
            let minhaDiv = document.getElementById("comoJogar-mobile");
            let deslocamento = minhaDiv.getBoundingClientRect().top;
            sidebar.className = 'sidebar';
            header.className = '';
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        }
    });

}

function toggleModos() {
    let button = document.getElementById("modosBtn");
    let minhaDiv = document.getElementById("modosDeJogo");
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let deslocamento = minhaDiv.getBoundingClientRect().top;
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {
        button.addEventListener("click", function () {
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        });
    } else {
        sidebar.className = 'sidebar';
        header.className = '';
        button.addEventListener("click", function () {
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        });
    }
}

function toggleDownload() {
    let button = document.getElementById("downloadBtn");
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let larguraDaTela = window.innerWidth;

    button.addEventListener("click", function () {

        if (larguraDaTela > 1025) {
            let minhaDiv = document.getElementById("disponivel");
            minhaDiv.scrollIntoView({ behavior: "smooth" });
        } else {
            let minhaDiv = document.getElementById("disponivel-mobile");
            let deslocamento = minhaDiv.getBoundingClientRect().top;
            sidebar.className = 'sidebar';
            header.className = '';
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        }
    });
}

function toggleEntrar() {
    var urlExterna = 'https://www.google.com';

    window.open(urlExterna, '_blank');
}

function togglePlayStore() {
    var urlExterna = 'https://www.google.com';

    window.open(urlExterna, '_blank');
}

function toggleAppleStore() {
    var urlExterna = 'https://www.google.com';

    window.open(urlExterna, '_blank');
}

function toggleContato() {
    var urlExterna = 'https://www.google.com';

    window.open(urlExterna, '_blank');
}