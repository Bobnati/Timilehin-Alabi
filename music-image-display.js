function runImages () {
 const   image1 = '<img class="renderImage" src="images-personal-website/piano-AMCorner.jpg">';
const image2 = '<p> <img class="renderImage" src="images-personal-website/timi-lagos-city-cyclers.jpg"> </p>';
const image3 = '<p> <img class="renderImage" src="images-personal-website/bobnati-bass-blackbgd.png"> </p>';
const image4 = '<img class="renderImage" src="images-personal-website/bob-and-debi.png">';
const image5 = '<img class ="renderImage" src="images-personal-website/bob-and-farmer-lawrence.png">';
const image6 = '<img class ="renderImage" src="images-personal-website/horse-bob-4.jpg">';
const image7 = '<img class ="renderImage" src="images-personal-website/piano-AMC.jpg">';
const image8 = '<img class ="renderImage" src="images-personal-website/page-thumbnail.png">';
const image9 = '<img class ="renderImage" src="images-personal-website/timi-and-dominion.jpg">';
const image10 = '<img class="renderImage" src="images-personal-website/timi-with-mic.jpg">';
const image11 = '<img class="renderImage" src="images-personal-website/timi-swag.jpg">';
const image12 = '<img class="renderImage" src="images-personal-website/trad-mesh.jpg">';
const image13 = '<img class="renderImage" src="images-personal-website/face-mesh.jpg">';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

function displayImages(timesToDisplayImage, recallFunction) {
    let ind = 0;

    function loopIteration() {
        document.querySelector('.renderHTML').innerHTML = images[ind];
        document.querySelector ('.slideShow').innerHTML = `Good Click!
        Now scroll up a little and sit back for the quick slideshow!
         You are viewing photo number ${ind} out of ${images.length} photos`

        ind++;

        if (ind >= images.length) {
            ind = 0;
            console.log(ind);
        }

        if (ind < timesToDisplayImage) {
            setTimeout(loopIteration, recallFunction);
            console.log(ind);
        }
    }

    loopIteration();
}

displayImages(50, 8000); // Display images 50 times with an 8 seconds delay 
};