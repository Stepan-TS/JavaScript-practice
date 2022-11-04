let timer;
let deleteFirstPhotoDelay;



async function getBreeds() {
    try{
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        createBreedList(data.message);
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}

getBreeds();

function createBreedList(breedList) {
    document.getElementById('breed').innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>
            Select a breed
        </option>
        ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
}

async function loadByBreed(breed) {
    if (breed != "Select a breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        createSlideShow(data.message)
    }
}

function createSlideShow(images) {
    let currentPosition = 0
    clearInterval(timer)
    clearInterval(deleteFirstPhotoDelay)
   
    if (images.length > 1) {
        document.getElementById("slideshow").innerHTML =`
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
        `
    if (images.length == 2) currentPosition = 0
        currentPosition += 2
        timer = setInterval(nextSlide, 3000)

    } else {
        document.getElementById("slideshow").innerHTML =`
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide"</div>
        `
    }

    function nextSlide() {
    document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`)
    deleteFirstPhotoDelay = setTimeout(function () {
        document.querySelector(".slide").remove()
    }, 1000)  
    if(currentPosition + 1 >= images.length) {
        currentPosition = 0
    } else {
        currentPosition ++
    }
}
}