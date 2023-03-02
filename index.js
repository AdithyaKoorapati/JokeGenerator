const btn = document.getElementById("btn")
const joke = document.getElementById("joke")

const apiURL='https://api.api-ninjas.com/v1/jokes?limit='

const options={
    method: 'GET',
    headers: { 'X-Api-Key': 'zZ+TzfnVVRfeIqEc6wPuZg==MZsCLVgaWmAFmKcH'},
}

async function getJoke(){

    const response= await fetch(apiURL,options);
    const data =await response.json();
    joke.innerText = data[0].joke;
    

}


btn.addEventListener("click",getJoke);