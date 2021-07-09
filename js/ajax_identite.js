let blocIdentifiant = document.querySelector('#blocIdentifiant');

fetch("https://60e88a90673e350017c218f3.mockapi.io/Portofolio/V1/identites")
    .then(function(reponse) {
        return reponse.json();
    })
    .then(function(identites) {
        for (let identite of identites) {
            let cardProfil = document.createElement('div');

            let blocImageProfilIdentite = document.createElement('div');
            blocImageProfilIdentite.classList.add(
                "container2__image",
                "col",
                "s12",
                "m6",
                "l6"
            );

            let imageProfilIdentite = document.createElement('img');
            imageProfilIdentite.setAttribute('src', `${identite.photoProfil}`);
            imageProfilIdentite.setAttribute('alt', `${identite.alt}`);

            let blocTextDescriptionIdentite = document.createElement('div');
            blocTextDescriptionIdentite.classList.add(
                "container2__content",
                "col",
                "s12",
                "m6",
                "l6"
            );

            let blocTitreDescriptionIdentite = document.createElement('h3');
            let question = document.createElement('span');
            question.textContent = "who am I";
            // let nomComplet = document.createElement('span');
            // nomComplet.textContent = `${identite.preNom}`;

            let blocDescriptionIdentite = document.createElement('p');
            blocDescriptionIdentite.textContent = `${identite.description}`;

            blocIdentifiant.appendChild(cardProfil);
            cardProfil.appendChild(blocImageProfilIdentite);
            blocImageProfilIdentite.appendChild(imageProfilIdentite);

            cardProfil.appendChild(blocTextDescriptionIdentite);
            blocTextDescriptionIdentite.appendChild(blocTitreDescriptionIdentite);
            blocTitreDescriptionIdentite.appendChild(question);
            // blocTitreDescriptionIdentite.appendChild(nomComplet);
            blocTextDescriptionIdentite.appendChild(blocDescriptionIdentite);

        }
    });