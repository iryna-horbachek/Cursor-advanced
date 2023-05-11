const title = document.createElement('h1');
title.innerText = 'Star Wars';
title.classList.add('title');
const mainDiv = document.querySelector('.container');
mainDiv.prepend(title);
const allCards = document.querySelector('.blockCards');

function getInfoName( { name, birth_year, gender }) {
    const card = document.createElement('div');
    card.classList.add('card');
    const nameCharacter = document.createElement('h2');
    nameCharacter.classList.add('name');
    const birthYear = document.createElement('p');
    birthYear.classList.add('birth');
    const sexCharacter = document.createElement('p');
    sexCharacter.classList.add('gender'); 
   
    for(let i=0; i < name.length; i++) {
        nameCharacter.textContent = name;  
        console.log(name) 
    } 
    card.append(nameCharacter)

    for(let i=0; i < birth_year.length; i++) {
        birthYear.textContent = `Birth_year: ${birth_year}`;
    }
    card.append(birthYear)
    
    for(let i=0; i < gender.length; i++) {
        sexCharacter.textContent = gender;
        
        if(gender === 'male') {
            sexCharacter.innerHTML = '<img src = "icons/icons8-male-40.png"/>'
        } else if(gender === 'female') {
            sexCharacter.innerHTML = '<img src = "icons/icons8-female-40.png"/>';
        } else {
            sexCharacter.innerHTML = '<img src = "icons/icons8-male-and-female-30.png"/>';
        }
    }
    card.append(sexCharacter)

    return allCards.append(card);
}

function addImage(){
    const cards = document.querySelectorAll(".card")
    const image = document.createElement('img');
    image.classList.add('img');
    for(j = 0; j < cards.length; j++) {
        image.setAttribute('src', 'images/' + (j+1) + '.webp');
        cards[j].append(image);
    }    
}

function getPlanetsInfo ( {name, population, terrain} ) {
    const planetCard = document.createElement('div');
    planetCard.classList.add('planet');
    const planetName = document.createElement('p');
    planetName.classList.add('planet-name');
    const planetPopolation = document.createElement('p');
    planetPopolation.classList.add('planet-population');
    const planetTerrain = document.createElement('p');
    planetTerrain.classList.add('planet-terrain');

    for(let i=0; i < name.length; i++) {
        planetName.textContent = name;  
    } 
    planetCard.append(planetName);

    for(let i=0; i < population.length; i++) {
        planetPopolation.textContent = `Population: ${population}`;  
    } 
    planetCard.append(planetPopolation);

    for(let i=0; i < terrain.length; i++) {
        planetTerrain.textContent = `Terrain: ${terrain}`;  
    } 
    planetCard.append(planetTerrain);

    return allCards.append(planetCard);
}

function addPlanetImage(){
    const cards = document.querySelectorAll(".planet")
    const image = document.createElement('img');
    image.classList.add('img');
    for(j = 0; j < cards.length; j++) {
        image.setAttribute('src', 'images/planets/' + (j+1) + '.jpeg');
        cards[j].append(image);
    }    
}

function getCharacters() {
        fetch("https://swapi.dev/api/people/")
        .then((res) => {
            return res.json();
        }).then((res) => {
         res.results.forEach(res => {
            getInfoName(res)
            addImage();
           });
        });
}

function getPlanets() {
    fetch("https://swapi.dev/api/planets/")
    .then((res) => {
        return res.json();
    }).then((res) => {
     res.results.forEach(res => {
        getPlanetsInfo(res);
        addPlanetImage();
       });
    });
}

const btnUsers = document.getElementById('btn1');

btnUsers.addEventListener('click', () => {
    allCards.innerHTML = ' ';
    getCharacters();
})

const btnPlanets = document.getElementById('btn2');
btnPlanets.addEventListener('click', () => {
    allCards.innerHTML = ' ';
    getPlanets();
})



