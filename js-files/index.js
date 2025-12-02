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
        this.element.style.background = `linear-gradient(to right, rgb(${red}, ${green}, ${blue}) 10%, rgb(${Math.floor(red / 1.5)}, ${Math.floor(green / 1.5)}, ${Math.floor(blue / 1.5)}) 50%, rgb(${red}, ${green}, ${blue}) 100%)`;

        if (this.className !== "body") {
            this.element.style.color = "transparent";

            this.element.style.webkitBackgroundClip = "text";
            this.element.style.backgroundClip = "text";

        }
    }
}

const homeElements = [

    new pageElement({

        red: 10,
        blue: 10,
        green: 10
    },
        {
            red: 80,
            blue: 80,
            green: 80

        },
        "body"),


    new pageElement({

        red: 0,
        blue: 50,
        green: 50
    },
        {
            red: 50,
            blue: 90,
            green: 90

        },
        "brief-description")
];


function runAnimations() {

    homeElements.forEach(element => {

        element.updateColorValues();
        element.setElementColor();
    })

    requestAnimationFrame(runAnimations);
}

runAnimations();

document.body.addEventListener("touchmove", (event) => {


    if (event.target.classList.contains("rotatable")) {

        console.log("rotate");

        event.target.style.transform = "rotate(5deg)";

        setTimeout(() => {

            event.target.style.transition = "transform 0.5s ease-in-out";

            event.target.style.transform = "rotate(0deg)", 3000
        });

    }

});
