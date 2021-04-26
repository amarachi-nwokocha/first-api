let countryLocations = location.search;
console.log(countryLocations);
let countryName = countryLocations.slice(6)
console.log(countryName);
let checkbox = document.getElementById('switch');
console.log( checkbox);
let generalContainer = document.getElementById('container')
console.log(generalContainer);
//lets fetch an api baby
async function getdata() {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
    console.log(response);

    const data = await response.json()
    console.log(data);
    
    data.forEach(e => {
        let eachName = e.name;
      let regions =e.region
      let flags = e.flag;
      let population = e.population
      let capital = e.capital 
      let nativeName = e.nativeName
      let subRegion = e.subregion 
      let topLevelDomain = e.topLevelDomain
      let currencies =e.currencies
      let languages = e.languages
      //get the value of nested values 

      //insert elements
      let imageDiv = document.createElement('div')
     imageDiv.setAttribute('id', 'image');
     imageDiv.innerHTML =
      `
        <img id="images" src="${flags}" alt ="">
      `
      generalContainer.appendChild(imageDiv)

      let anotherContainer = document.createElement('div');
      anotherContainer.setAttribute('id','container2');
      anotherContainer.innerHTML = 
      `
      <h2 class="header">  ${e.name}</h2>
        <p class =" text"> Native Name: ${nativeName}</p>
        <p class ="text"> Popuation :${population}</p>
        <p class="text"> Region : ${regions}</p>
        <p class="text"> Sub-Region : ${subRegion}</p>
        <p class="text"> Capital : ${capital}</p>
        <p class="text">Top Level Domain : ${topLevelDomain}</p>
        <p class="text"> Currencies : ${currencies[0].name}</p>
        <p class="text"> Languages : ${languages[0].name}</p>
      `
       
      generalContainer.appendChild(anotherContainer)
    });
}
getdata()

//append to card


// dark mode
checkbox.addEventListener('click', (e) =>{
    if (e.target.checked) {
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
    //for the text
  
  
  })