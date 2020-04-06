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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// update the img src for the CTA image
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"]

// update the img src for the middle image
let midImg = document.querySelector("#middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// create an array of nav anchor links
const nav = document.querySelectorAll('nav a');

// update the text for each navigation link
for (let i = 0; i < nav.length; i++) {
  const contents = Object.values(siteContent.nav);
  nav[i].textContent = contents[i]; 
}

// update the cta h1 text
const cta = document.querySelector('.cta-text h1');
cta.textContent = siteContent['cta']['h1'];

// update the cta button text
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

// create an array of div elements with .text-content class
const mainText = document.querySelectorAll('.text-content');

const contents = Object.values(siteContent['main-content']); // create an array to store all the values in the main-content object
contents.splice(4, 1); // remove the value for img src


for (let i = 0; i < mainText.length; i++) { // iterate over array of 5 text-content containers
  
  const mainSection = mainText[i].children; // store HTMLCollection of children elements of each mainSection

  mainSection[0].textContent = contents[2 * i]; // update h4 text
  mainSection[1].textContent = contents[2 * i + 1]; // update p text
}

const contactText = document.querySelector('.contact').children;

const contactValues = Object.values(siteContent['contact']); // create an array to store all contact values in contact object as HTMLCollection

for (let i = 0; i < contactText.length; i++) {
  contactText[i].textContent = contactValues[i];
}

const footerText = document.querySelector('.container footer p');
console.log(footerText);

footerText.textContent = siteContent["footer"]['copyright'];

