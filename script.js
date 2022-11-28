const dogImageDiv = document.getElementById('DogImage');
const dogButton = document.getElementById('dogBtn');

const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
            dogImageDiv.innerHTML = `<img src='${json.message}' height=100% width=100% style = "border-radius : 5% ;
            border : 3px solid black"/>`
        })
}

dogButton.onclick = () => getNewDog();
