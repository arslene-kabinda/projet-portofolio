let blocProjet = document.querySelector('#blocProjet');

fetch("http://localhost:4100/api/projectsList")

.then(function(reponse) {
    return reponse.json();
})


.then(function(projets) {
    for (let projet of projets) {
        let cardProjet = document.createElement('div')
        cardProjet.classList.add(
            "container__content"
        );


        let blocImageProjet = document.createElement('div');
        blocImageProjet.classList.add(
            "col",
            "s12",
            "m6",
            "l6",
            "card__image"
        );

        let imageProjet = document.createElement('img')
        imageProjet.setAttribute('src', `${projet.imageProjet}`);
        imageProjet.setAttribute('alt', `${projet.alt}`);

        let blocTextDescriptionProjet = document.createElement('div');
        blocTextDescriptionProjet.classList.add(
            "col",
            "s12",
            "m6",
            "l6",
            "card__content"
        )
        let blocDescriptionProjet = document.createElement('p');
        blocDescriptionProjet.textContent = `${projet.description}`;

        blocProjet.appendChild(cardProjet);
        cardProjet.appendChild(blocImageProjet);
        blocImageProjet.appendChild(imageProjet);



        cardProjet.appendChild(blocTextDescriptionProjet);
        blocTextDescriptionProjet.appendChild(blocDescriptionProjet);





    }

    /**
     * 
     * Le sliding content: 
     * 
     */


    let slideContent = document.querySelectorAll('.container__content');

    let arrowForward = document.querySelector('.arrow__forward');

    let arrowBack = document.querySelector('.arrow__back');

    let compter = 0

    /**
     * first show content:
     * 
     */

    // slideContent[0].style.display = "none"
    hideLayers()
    slideContent[compter].style.display = "flex"



    function hideLayers() {
        for (let i = 0; i < slideContent.length; i++) {
            slideContent[i].style.display = "none"
        }
    }


    function nextSlide() {
        hideLayers()
        compter++
        if (compter == slideContent.length) {
            compter = 0
        }
        slideContent[compter].style.display = "flex"
    }

    function prevslide() {
        hideLayers()
        compter--
        if (compter == -1) {
            compter = slideContent.length - 1

        }

        slideContent[compter].style.display = "flex"

    }
    arrowForward.addEventListener('click', nextSlide)
    arrowBack.addEventListener('click', prevslide)

})