function runImages () {
    image1 = '<img class="renderImage" src="images-personal-website/bass-picture.png">';
image2 = '<p> <img class="renderImage" src="images-personal-website/bass-with-guitarist.png"> </p>';
image3 = '<p> <img class="renderImage" src="images-personal-website/bobnati-bass-blackbgd.png"> </p>';
image4 = '<img class="renderImage" src="images-personal-website/bob-and-debi.png">';
image5 = '<img class ="renderImage" src="images-personal-website/bob-and-farmer-lawrence.png">';
image6 = '<img class ="renderImage" src="images-personal-website/bobnati-convergence-02.jpg">';
image7 = '<img class ="renderImage" src="images-personal-website/beach-photo.png">';
image8 = '<img class ="renderImage" src="images-personal-website/page-thumbnail.png">';

images = [image1, image2, image3, image4, image5, image6, image7, image8];

function displayImages(timesToDisplayImage, recallFunction) {
    let ind = 0;

    function loopIteration() {
        document.querySelector('.renderHTML').innerHTML = images[ind];

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

displayImages(50, 10000); // Display images 3 times with a 1000ms delay 
};