const poke_container = document.getElementById("poke-container");
const pokemon_count = 905;
const colors = {
fire: "#EF5350",
grass: "#387b54",
electric: "#f2ab46",
water: "#99eeff",
ground: "#7e5e52",
rock: "#9e9e7c",
fairy: "#dd99aa",
poison: "#867ba9",
bug: "#f8d5a3",
dragon: "#97b3e6",
psychic: "#e781a6",
flying: "#93b4d7",
fighting: "#c26157",
normal: "#a2c2d0",
ghost: "#43182f",
ice: "#00eeff",
steel: "#67786e",
dark: "#4f4554",
};


const main_types = Object.keys(colors);
const fetchPokemons = async () => {
for (let i = 1; i <=pokemon_count; i++) { await getPokemon(i); } }; const getPokemon=async (id)=> {
const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
const res = await fetch(url);
const data = await res.json();
createPokemonCard(data);
};
const createPokemonCard = (pokemon) => {
const pokemonEl = document.createElement("div");
pokemonEl.classList.add("pokemon");
const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
const id = pokemon.id.toString().padStart(3, "0");
const poke_types = pokemon.types.map((type) => type.type.name);
const type = main_types.find((type) => poke_types.indexOf(type) > -1);
const type2 = poke_types.find((type) => poke_types.indexOf(type) > -0);
const types = pokemon.types.map((type) => type.type.name).join(", ");
const color = colors[type];
const weight = pokemon.weight;
const height = pokemon.height;
const stats = pokemon.stats.map((stat) => stat.base_stat).join(", ");
const abilities = pokemon.abilities
.map((ability) => ability.ability.name)
.join(", ");
const moves = pokemon.moves.map((move) => move.move.name).join(", ");
const species = pokemon.species.name;
const sprites = pokemon.sprites.front_default;
const attack = pokemon.stats[1].base_stat;
const defense = pokemon.stats[2].base_stat;
const hp = pokemon.stats[0].base_stat;
const speed = pokemon.stats[5].base_stat;
const specialAttack = pokemon.stats[3].base_stat;
const specialDefense = pokemon.stats[4].base_stat;
const total = attack + defense + hp + speed + specialAttack + specialDefense;
pokemonEl.style.backgroundColor = color;
const pokemonInnerHTML = `
<div class="img-container"><a href="#" data-bs-toggle="modal" data-bs-target="#a${id}"> <h3 class="name text-light">${name} <img class=" infoicon" src="./assets/img/info-circle.png" alt="Bootstrap"
width="20" height="20"></h3><a/>
<h5 class="text-light type">Type: ${types}</h5> <span class="dex-pill badge rounded-pill bg-dark">${id}</span>
<img loading="lazy" class="pokemon-image" src="https://raw.githubusercontent.com/OgPaine/Ogpaine.com/main/pokemon%20compressed/${id}.png" alt="${name}"></div>
<div class="modal" id="a${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="container">
<div class="row">
<div class="col-12">
<div class="card ele-${type} rounded-3">
<div class="card-body cb-bg">
<h5 class="card-title text-light">${name} #${id}</h5>
<p class="card-text types font-weight-bold text-light">${types}</p>
<div class="${type}-bg"></div>
<img loading="lazy" class="pokemon-image-large" src="https://raw.githubusercontent.com/OgPaine/Ogpaine.com/main/pokemonhq300/${id} .png" alt="">
<div class="stats mt-3 overflow-hidden">
<table class="table text-light table-borderless">
<thead>
<tr>
<h3 class="text-light pt-2 ms-3">Base Stats</h3>
</tr>
</thead>
<tbody>
<tr>
<th scope="row" class="text-start">HP</th>
<td>
<div class="d-flex align-items-center">
<span class="fw-bold">${hp}</span> <div class="col">
<div class="progress ms-2 me-1" style="height:10px">
<div class="progress-bar ele-${type}" role="progressbar" style="width:calc(${hp}px)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255"></div>
</div>
</div>
</td>
</tr>
<tr>
<th scope="row" class="text-start">Attack</th>
<td>
<div class="d-flex align-items-center">
<span class="fw-bold">${attack}</span> <div class="col">
<div class="progress ms-2 me-1" style="height:10px">
<div class="progress-bar ele-${type}" role="progressbar" style="width:calc(${attack}px)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255"></div>
</div>
</div>
</td>
</tr>
<tr>
<th scope="row" class="text-start">Defense</th>
<td>
<div class="d-flex align-items-center">
<span class="fw-bold">${defense}</span> <div class="col">
<div class="progress ms-2 me-1" style="height:10px">
<div class="progress-bar ele-${type}" role="progressbar" style="width:calc(${defense}px)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255"></div>
</div>
</div>
</td>
</tr>
<tr>
<th scope="row" class="text-start">Sp. Attack</th>
<td>
<div class="d-flex align-items-center">
<span class="fw-bold">${specialAttack}</span> <div class="col">
<div class="progress ms-2 me-1" style="height:10px">
<div class="progress-bar ele-${type}" role="progressbar" style="width:calc(${specialAttack}px)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255"></div>
</div>
</div>
</td>
</tr>
<tr>
<th scope="row" class="text-start">Sp. Defense</th>
<td>
<div class="d-flex align-items-center">
<span class="fw-bold">${specialDefense}</span> <div class="col">
<div class="progress ms-2 me-1" style="height:10px">
<div class="progress-bar ele-${type}" role="progressbar" style="width:calc(65px)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255"></div>
</div>
</div>
</td>
</tr>
<tr>
<th scope="row" class="text-start">Speed</th>
<td>
<div class="d-flex align-items-center">
<span class="fw-bold">${speed}</span> <div class="col">
<div class="progress ms-2 me-1" style="height:10px">
<div class="progress-bar ele-${type}" role="progressbar" style="width:calc(${speed}px)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255"></div>
</div>
</div>
</td>
</tr>
<tr>
<th scope="row" class="text-start">Total</th>
<td>
<div class="d-flex align-items-center">
<span class="fw-bold">${total}</span>
</div>
</div>
</td>
</tr>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
`;
pokemonEl.innerHTML = pokemonInnerHTML;
poke_container.appendChild(pokemonEl);
};
fetchPokemons();