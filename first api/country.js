let countryLocations = location.search;
console.log(countryLocations);
let countryName = countryLocations.slice(6);
console.log(countryName);
let checkbox = document.getElementById("switch");
console.log(checkbox);
let generalContainer = document.getElementById("container");
console.log(generalContainer);
//lets fetch an api baby
async function getdata() {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${countryName}`
  );
  console.log(response);

  const data = await response.json();
  console.log(data);

  data.forEach((e) => {
    let eachName = e.name;
    let regions = e.region;
    let flags = e.flag;
    let population = e.population;
    let capital = e.capital;
    let nativeName = e.nativeName;
    let subRegion = e.subregion;
    let topLevelDomain = e.topLevelDomain;
    let currencies = e.currencies;
    let languages = e.languages;
    let borders = e.borders;
    //get the value of nested values

    //insert elements
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "image");
    imageDiv.innerHTML = `
        <img id="images" src="${flags}" alt ="">
      `;
    generalContainer.appendChild(imageDiv);

    let anotherContainer = document.createElement("div");
    anotherContainer.setAttribute("id", "container2");
    anotherContainer.innerHTML = `
          <div class='sec1'>
      <h2 class="header">  ${e.name}</h2>
        <p class =" text"> <b>Native Name:</b> ${nativeName}</p>
        <p class ="text"> <b>Popuation :</b> &nbsp;${population}</p>
        <p class="text"> <b>Region :</b>&nbsp; ${regions}</p>
        <p class="text"> <b>Sub-Region :</b>&nbsp; ${subRegion}</p>
        <p class="text"> <b>Capital:</b>&nbsp; ${capital}</p>
          </div>
        <div class='sec2'>
        <p class="text"><b>Top Level Domain :</b> ${topLevelDomain}</p>
        <p class="text"> <b>Currencies :</b> ${currencies[0].name}</p>
        <p class="text"> <b>Languages :</b> ${languages[0].name}</p>
        </div>
        <div class='sec3'>
        <p class ="text"> <b>Border Countries :</b>  <a href="countries.html?name=${borders[0]}"><span>${borders[0]}</span></a></p>
        </div>
         
      `;

    generalContainer.appendChild(anotherContainer);
  });
}
getdata();

//append to card

// dark mode
checkbox.addEventListener("click", (e) => {
  if (e.target.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  //for the text
});
