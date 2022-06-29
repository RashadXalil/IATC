var html = "";
let region = "";
var countries = "";
let countryName = "";
let cards = document.getElementsByClassName("country__card");
let mainURL = new URL(`https://restcountries.com/v3.1${(countryName!="" ? `name/${countryName}` : "")}${(region!=""? `/region/${region}` : '/all')}`)
function GetCountries() {
  fetch(mainURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        generateCountryCard(data[i]);
      }
    });
}
GetCountries();
function generateCountryCard(country) {
  countries = `
  <div class="col-lg-3 col-md-6 col-sm-12">
  <a href="detail.html">
  <div class="country__card">
    <div class="country__card__image">
      <img src="${country.flags.png}" alt="" />
    </div>
    <div class="country__card__about">
      <div class="country__card__about__title">
        <h3 class="country__card__about__title__item">${country.name.common}</h3>
      </div>
      <div class="country__card__about__population">
        <p class="country__card__about__population__item">
          Population: <span>${country.population}</span>
        </p>
      </div>
      <div class="country__card__about__region">
        <p class="country__card__about__region__item">
          Region : <span>${country.region}</span>
        </p>
      </div>
      <div class="country__card__about__capital">
          <p class="country__card__about__capital__item">
              Capital : <span>${country.capital}</span>
          </p>
        </div>
    </div>
  </div>
  </a>
  </div>
  `;
  html+=countries;
  generateCountryList(html)
}
function generateCountryList(html) {
  let cbody = document.getElementById("countriesbody");
  cbody.innerHTML = html;
}
let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("lightMode")
let body = document.querySelector("body")
// Mode Change
darkMode.addEventListener("click",function(){
    lightMode.classList.add("active")
    lightMode.style.color="white"
    darkMode.classList.remove("active")
    dropdownMenuButton.style.color="white"
    dropdownMenuButton.style.backgroundColor = "#2b3844"
    searchinput.style.backgroundColor = "#2B3844"
    body.style.backgroundColor="#202C36"
    maintitle.style.color = "white"
    document.documentElement.dataset.theme = 'dark';
})
lightMode.addEventListener("click",function(){
    lightMode.classList.remove("active")
    lightMode.style.color="black"
    dropdownMenuButton.style.color="black"
    dropdownMenuButton.style.backgroundColor = "white"
    darkMode.classList.add("active")
    body.style.backgroundColor="white"
    searchinput.style.backgroundColor = "white"
    maintitle.style.color = "black"
    document.documentElement.dataset.theme = 'light';
    
})
function getCountriesByRegion(){
  let dropdownMenuButton = document.getElementById("dropdownMenuButton")
  dropdownMenuButton.addEventListener("change",function(){
    region = this.value;
    document.getElementById("countriesbody").innerHTML = "";
    html = "";
    GetCountries();
  })
}
getCountriesByRegion();

function searchCountries(){
  let input  = document.getElementById("searchinput");
  input.addEventListener("keyup",function(){
    countryName = this.value;
    document.getElementById("countriesbody").innerHTML = "";
    html = "";
    GetCountries();
  })
}
searchCountries();