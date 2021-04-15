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
//images



//navbar
const navArr = document.querySelectorAll('a');

navArr[0].textContent = siteContent["nav"]["nav-item-1"]
navArr[1].textContent = siteContent["nav"]["nav-item-2"]
navArr[2].textContent = siteContent["nav"]["nav-item-3"]
navArr[3].textContent = siteContent["nav"]["nav-item-4"]
navArr[4].textContent = siteContent["nav"]["nav-item-5"]
navArr[5].textContent = siteContent["nav"]["nav-item-6"]


//logo 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//CTA text h1
   const title = document.querySelector("h1");
   title.textContent = siteContent["cta"]["h1"];

   //cta text button
   const button = document.querySelector("button");
   button.textContent = siteContent["cta"]["button"]


//CTA img
let snippet = document.getElementById("cta-img")
snippet.setAttribute('src', siteContent["cta"]["img-src"]);

//middle image
let accent = document.getElementById("middle-img")
 accent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

 //middle info paragraphs
  //Paragraphs
  const contentPar = document.querySelectorAll('.main-content p');
  contentPar[0].textContent = siteContent['main-content']['features-content']
  contentPar[1].textContent = siteContent['main-content']['about-content']
  contentPar[2].textContent = siteContent['main-content']['services-content']
  contentPar[3].textContent = siteContent['main-content']['product-content']
  contentPar[4].textContent = siteContent['main-content']['main-content']


 const mainHeader = document.querySelectorAll(".text-content h4")
 const bottomContent= document.querySelectorAll(".bottom-content .text-content h4")
 
 const mainP = document.querySelectorAll(".text-content p")

 mainHeader[0].textContent = siteContent["main-content"]["features-h4"]
 mainP[0].textContent = siteContent["main-content"]["features-content"]

 mainHeader[1].textContent = siteContent["main-content"]["about-h4"]
 mainP[1].textContent = siteContent["main-content"]["about-content"]

 mainHeader[2].textContent = siteContent["main-content"]["services-h4"]
 mainP[2].textContent = siteContent["main-content"]["services-content"]

 mainHeader[3].textContent = siteContent["main-content"]["product-h4"]
 mainP[3].textContent = siteContent["main-content"]["product-content"]

 mainHeader[4].textContent = siteContent["main-content"]["vision-h4"]
 mainP[4].textContent = siteContent["main-content"]["vision-content"]

//let headline = document.getElementByTag('h1')
 // headline.setAttribute = ('src', siteContent["cta"]["h1"])
 
 //contact

 const contactHeader = document.querySelector(".contact h4")
 contactHeader.textContent = siteContent["contact"]["contact-h4"]

 const contact = document.querySelectorAll(".contact p");
 contact[0].textContent = siteContent["contact"]["address"]
 contact[1].textContent = siteContent["contact"]["phone"]
 contact[2].textContent = siteContent["contact"]["email"]


 



  const footer = document.querySelector("footer p");
 footer.textContent = siteContent["footer"]["copyright"]


      


 


