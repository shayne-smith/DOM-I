const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// ========================= Update image src info ====================================

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// update the img src for the CTA image
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"]

// update the img src for the middle image
let midImg = document.querySelector("#middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// ========================= Update all nav links in the header =======================

// create an array of nav anchor links
const nav = document.querySelectorAll('nav a');

// update the text for each navigation link
for (let i = 0; i < nav.length; i++) {
  const contents = Object.values(siteContent.nav);
  nav[i].textContent = contents[i]; 
}


// ========================== Update all CTA text and buttons =========================

// update the cta h1 text
const cta = document.querySelector('.cta-text h1');
cta.textContent = siteContent['cta']['h1'];

// update the cta button text
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];


// =========================== Update all main-text content ===========================

// create an array of div elements with .text-content class
const mainText = document.querySelectorAll('.text-content');

const contents = Object.values(siteContent['main-content']); // create an array to store all the values in the main-content object
contents.splice(4, 1); // remove the value for img src

// update h4 and p elements in main-section text
for (let i = 0; i < mainText.length; i++) { // iterate over array of 5 text-content containers
  
  const mainSection = mainText[i].children; // store HTMLCollection of children elements of each mainSection

  mainSection[0].textContent = contents[2 * i]; // update h4 text
  mainSection[1].textContent = contents[2 * i + 1]; // update p text
}


// ========================== Update contact section =================================

// create an array to store the children of all elements with .contact class
const contactText = document.querySelector('.contact').children;

// create an array to store all contact values in contact object as HTMLCollection
const contactValues = Object.values(siteContent['contact']);

// iterate over all children elements of .contact class and update each h4 and p value
for (let i = 0; i < contactText.length; i++) {
  contactText[i].textContent = contactValues[i];
}


// =========================== Update footer section ==================================

// create an variable to store the footer p element
const footerText = document.querySelector('.container footer p');

// update footer with correct textContent
footerText.textContent = siteContent["footer"]['copyright'];


// =========================== ADD NEW CONTENT =========================================

// create new anchor elements to add to existing navigation
var link1 = document.createElement('a');
link1.innerHTML = "Sign In";

var link2 = document.createElement('a');
link2.innerHTML = "Volunteer";

// create variable to store nav node
const navigation = document.querySelector('nav');

navigation.appendChild(link1); // add link1 to end of nav
navigation.prepend(link2); // add link2 to beginning of nav

// create an array to store all anchor links in navigation
const navColors = document.querySelectorAll('nav a');

// update the color of each anchor link in navigation to green
for (let i = 0; i < navColors.length; i++) {
  navColors[i].style.color = 'green';
}



