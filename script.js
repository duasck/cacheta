function toggleMenu() {
    var sidebar = document.getElementById('sideMenu');
    var header = document.getElementById('header');


    if (sidebar.className === 'sidebar') {
        sidebar.className = 'sidebarActive';
        header.style.display = 'none';
    } else {
        sidebar.className = 'sidebar';
        header.style.display = 'flex';
    }
}

function toggleHome() {
    let button = document.getElementById("home");
    let minhaDiv = document.getElementById("header");
    let sidebar = document.getElementById('sideMenu');
    let alturaDaDiv = minhaDiv.getBoundingClientRect().top;
    let deslocamento = alturaDaDiv - 90;
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {
        button.addEventListener("click", function () {
            deslocamento += 100;
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        });
    } else {
        sidebar.className = 'sidebar';
        minhaDiv.style.display = 'flex';
        button.addEventListener("click", function () {
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        });
    }

}

function toggleComo() {
    let button = document.getElementById("comoBtn");
    let minhaDiv = document.getElementById("comoJogar");
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let alturaDaDiv = minhaDiv.getBoundingClientRect().top;
    let deslocamento = alturaDaDiv - 90;
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {
        button.addEventListener("click", function () {
            deslocamento += 100;
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        });
    } else {
        sidebar.className = 'sidebar';
        header.style.display = 'flex';
        button.addEventListener("click", function () {
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        });
    }

}

function toggleModos() {
    let button = document.getElementById("modosBtn");
    let minhaDiv = document.getElementById("modosDeJogo");
    let sidebar = document.getElementById('sideMenu');
    let header = document.getElementById('header');
    let alturaDaDiv = minhaDiv.getBoundingClientRect().top;
    let deslocamento = alturaDaDiv - 90;
    let larguraDaTela = window.innerWidth;

    if (larguraDaTela > 1025) {
        button.addEventListener("click", function () {
            deslocamento += 90;
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        });
    } else {
        sidebar.className = 'sidebar';
        header.style.display = 'flex';
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
            let alturaDaDiv = minhaDiv.getBoundingClientRect().top;
            let deslocamento = alturaDaDiv - 90;
            sidebar.className = 'sidebar';
            header.style.display = 'flex';
            window.scrollBy({ top: deslocamento, behavior: "smooth" });
        }
    });
}
;


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