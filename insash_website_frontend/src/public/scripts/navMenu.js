function toggleNavigationMenu(action = undefined) {
    {/*  
        action : undefined -> ferme/ouvre automatiquement le menu en fonction de sa position
        action : close -> forcer la femreture du menu
        action : open -> forcer l'ouverture du menu

    */}
    menu = document.getElementById("nav-links");
    if (action == undefined) {
        menu.classList.toggle('closed')
        menu.classList.toggle('opened')

    } else if (action == "open") {
        menu.classList.remove('closed');
        menu.classList.add('opened');
    } else if (action == 'close') {
        menu.classList.remove('opened');
        menu.classList.add('closed');
    }
    // dans tous les cas, quand on ouvre/ferme le menu, on ferme aussi les sous-menus
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('opened');
    });
    // Ajout : marquer que le menu principal a déjà été ouvert (pour l'animation mobile)
    if (menu.classList.contains('opened')) {
        menu.classList.add('has-opened');
    }

}

// gérer les menus déroulants
function toggleDropdownMenu(menu) {
    menu.parentElement.classList.toggle('opened');
    menu.parentElement.classList.toggle('closed');
}

// addevent listener : si la largeur de la fenetre change, fermer les sous-menus
window.addEventListener('resize', function() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.classList.contains('opened')) {
            menu.classList.remove('opened');
        }
    });
});





// Je voulais faire en sorte que le menu se génère tout seul 
// en fonction des variables saisies par le composant pour faciliter 
// la maintenance du site. 
// Je n'ai pas réussi à faire en sorte de copier le contenu généré
// dans la page html, je laise ce code ici pour plus tard, si on
// trouve une solution
{/*

// fonction pour générer les liens de vaigation à partir de la varibale passée par le composant
function generateNavLinks(links) {
    
    navLinks = document.createElement("div");
    navLinks.classList.add('closed');
    navLinks.id = "nav-links";
    console.log(links)
    links.forEach(link => {;
        // si l'élément est un lien 
        if (link.type == "link") {
            navLinks.appendChild(generateLink(link));
        }
        // si l'élément est un sous-menu
        if (link.type == "dropdown") {
            navLinks.appendChild(generateDropdownMenu(link));
        }
    });
    console.log(navLinks);
    document.body.appendChild(navLinks);
    return navLinks;
    
}



// générer un simple lien
function generateLink(link) {
    a = document.createElement("a");
    a.href = link.url;
    a.innerText = link.name;
    return a;
}


// générer une liste deroulante pour le header
function generateDropdownMenu(menu) {
    HTML_menu = document.createElement("div");
    HTML_menu.classList.add("dropdown-menu");
    HTML_menu.innerHTML = `<a href="${menu.url}" class="dropdown-link">${menu.name}</a>`;
    HTML_menu.innerHTML += `<div class="dropdown-links">`;

    menu.links.forEach(link => {
        HTML_menu.appendChild(generateLink(link));
    });
    HTML_menu.innerHTML += `</div>`;
    HTML_menu.innerHTML += `</div>`;
    return HTML_menu;

}



*/}

// Ajoute la classe .has-hovered au premier hover sur chaque menu déroulant (PC)
document.querySelectorAll('#nav-links > .dropdown-menu').forEach(menu => {
  menu.addEventListener('mouseenter', function handler() {
    menu.classList.add('has-hovered');
    menu.removeEventListener('mouseenter', handler);
  });
});