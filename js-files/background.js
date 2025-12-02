

const body = document.body;


function animateBackground(minRange = {
    red: 120,
    blue: 1,
    green: 120
},

    maxRange = {

        red: 250,
        blue: 100,
        green: 250

    }

) {


    function returnValueFromRange(minRange, maxRange) {

        const rand = Math.random();

        console.log({ minRange, rand })

        return Math.floor(rand * ((maxRange - minRange + 1)) + minRange);

    }


    const colors = {

        red: returnValueFromRange(minRange["red"], maxRange["red"]),

        blue: returnValueFromRange(minRange["blue"], maxRange["blue"]),

        green: returnValueFromRange(minRange["green"], maxRange["green"]),

    }

    const adding = {

        red: Math.random() > 0.5,

        blue: Math.random() > 0.5,

        green: Math.random() > 0.5

    }




    function incrementColours(theColor) {


        if (adding[theColor]) colors[theColor]++

        else colors[theColor]--;


        if (colors[theColor] > maxRange[theColor]) adding[theColor] = false;

        else if (colors[theColor] < minRange[theColor]) adding[theColor] = true;

        return colors[theColor];

    }

    function runAnimation() {

        for (eachColor in colors) {

            colors[eachColor] = incrementColours(eachColor)

        }

        let { red, blue, green } = colors;

        const bgdString = `linear-gradient(to bottom, rgb(${red}, ${blue}, ${green}) 10%, rgb(${Math.round(red / 1.5)}, ${Math.round(blue / 1.5)}, ${green / 1.5}) 50%, rgb(${red}, ${blue}, ${green}) 100%)`;

        body.style.background = bgdString;

        requestAnimationFrame(runAnimation);

    }

    runAnimation();
}

function toggleElements(theElement) {

    theElement += "-section";

    console.log(theElement);

    theElement = document.querySelector(`.${theElement}`);

    theElement.style.transition = `transform 0.3s ease`

    theElement.style.transform = `translateY(${Math.floor(Math.random() * 10)}px)`;

    setTimeout(() => theElement.style.transform = `translateY(0px)`, 800);

}

const pageElements = ["first", "second", "third", "fourth"];

animateBackground();

document.addEventListener('scrollend', () => {

    pageElements.forEach(element => {

        toggleElements(element);

    })
})