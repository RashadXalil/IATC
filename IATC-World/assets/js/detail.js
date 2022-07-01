let cards = document.getElementsByClassName("country__card");
let darkMode = document.getElementById("darkMode");
let lightMode = document.getElementById("lightMode");
let body = document.querySelector("body");
let about = document.getElementById("country-about");
let back = document.getElementById("go-back");
let border = document.getElementById("border_countries");
let html = "";
// Mode Change
darkMode.addEventListener("click", function () {
  lightMode.classList.add("active");
  lightMode.style.color = "white";
  darkMode.classList.remove("active");
  body.style.backgroundColor = "#202C36";
  maintitle.style.color = "white";
  about.style.color = "white";
  back.style.color = "white";
  border.style.color = "white";
});
lightMode.addEventListener("click", function () {
  lightMode.classList.remove("active");
  lightMode.style.color = "black";
  darkMode.classList.add("active");
  body.style.backgroundColor = "white";
  border.style.color = "black";
  maintitle.style.color = "black";
  about.style.color = "black";
  back.style.color = "black";
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const countryName = urlParams.get("countryName");
console.log(countryName);
function getCountry() {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      createDetailHTML(data[0]);
    });
}
getCountry();

function createDetailHTML(country) {
  console.log(country);
  const { languages, currencies, borders } = country;
  let singleBorder = "";
  for (let i = 0; i < borders.length; i++) {
    singleBorder += `<a href="#">${borders[i]}</a>`;
  }
  console.log(languages, currencies, borders);
  html += `<div class="container">
  <div class="row">
      <div class="col-lg-6 col-md-12 sol-sm-12">
          <div class="country-flag">
              <img src="${country.flags.svg}" alt="">
          </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="country-about" id="country-about">
              <div class="country-name">
                  <h2>${country.name.common}</h2>
              </div>
             <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <ul class="country-left-info">
                      <li>Native Name : <span>${country.name.common}</span></li>
                      <li>Population : <span>${country.population}</span></li>
                      <li>Region : <span>${country.region}</span></li>
                  </ul>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <ul class="country-right-info">
                      <li>Top level Domain : <span>${country.tld[0]}</span></li>
                      <li>Sub Region : <span>${country.subregion}</span></li>
                      <li>Capital : <span>${country.capital}</span></li>

                  </ul>
              </div>
             </div>
             <div class="border-countries" id="border_countries">
              <span>Border Countires : </span>
              ${singleBorder}
             </div>
          </div>
      </div>
  </div>
</div>`;
  let cbody = document.getElementById("single-country");
  cbody.innerHTML += html;
  console.log(cbody);
  console.log(html);
}
