const firstMessage = document.querySelector(".firstMessage");
const secondMessage = document.querySelector(".secondMessage");
const thirdMessage = document.querySelector(".thirdMessage");
const mainContainer = document.getElementById("main-nes-container");
const startButton = document.getElementById('startButton');
const aButton = document.getElementById("myAudio");

secondMessage.classList.add("hidden");
thirdMessage.classList.add("hidden");

const questions = [
    "I honestly express my opinions, even if unpopular.",
    "I pretend to like people to get what I want.",
    "It's important to follow rules.",
    "I sometimes take advantge of others.",
    "I don't care about money too much.",
    "I enjoy having things that others envy.",
    "New things scare me.",
    "I worry a lot about making mistakes.",
    "Thinking of the future makes me anxious.",
    "I ask for advice to make decisions.",
    "I don't like confrontation.",
    "I feel confident when interacting with people.",
    "I am naturally outgoing.",
    "I like talking in large groups of people."
]

const pokemonAndType = [
    {
        name: 'Pickachu',
        type: 'ENFP',
        image: 'pokemons/pikachu.png'
    },
    {
        name: 'Lucario',
        type: 'ISTP',
        image: 'pokemons/lucario.png'
    },
    {
        name: 'Abra',
        type: 'Intp',
        image: 'pokemons/abra.png'
    },
    {
        name: 'Piplup',
        type: 'ENFP',
        image: 'pokemons/piplup.png'
    },
    {
        name: 'Lechonk',
        type: 'ISFP',
        image: 'pokemons/lechonk.png'
    },
    {
        name: 'Slowking',
        type: 'INTP',
        image: 'pokemons/slowking.png'
    },
    {
        name: 'Rayquaza',
        type: 'ENTJ',
        image: 'pokemons/rayquaza.png'
    },
    {
        name: 'Charizard',
        type: 'ESTJ',
        image: 'pokemons/charizard.png'
    },
    {
        name: 'Mudkip',
        type: 'ISTP',
        image: 'pokemons/mudkip.png'
    },
    {
        name: 'Regice',
        type: 'ISTJ',
        image: 'pokemons/regice.png'
    },
]

let counter = 0;

const playAButtonSound = () => {
    aButton.play();
}

const pickPokemon = () => {
    const pickRandomPokemon = pokemonAndType[Math.floor(Math.random() * pokemonAndType.length)];
    mainContainer.innerHTML = `
    <p class="title">Congratulations! </p>
        <p>You matched <i class="nes-icon is-small heart"></i> with:</p>
        <div class="match">
            <h2>${pickRandomPokemon.name}</h2>
            <p>${pickRandomPokemon.type}</p>
            <img src="${pickRandomPokemon.image}" style="max-width: 50%; height: 50%;"/>
        </div>
    `
}

mainContainer.addEventListener('click', () => {
    if (counter <= 1) {
        playAButtonSound();
    }

    if (counter === 0) {
        firstMessage.classList.add("hidden");
        secondMessage.classList.remove("hidden");
    }
    if (counter === 1) {
        secondMessage.classList.add("hidden");
        thirdMessage.classList.remove("hidden");
    }
    counter++;
})

startButton.addEventListener('click', () => {
    playAButtonSound();
    pickPokemon();
})