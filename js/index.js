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


let navItems = document.querySelectorAll('header nav a');

// console.log(navItems);

let navArray = Array.from(navItems);

// console.log(navArray);

navArray.forEach((item,i) => item.textContent = siteContent.nav[`nav-item-${i++}`]);


let mainText = document.querySelector('.cta h1');

// console.log(mainText);

mainText.textContent = siteContent.cta.h1;

// console.log(siteContent.cta.h1);

let button = document.querySelector('.cta button');
button.textContent = siteContent.cta.button;

let imgHeader = document.getElementById('cta-img');

imgHeader.setAttribute('src', siteContent.cta["img-src"]);

let mainH4 = document.querySelectorAll('.main-content h4');

// console.log(mainH4);


let mainH4Values = Object.values(siteContent["main-content"]);


mainH4[0].textContent = mainH4Values[0];
mainH4[1].textContent = mainH4Values[2];
mainH4[2].textContent = mainH4Values[5];
mainH4[3].textContent = mainH4Values[7];
mainH4[4].textContent = mainH4Values[9];

let mainPara = document.querySelectorAll('.main-content p');

mainPara[0].textContent = mainH4Values[1];
mainPara[1].textContent = mainH4Values[3];
mainPara[2].textContent = mainH4Values[6];
mainPara[3].textContent = mainH4Values[8];
mainPara[4].textContent = mainH4Values[10];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

console.log(siteContent["main-content"]["middle-img-src"]);



