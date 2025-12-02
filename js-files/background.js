

class pageElement {

    constructor(minRange, maxRange, theClassName) {

        this.className = theClassName;

        this.element = document.querySelector(`.${this.className}`);

        this.minRange = minRange;

        this.maxRange = maxRange;

        function returnValueFromRange(minRange, maxRange) {

            const rand = Math.random();

            console.log({ minRange, rand })

            return Math.floor(rand * ((maxRange - minRange + 1)) + minRange);

        }

        this.color = {};

        this.color.red = returnValueFromRange(this.minRange.red, this.maxRange.red);

        this.color.blue = returnValueFromRange(this.minRange.blue, this.maxRange.blue);

        this.color.green = returnValueFromRange(this.minRange.green, this.maxRange.green);

        this.adding = {

            red: Math.random() > 0.5,

            blue: Math.random() > 0.5,

            green: Math.random() > 0.5

        }

    }

    updateColorValues() {

        for (const eachColor in this.color) {

            if (this.adding[eachColor]) this.color[eachColor]++;

            else this.color[eachColor]--;

            if (this.color[eachColor] > this.maxRange[eachColor]) this.adding[eachColor] = false;

            else if (this.color[eachColor] < this.minRange[eachColor]) this.adding[eachColor] = true;

        }
    }

    setElementColor() {



        const { red, green, blue } = this.color;

        this.element.style.color = "transparent";
        this.element.style.background = `linear-gradient(to right, rgb(${red}, ${green}, ${blue}) 10%, rgb(${Math.floor(red / 1.5)}, ${Math.floor(green / 1.5)}, ${Math.floor(blue / 1.5)}) 50%, rgb(${red}, ${green}, ${blue}) 100%)`;

        this.element.style.webkitBackgroundClip = "text";
        this.element.style.backgroundClip = "text";
    }
}

const body = document.body;

const elements = [

    new pageElement({

        red: 100,
        blue: 50,
        green: 100
    },
        {
            red: 230,
            blue: 140,
            green: 230

        },
        "pageText"),

    new pageElement({

        red: 100,
        blue: 50,
        green: 100
    },
        {
            red: 230,
            blue: 140,
            green: 230

        },
        "first-text-add"),

    new pageElement({

        red: 100,
        blue: 50,
        green: 100
    },
        {
            red: 230,
            blue: 140,
            green: 230

        },
        "second-image-descriptions"),

    new pageElement({

        red: 100,
        blue: 50,
        green: 100
    },
        {
            red: 230,
            blue: 140,
            green: 230

        },
        "third-image-text"),

    new pageElement({

        red: 100,
        blue: 50,
        green: 100
    },
        {
            red: 230,
            blue: 140,
            green: 230

        },
        "fourth-image-text")
]


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

        elements.forEach(element => {

            element.updateColorValues();

            element.setElementColor();
        })

        requestAnimationFrame(runAnimation);

    }

    runAnimation();
}

function toggleElements(theElement) {

    theElement += "-section";

    theElement = document.querySelector(`.${theElement}`);

    theElement.style.transition = `transform 0.3s ease`

    if (Math.random() < 0.5) theElement.style.transform = `rotate(${Math.floor(Math.random() * 10)}deg)`;

    else { theElement.style.transform = `rotate(${-Math.floor(Math.random() * 10)}deg)`; }

    setTimeout(() => theElement.style.transform = `translateY(0px)`, 800);

}

const pageElements = ["first", "second", "third", "fourth"];

animateBackground();

document.addEventListener('scrollend', () => {

    pageElements.forEach(element => {

        toggleElements(element);

    })
})