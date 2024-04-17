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


const description1 = 'Here I am showcasing my Piano Skills at the American Corner, Ikeja';
const description2 = 'Chilling with my fellow cyclists at Lagos City Cycling Club!';
const description3 = 'Oh those soothing bass notes';
const description4 = 'Took this picture with Deborah Omowunmi at a Hangout in Ekiti State Nigeria!';
const description5 = 'One of the most impactful people I know. Here, I am with Farmer Lawrence, CEO PostAgVest';
const description6 = 'Among my best birthdays ever. Took myself on a trip to the beach and didnt look back.';
const description7 = 'Another angle of my piano presentation at the American Corner Ikeja';
const description8 = 'Took this photo at Amazing Grace Church in 2023';
const description9 = 'Took this one there as well. One of my favoutite people there is this talented boy, Dominion';
const description10 = 'I was being asked to speak at Spur Nation also in Ekiti.';
const description11 = 'Another one of my older birthday photos';
const description12 = 'A picture with my guys at an Art event called Artmesh in Ikeja, Lagos';
const description13 = 'Love this picture. Also at artmesh';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

const descriptions = [description1, description2, description3, description4, description5, description6, description7, description8,
     description9, description10, description11, description12, description13];

function displayImages(timesToDisplayImage, recallFunction) {
    let ind = 0;

    function loopIteration() {
        document.querySelector('.renderHTML').innerHTML = images[ind];
        document.querySelector ('.slideShow').innerHTML = `
         You are viewing photo number ${ind} out of ${images.length} photos`

        document.querySelector('.image-description').innerHTML = descriptions[ind];

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