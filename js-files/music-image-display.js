

let timeout = null;


    //save images from computer to the program
const image1 = '<img class="renderImage" src="images-personal-website/piano-AMCorner.jpg">';
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
const description2 = 'Chilling with fellow cyclists at Lagos City Cycling Club!';
const description3 = 'Oh those soothing bass notes';
const description4 = 'Took this picture with Deborah Omowunmi at a Hangout in Ekiti State Nigeria!';
const description5 = 'One of the most impactful people I know. Here, I am with Farmer Lawrence, CEO PostAgVest';
const description6 = 'Among my best birthdays ever. Took myself on a trip to the beach and didnt look back.';
const description7 = 'Another angle of my piano presentation at the American Corner Ikeja';
const description8 = 'Took this photo at my former Church where I was a pianist in 2023';
const description9 = 'Took this one there as well. One of my favourite people there is this talented boy, Dominion';
const description10 = 'I was being asked to speak at Spur Nation also in Ekiti.';
const description11 = 'Another one of my older birthday photos';
const description12 = 'A picture with my guys at an Art event called Artmesh in Ikeja, Lagos';
const description13 = 'Love this picture. Also at artmesh';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

const descriptions = [description1, description2, description3, description4, description5, description6, description7, description8,
                        description9, description10, description11, description12, description13];



 let i = 0;

function runImages (timesToDisplayImage) {


    let currentImage = images[i];
    
    let currentDesc = descriptions[i];

    if(showLoader) {

        clearInterval(showLoader);
    }

    if (i < timesToDisplayImage) {

      const  renderHTML = document.querySelector(".renderHTML");
        
        renderHTML.innerHTML = currentImage;

      const  imageDescDiv = document.querySelector(".image-description");

        imageDescDiv.textContent = "";

      const  ptag = document.createElement("p");

        ptag.classList.add("theImageDesc");

        ptag.textContent = currentDesc;

       const btag = document.createElement("button");

        btag.classList.add("stopSlideShow");
    
       const statusTag = document.createElement("p");
        
        statusTag.classList.add("status");

        statusTag.textContent = `Viewing photo ${i} out of ${images.length}`;

        btag.textContent = "Stop SlideShow";

        imageDescDiv.appendChild(ptag);

        imageDescDiv.appendChild(statusTag);

        imageDescDiv.appendChild(btag);




    }

    else {

        clearTimeout(timeout);
    }

    i++;

    if(i >= images.length) {

        i = 0;
    }


};


    document.body.addEventListener('click', (event) => {

    if(event.target.classList.contains("imageDisplayBtn")) {

        const loaders = ["Processing.", "Processing..", "Loading image assets..", 
            
                        "Mounting image assets..", "Loading Slide Show..", "Loading Slide Show...",
                        
                        "Finalising..."];

        let j = 0;

        function showLoading () {

            event.target.textContent = loaders[j];

            j++;

            if (j >= loaders.length) {

                j = 0;
            }

       }

        showLoader = setInterval(showLoading, 700);

      timeout = setInterval(() => {
        runImages(50);
      }, 5000);

    }

    else if (event.target.classList.contains("stopSlideShow")) {

        
        console.log("stop");

         clearTimeout(timeout);

        const  renderHTML = document.querySelector(".renderHTML");

          renderHTML.innerHTML = `<div class="imageOne">
            <img class="twoImages" src="images-personal-website/main-guitimi.png">
            </div>
            <div class="imageTwo">
            <img class="twoImages" src="images-personal-website/piano-photos.png">
            </div>`;

        const  imageDescDiv = document.querySelector(".image-description");

        imageDescDiv.innerHTML = `
                            <div>
                            
                                <p class="image-description"> 
                                    
                                    <p>First of all, I am a lover of all forms of art. </p>

                                <span class="image-description"> ...And I play music. </span> 

                                <p class="second-text-add"> Specifically, I play the piano and the guitar, as you can see.</p>

                                </p>
                            </div>

                        <div class="slideshow-button">  
                            
                            <p> <a href="#slideshow"><button class="imageDisplayBtn">  Click to see some more images of me</button></a>
                            </p>

                            <p class="slideShow pageText">

                            </p>

                        </div>
        `

        

    }

    });
