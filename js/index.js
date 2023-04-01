const API = "https://rickandmortyapi.com/api";

const cardsAPI = document.getElementById("cardsAPI");
const carrusel = document.getElementById("carrusel");

const callAPI = () => {
    fetch(API +"/character/[1,2,3,4,5]")
        .then(res => res.json())
        .then(data => data.forEach(character => {
            cardsAPI.innerHTML +=
        `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img class="imgCard" src="${character.image}" alt="${character.name}">
                        <h4>${character.name}</h4>
                    </div>
                    <div class="flip-card-back">
                        <img class="imgCard" src="${character.image}" alt="${character.name}">
                        <p>${character.species}</p>
                        <p>${character.status}</p>
                        <p>${character.gender}</p>
                    </div>
                </div>
            </div>
        `
        }))
        .catch(error => console.log(new Error(error)))
}
callAPI()

const callSlider = () => {
    fetch(API +"/character/[1,2,3,4,5,6,7,8,9,10,11,12]")
        .then(res => res.json())
        .then(data => data.forEach(character => {
            carrusel.innerHTML +=
        `
        
            <div class="swiper-slide">
                <img src="${character.image}" alt="${character.name}/>
            </div>
            <div class="swiper-pagination">
                <h4 class="characterName">${character.name}</h4>
            </div>
        `
        }))
        .catch(error => console.log(new Error(error)))
}

callSlider()
