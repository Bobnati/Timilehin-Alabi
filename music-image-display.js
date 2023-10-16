function runImages () {
    image1 = '<img class="renderImage" src="images-personal-website/timi-horse-3.jpg">';
image2 = '<p> <img class="renderImage" src="images-personal-website/timi-lagos-city-cyclers.jpg"> </p>';
image3 = '<p> <img class="renderImage" src="images-personal-website/bobnati-bass-blackbgd.png"> </p>';
image4 = '<img class="renderImage" src="images-personal-website/bob-and-debi.png">';
image5 = '<img class ="renderImage" src="images-personal-website/bob-and-farmer-lawrence.png">';
image6 = '<img class ="renderImage" src="images-personal-website/bobnati-convergence-02.jpg">';
image7 = '<img class ="renderImage" src="images-personal-website/horse-bob-4.jpg">';
image8 = '<img class ="renderImage" src="images-personal-website/page-thumbnail.png">';
image9 = '<img class ="renderImage" src="images-personal-website/timi-and-dominion.jpg">';
image10 = '<img class="renderImage" src="images-personal-website/timi-with-mic.jpg">';
image11 = '<img class="renderImage" src="images-personal-website/timi-swag.jpg">';

images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

function displayImages(timesToDisplayImage, recallFunction) {
    let ind = 0;

    function loopIteration() {
        document.querySelector('.renderHTML').innerHTML = images[ind];
        document.querySelector ('.slideShow').innerHTML = `Good Click!
        Now Sit back for the quick slideshow!
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