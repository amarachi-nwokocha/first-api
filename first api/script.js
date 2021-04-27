// fetch the api
let lists = document.getElementById("list");
let img = document.getElementsByTagName("img");
let checkbox = document.getElementById("switch");
//console.log( checkbox);
let root = document.querySelector(":root");
//console.log(typeof root);
let body = document.getElementById("white");
//console.log(body);
let links = document.getElementsByTagName("a");
let eachCard = document.getElementById("card");
let allResponse = [];
//get regions
let region = document.querySelectorAll("#region");
//console.log('region');
let output;
let inputField = document.getElementById("input");
console.log(inputField);
//let body = document.getElementByTagName('body')
//let card = document.getElementByClassName('card');
//console.log(card);
async function getData() {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  console.log(response); //object
  allResponse = await response.json();

  console.log(allResponse);
  renderToDom(allResponse);
  searchField(allResponse);
  return allResponse;
}
getData();
console.log(allResponse);
function renderToDom(array) {
  if (array instanceof Array) {
    array.forEach((e) => {
      let eachName = e.name;
      let regions = e.region;
      let flags = e.flag;
      let population = e.population;
      let capital = e.capital;
      //add to document
      let li = document.createElement("li");
      li.setAttribute("id", "listItem");
      li.innerHTML = `
    <div id="card">
    <a href="countries.html?name=${eachName}">
    <img src="${flags}" alt="">
    <div class = "cardBody">
    <h3>${eachName}</h3> 
    <p id="data"><b>Population:</b> &nbsp;${population}</p>
      <p id="data" class="region"><b>Region:</b> &nbsp; ${regions}</p>
    <p id="data"><b>Capital:</b> &nbsp; ${capital}</p>
      
        </div>
        </a>
      </div>`;

      lists.appendChild(li);
    });
  }
}
renderToDom(allResponse);
console.log(allResponse);

//search
function searchField(array) {
  inputField.addEventListener("keyup", (e) => {
    let searchTarget = e.target.value.toLowerCase();
    const filteredItems = array.filter((item) => {
      lists.innerHTML = "";
      return item.name.toLowerCase().includes(searchTarget); //||
      // item.region.toLowerCase().includes(searchTarget)
    });
    //console.log(filteredItems);
    renderToDom(filteredItems);
  });
}
searchField(allResponse);
// filter
selectElement = document.querySelector("#regions");
selectElement.addEventListener("change", async (e) => {
  output = selectElement.value;

  if (output == "All") {
    getData();
  } else {
    const secondResponse = await fetch(
      `https://restcountries.eu/rest/v2/region/${output}`
    );
    //console.log(secondResponse);
    const filteredData = await secondResponse.json();
    console.log(filteredData);
    lists.innerHTML = "";
    renderToDom(filteredData);
  }
});
//search box

checkbox.addEventListener("click", (e) => {
  if (e.target.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  //for the text
});

//fetch  for filter

//api
/* const secondResponse = await fetch(`https://restcountries.eu/rest/v2/region/${output}`);
  //console.log(secondResponse);
  const filteredData = await secondResponse.json();
 console.log(filteredData);
*/

/*
    


    
})*/
