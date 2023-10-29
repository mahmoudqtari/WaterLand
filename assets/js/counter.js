let visetorCount = document.getElementById('visitor-count');
let ridesCount = document.querySelector('.rides-count');
let experianceCount = document.querySelector('.experiance-count');
let certifiedCount = document.querySelector('.certified-count');

let counterVisitor = 0;
let counterRides = 0;
let counterExp = 0;
let counterCertified = 0;

let start_precentage_count = document.querySelector('.our-team');

let level92 = document.querySelector('.team .container .row div .level-color-100 .level-color-92');
let level88 = document.querySelectorAll('.team .container .row div .level-color-100 .level-color-88');
let level86 = document.querySelector('.team .container .row div .level-color-100 .level-color-86');

let percentage92 = document.querySelector('.percentage92');
let percentage88 = document.querySelector('.percentage88');
let percentage88_2 = document.querySelector('.percentage88_2');
let percentage86 = document.querySelector('.percentage86');

let percentage92Count = 0;
let percentage88Count = 0;
let percentage88Count_2 = 0;
let percentage86Count = 0;


window.addEventListener('scroll', function () {
    if (window.scrollY >= start_precentage_count.offsetTop) {
        level92.style.cssText = "width: 92%;height: 10px;background-color: red;animation: level 4s;";
        level88[0].style.cssText = "width: 88%;height: 10px;background-color: red;animation: level 4s;";
        level88[1].style.cssText = "width: 88%;height: 10px;background-color: red;animation: level 4s;";
        level86.style.cssText = "width: 86%;height: 10px;background-color: red;animation: level 4s;";
        startCountPrecentage();
    }
})

function startCountPrecentage() {
    setInterval(() => {
        if (percentage92Count <= 92) {
            percentage92.innerHTML = percentage92Count + "%";
            percentage92Count++;
        } else {
            clearInterval();
        }

        if (percentage88Count <= 88) {
            percentage88.innerHTML = percentage88Count + "%";
            percentage88Count++;
        } else {
            clearInterval();
        }

        if (percentage88Count_2 <= 88) {
            percentage88_2.innerHTML = percentage88Count_2 + "%";
            percentage88Count_2++;
        } else {
            clearInterval();
        }

        if (percentage86Count <= 86) {
            percentage86.innerHTML = percentage86Count + "%";
            percentage86Count++;
        } else {
            clearInterval();
        }

    }, 150);
}

let targetVisitor = 8450;
let targetRides = 30;
let targetExp = 15;
let targetCertified = 40;

const updateCounter = (counter, target, element) => {
   
    const increment = target / 1000; 
    
    const interval = setInterval(() => {
        if (counter < target) {
            counter += increment;
            element.innerHTML = Math.round(counter);
        } else {
            clearInterval(interval); 
        }
    }, 10); 
};

updateCounter(counterVisitor, targetVisitor, visetorCount);
updateCounter(counterRides, targetRides, ridesCount);
updateCounter(counterExp, targetExp, experianceCount);
updateCounter(counterCertified, targetCertified, certifiedCount);