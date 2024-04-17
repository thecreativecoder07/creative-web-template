 // Get the current page URL
 var currentPage = window.location.pathname;

 // Select all navigation links
 var navLinks = document.querySelectorAll('.navlink');
 
 // Loop through each navigation link
 navLinks.forEach(function(link) {
     // Check if the link's href matches the current page URL
     if (link.getAttribute('href') === currentPage) {
         // Add the 'active' class to the matching link
         link.classList.add('nav-active');
     }
 });
 


// home text typing effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// ripple effect button
// const ANIMATEDCLASSNAME = "animated";
// const ELEMENTS = document.querySelectorAll(".HOVER");
// const ELEMENTS_SPAN = [];

// ELEMENTS.forEach((element, index) => {
// 	let addAnimation = false;
	// Elements that contain the "FLASH" class, add a listener to remove
	// animation-class when the animation ends
	// if (element.classList[1] == "FLASH") {
	// 	element.addEventListener("animationend", e => {
	// 		element.classList.remove(ANIMATEDCLASSNAME);
	// 	});
	// 	addAnimation = true;
	// }

	// If The span element for this element does not exist in the array, add it.
	// if (!ELEMENTS_SPAN[index])
	// 	ELEMENTS_SPAN[index] = element.querySelector("span");

	// element.addEventListener("mouseover", e => {
	// 	ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
	// 	ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
// 		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
// 	});

// 	element.addEventListener("mouseout", e => {
// 		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
// 		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
// 	});
// });

// rotating text
/*
https://youtu.be/zwl3kZPZ8H8
*/
const textrotateElements = document.querySelectorAll(".text-rotate");

textrotateElements.forEach(textrotate => {
    textrotate.innerHTML = textrotate.innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");
});


// on scroll animation
