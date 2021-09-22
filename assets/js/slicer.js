//document.getElementById("accueil").style.display = "none";
//document.getElementById("main").style.display = "flex";
//let x=centre.dataset.x;
//document.getElementById("droite").style.backgroundImage="url('./assets/img/"+goto+"-"+yRight+".jpg')";
//centre.dataset.x=goto;

function pushTheButton () {
    const theButton=document.querySelector('#theButton');
    let data=Number(theButton.dataset.x);
    if (data===0) document.getElementById("s1").style.display = "flex";
    data++;
    getData(data);
    theButton.dataset.x=data;
    document.getElementById("img").style.backgroundImage="url('./assets/img/"+data+".jpg')";
}

function getData(data) {
    if (data===1) {
        document.getElementById("titre").textContent="Pour commencer : Tynker";
        document.getElementById("texteInfoTitre").textContent="Apprentissage des concepts";
        document.getElementById("texteInfoP1").textContent="Tinker est avant tout destiné aux jeunes enfants.";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===2) {
        document.getElementById("texteInfoP2").textContent="Le but est de réaliser des taches simples en les programmant.";
    }
    if (data===3) {
        document.getElementById("texteInfoP3").textContent="Pour cela, ils vont utiliser des évènements.";
    }
    if (data===4) {
        document.getElementById("texteInfoP4").textContent="Et bien sur, ils vont devoir les empiler dans le bon ordre.";
    }
    if (data===5) {
        document.getElementById("texteInfoP5").textContent="Cette méthode simple permet au jeunes enfants d'appréhender des concepts que l'on retrouve dans la programmation orienté objet.";
    }
    if (data===6) {
        document.getElementById("titre").textContent="Pour poursuivre : Scratch";
        document.getElementById("texteInfoTitre").textContent="Utilisation des concepts";
        document.getElementById("texteInfoP1").textContent="Scratch permet d'aller plus loin une fois la compréhension des concepts acquis.";
        document.getElementById("texteInfoP2").textContent="Il est plus orienté comme un Framework de création que comme un jeu, il n'y a pas de level up à gagner.";
        document.getElementById("texteInfoP3").textContent="Mais voyons plutôt leurs présentations en vidéo :";
        document.getElementById("texteInfoP4").innerHTML="<a href='https://scratch.mit.edu/projects/editor/?tutorial=getStarted' target='_blank'>Vidéo Scratch</a>";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===7) {
        document.getElementById("titre").textContent="Allons un peu plus en avant : Code combat";
        document.getElementById("texteInfoTitre").textContent="Début de programmation";
        document.getElementById("texteInfoP1").textContent="Les deux sites précédents s'adressaient particulièrement à de très jeunes enfants. Voyons maintenant une solution qui s'adresse plus à des ados ou des adultes qui sont resté de grands enfants.";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===8) {
        document.getElementById("texteInfoP2").textContent="La présentation ressemble beaucoup à un jeu avec des mondes à completer afin d'atteindre le suivant. On remarque ici que certains mondes sont ciblés sur le web (html, javascript, ...)";
    }
    if (data===9) {
        document.getElementById("texteInfoP3").textContent="Chaque monde est un ensemble de stage à réussir afin d'atteindre le suivant.";
    }
    if (data===10) {
        document.getElementById("texteInfoP4").textContent="Par exemple, l'objectif dans ce stage est d'aller chercher le diamand qui se trouve tout en bas à droite.";
    }
    if (data===11) {
        document.getElementById("texteInfoP5").textContent="Et cette fois, on tape du code ! Les méthodes disponibles sont affichée pour aider, mais on tape vraiment du code.";
    }
    if (data===12) {
        document.getElementById("titre").textContent="Serious games : Codepip";
        document.getElementById("texteInfoTitre").textContent="Apprentisage ciblé";
        document.getElementById("texteInfoP1").textContent="Bon, là ça devient sérieux. Codepip propose des petits parcours de jeu ciblant un apprentisage ciblé.";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===13) {
        document.getElementById("texteInfoP2").textContent="Dont le fameux 'Flexbox Grenouille' que vous connaissez tous :)";
    }
    if (data===14) {
        document.getElementById("texteInfoP3").textContent="ou le 'Grid Garden' que vous connaissez aussi :)";
    }
    if (data===15) {
        document.getElementById("texteInfoP4").textContent="Seul désavantage, ce site n'est pas gratuit. La majorité des jeux demandant un abonnement pro. ";
    }
    if (data===16) {
        document.getElementById("titre").textContent="Code Wars : relevé le défi";
        document.getElementById("texteInfoTitre").textContent="Là, c'est du costaud";
        document.getElementById("texteInfoP1").textContent="Alors là, ce n'est clairement plus pour les enfants.";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===17) {
        document.getElementById("texteInfoP2").textContent="La présentation est d'ailleurs beaucoup moins ludique.";
    }
    if (data===18) {
        document.getElementById("texteInfoP3").textContent="Pour ceux qui ne connaitrais pas, Code Wars vous propose des 'Kata' (autrement dit, des énigmes à résoudre en codant). Chaque Kata à un niveau de difficulté différent (allant de 8kyu à 1 kyu).";
    }
    if (data===19) {
        document.getElementById("texteInfoP4").textContent="Voici un exemple de Kata de niveau 6 kyu. On est cette fois sur du code pur et dur. Les Kata sont disponibles dans de nombreux languages différents (Javascript, Python, Ruby, ect.... la liste est longues)";
    }
    if (data===20) {
        document.getElementById("titre").textContent="Codin Game : Une alternative à Code Wars";
        document.getElementById("texteInfoTitre").textContent="The same, but different, but the same";
        document.getElementById("texteInfoP1").textContent="Graphiquement, on est quand même sur quelque chose de beaucoup plus sexy.";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===21) {
        document.getElementById("texteInfoP2").textContent="Comme pour Code Wars, il existe un large choix de language disponible.";
    }
    if (data===22) {
        document.getElementById("texteInfoP3").textContent="On se retrouve aussi ici sur du code pur et dur.";
    }
    if (data===23) {
        document.getElementById("texteInfoP4").textContent="Il existe aussi des niveaux de difficultés différents pourtant sur des domaines précis de la programmation.";
    }
    if (data===24) {
        document.getElementById("texteInfoP5").textContent="Codin game est beaucoup plus ludique par contre. Les codes écrits débloques souvent des animations de jeux répondant à ce que l'on vient de coder. On y retrouve aussi des escapes games, ou encore des compétitions entre codeurs : 'Clash of code'.";
    }
    if (data===25) {
        document.getElementById("texteInfoP6").textContent="Le concept des 'Clash of code' est assez simple. Tous les concurrents recoivent le même objectif à atteindre et ont 15 minutes pour le réussir. A la fin du combat, chaque codeur peut décider de partager son code afin que chacun puissent voir comment les autres y sont arrivé.";
    }
    if (data===26) {
        document.getElementById("titre").textContent="And now : Let's play";
        document.getElementById("texteInfoTitre").textContent="Rendez-vous sur Discord pour terminer cette présentation";
        document.getElementById("texteInfoP1").textContent="Un lien va être partager dans quelques secondes sur Discord : Cliquez vite dessus !";
        document.getElementById("texteInfoP2").textContent="Vous avez 5 minutes pour rejoindre le 'Clash of code' de cette présentation.";
        document.getElementById("texteInfoP3").textContent="Pour l'inscription, ne vous inquiéter pas, vous pouvez la faire en reliant votre compte Github, cela prend 15 secondes ;)";
        document.getElementById("texteInfoP4").textContent="Le duel est choisi aléatoirement, la difficulté aussi. J'espère que le hasard fera bien les choses et qu'on ne tombera pas sur un duel trop facile ou trop difficile. Vérifié bien quand le clash se lance que le language choisi est bien Javascript.";
        document.getElementById("texteInfoP5").textContent=" ";
        document.getElementById("texteInfoP6").textContent="Bonne chance à tous !";
    }
}