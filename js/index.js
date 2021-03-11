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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

 let snippet = document.getElementById("cta-img")
snippet.setAttribute('src', siteContent["cta"]["img-src"]);

 let accent = document.getElementById("middle-img")
 accent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// let parentElement1 = document.querySelector("nav");
// parentElement1.appendChild(home)




const navArr = document.body.querySelectorAll('a');

navArr[0].textContent = 'Services';
navArr[1].textContent = 'Product';
navArr[2].textContent = 'Vision';
navArr[3].textContent = 'Features';
navArr[4].textContent = 'About';
navArr[5].textContent = 'Contact';

  let headline = document.getElementByTag('h1')
  headline.setAttribute = ('src', siteContent["cta"][h1])

  nav.forEach((colorG) => (colorG.style.color = "green"));

//button
  const button = document.querySelector("button");
  button.textContent = "Get Started"

  //title
  const title = document.querySelector("h1");
  title.textContent = siteContent["cta"]["h1"];

  //PP
  const contentPar = document.querySelectorAll('.main-content p');
  contentPar[0].textContent = siteContent['main-content']['features-content']
  contentPar[1].textContent = siteContent['main-content']['about-content']
  contentPar[2].textContent = siteContent['main-content']['main-content']
  contentPar[3].textContent = siteContent['main-content']['product-content']

 
// const contact = document.querySelectorAll('.contact h4')
// const details = document.querySelectorAll('.contact p')

// contact[0].textContent = siteContent['contact']['contact-h4']
// contact[1].textContent = siteContent['contact']['address']
// contact[2].textContent = siteContent['contact']['phone']
// contact[3].textContent = siteContent['contact']['email']

// let button = document.querySelector("button");
//  button.textContent = siteContent["cta"]["button"];

 const footer = document.querySelectorAll('footer p');
 footer[0].textContent = siteContent['footer']['copyright']


      
// let contact = document.querySelector('section.contact');
// contact.querySelector('h4').textContent = siteContent['contact']['contact-h4']


 


