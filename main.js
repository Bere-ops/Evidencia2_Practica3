const Inputperso = document.getElementById("Nombre");
const BotonBuscar = document.getElementById("BotonBuscar");
const Altura = document.getElementById("Altura");
const Peso = document.getElementById("Peso");
const Color_cabello = document.getElementById("Color_cabello");
const Color_ojos = document.getElementById("Color_ojos");
const Color_piel = document.getElementById("Color_piel");
const Anio_nacimiento = document.getElementById("Anio_nacimiento");
const Genero = document.getElementById("Genero");
const mundo_natal = document.getElementById("mundo_natal");
const peliculas = document.getElementById("peliculas");  
const especie = document.getElementById("especie");     
const vehiculo = document.getElementById("vehiculo");     
const nave_espacial = document.getElementById("nave_espacial");

async function buscarpersonaje() {
  const respuesta = await fetch("https://swapi.dev/api/people/?search=" + Inputperso.value);
  const datos = await respuesta.json();
  const personaje = datos.results[0];

  Altura.innerText = personaje.height + " cm";
  Peso.innerText = personaje.mass + " kg";
  Color_cabello.innerText = personaje.hair_color;
  Color_ojos.innerText = personaje.eye_color;
  Color_piel.innerText = personaje.skin_color;
  Anio_nacimiento.innerText = personaje.birth_year;
  Genero.innerText = personaje.gender;


  const resPlaneta = await fetch(personaje.homeworld);
  const infoPlaneta = await resPlaneta.json();
  mundo_natal.innerText = infoPlaneta.name;


  peliculas.innerHTML = ""; 
  personaje.films.forEach(async function (filmUrl) {
    const r = await fetch(filmUrl);
    const f = await r.json();
    const li = document.createElement("li");
    li.innerText = f.title;
    peliculas.appendChild(li);
  });


  especie.innerHTML = "";
  personaje.species.forEach(async function (specieUrl) {
    const r = await fetch(specieUrl);
    const s = await r.json();
    const li = document.createElement("li");
    li.innerText = s.name;
    especie.appendChild(li);
  });


  vehiculo.innerHTML = "";
  personaje.vehicles.forEach(async function (vehicleUrl) {
    const r = await fetch(vehicleUrl);
    const v = await r.json();
    const li = document.createElement("li");
    li.innerText = v.name;
    vehiculo.appendChild(li);
  });


  nave_espacial.innerHTML = "";
  personaje.starships.forEach(async function (shipUrl) {
    const r = await fetch(shipUrl);
    const n = await r.json();
    const li = document.createElement("li");
    li.innerText = n.name;
    nave_espacial.appendChild(li);
  });
}

BotonBuscar.addEventListener("click", function () {
  buscarpersonaje();
});