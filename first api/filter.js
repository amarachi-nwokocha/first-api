electElement = document.querySelector('#regions');
selectElement.addEventListener('change',async (e)=>{
  let output  = selectElement.value;
  console.log(output);
  //api
  const response = await fetch(`https://restcountries.eu/rest/v2/region/${output}`);
  console.log(response);
  const filteredData = await response.json();
  console.log(filteredData);

 
}) 

