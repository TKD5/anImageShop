const weatherAPIKey = '0102bff71009445c555798e7bab2f206';
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`

const galleryImages = [
    {
        src: './assets/gallery/img1.png',
        alt: 'Thumbnail Image 1'
    },
    {
        src: './assets/gallery/boliviainteligente-JEjc-aOGZiU-unsplash.jpg',
        alt: 'Thumbnail Image 1'
    },
    {
        src: './assets/gallery/image1.jpg',
        alt: 'Thumbnail Image 1'
    },
    {
        src: './assets/gallery/image2.jpg',
        alt: 'Thumbnail Image 2'
    },
    {
        src: './assets/gallery/image3.jpg',
        alt: 'Thumbnail Image 3'
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ];

//Menu Section 
//Open & Close nav section
function menuHandler(){
     document.querySelector('#open-nav-menu').addEventListener('click', function(){
    document.querySelector('header nav .wrapper').classList.add('nav-open');
 });
 document.querySelector('#close-nav-menu').addEventListener('click', function(){
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
 });
};

//Temperature Conversion
function celsiusToFahr(temperature){
   let fahr = (temperature * 9/5) + 32;
   return fahr;
}

//Greeting Section
function greetingHandler() {
    let currentHour = new Date().getHours();
let greetingText;
    if (currentHour < 12) {
        greetingText = 'Good Morning!';
    } else if (currentHour < 19 ) {
        greetingText = 'Good Afternoon!';
    } else if (currentHour < 24) {
        greetingText = 'Good Evening!';
    } else {
        greetingText = 'Welcome!';
    }

/* const greetingtext = 'Good Morning!'; */

document.querySelector('#greeting').innerHTML = greetingText;


}

//Weather section
function weatherHandler() {
    navigator.geolocation.getCurrentPosition(position => {

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let url = weatherAPIURL
            .replace('{lat}', latitude)
            .replace('{lon}', longitude)
            .replace('{API key}',weatherAPIKey);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            
            const condition = data.weather[0].description;
            const location = data.name;
            let temperature = data.main.temp;
    
            let celsiusText = `The weather is ${condition} in ${location} and it's ${temperature.toFixed(1)}°C outside.`
    
            let fahrText = `The weather is ${condition} in ${location} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`
    
            document.querySelector('p#weather').innerHTML = celsiusText;
    
    //Temperature Buttons
    
            document.querySelector('.weather-group').addEventListener('click', function(event) {
        //celsius
        //fahr
        //Conditionals
        if (event.target.id == 'celsius') {
            document.querySelector('p#weather').innerHTML = celsiusText;
        } else if (event.target.id == 'fahr') {
            document.querySelector('p#weather').innerHTML = fahrText;
        }
    });
    
        }).catch(err => {
            document.querySelector('p#weather').innerHTML = 'Unable to get the weather information. Please try again later.'
        });
    });
}

//Local Time Section
function clockHandler() {
    setInterval(function(){
        let localTime = new Date();
        //.toString().padStart(2, '0') adds a 0 to the start 
        document.querySelector('span[data-time=hours]').textContent = localTime.getHours().toString().padStart(2, '0');
        document.querySelector('span[data-time=minutes]').textContent = localTime.getMinutes().toString().padStart(2, '0');
        document.querySelector('span[data-time=seconds]').textContent = localTime.getSeconds().toString().padStart(2, '0');
        
    }, 1000);
}

/* 
new Date().getHours();
new Date().getMinutes();
new Date().getSeconds();
*/

//The Image Gallery
function galleryHandler() {
    //src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"


/* for (let i in galleryImages) {
    console.log(galleryImages[i])
} */

let mainImage = document.querySelector('#gallery > img');
let thumbnails = document.querySelector('#gallery .thumbnails');

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

//<img src="./assets/gallery/image1.jpg" 
//alt="Thumbnail Image 1" 
//data-array-index="0" data-selected="true">

galleryImages.forEach(function(image, index){
    let thumb = document.createElement('img');
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    /* ternary condition */
    thumb.dataset.selected = index === 0 ? true : false;

    thumb.addEventListener('click', function(e) {
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        thumbnails.querySelectorAll('img').forEach(function(img) {
            img.dataset.selected = false;
        });
        e.target.dataset.selected = true;
    });

/* if (index === 0) {
    thumb.dataset.selected = true;
} else {
    thumb.dataset.selected = false;
} */

    thumbnails.appendChild(thumb);


});
}

//Products Section
/* <div class="product-item">
             <img src="./assets/products/img6.png" alt="AstroFiction">
             <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
             </div>
          </div> */

          function populateProducts(productList) {

            let productsSection = document.querySelector('.products-area');
            productsSection.textContent = '';
            //Run a loop through the products and create an HTML element ('product-item') for each of them
                productList.forEach(function(product, index){
        
                //Create the HTML element for the individual product
                let productElm = document.createElement('div');
                productElm.classList.add('product-item');

                //Create the product image
                let productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = 'Image for ' + product.title;

                //Create the product details section
                let productDetails = document.createElement('div');
                productDetails.classList.add('product-details');

                //Create product Title, author, pricetitle and price
                let productTitle = document.createElement('h3');
                productTitle.classList.add('product-title');
                productTitle.textContent = product.title;
                //Product Author
                let productAuthor = document.createElement('p');
                productAuthor.classList.add('product-author');
                productAuthor.textContent = product.author;

                //Price Title
                let priceTitle = document.createElement('p');
                priceTitle.classList.add('price-title');
                priceTitle.textContent = 'Price';

                //Porduct Price
                let productPrice = document.createElement('p');
                productPrice.classList.add('product-price');
                productPrice.textContent = product.price > 0 ? '$ ' + product.price.toFixed(2) : 'Free';


                //Append the product details
                productDetails.append(productTitle);
                productDetails.append(productAuthor);
                productDetails.append(priceTitle);
                productDetails.append(productPrice);

                //Add all child HTML elements of the product
                productElm.append(productImage);
                productElm.append(productDetails);

                //Add the complete individual product to the product section
                productsSection.append(productElm);
            });
                }

function productsHandler() {
    
    /* let freeProducts = products.filter(function(item){
        return !item.price || item.price <= 0;
    }); */

    //Arrow functions
    //Shorter way to write functions

    let freeProducts = products.filter(item => !item.price || item.price <= 0
    );
    let paidProducts = products.filter(item => item.price > 0
    );
    /* let paidProducts = products.filter(function(item){
        return item.price > 0;
    }); */
    
    populateProducts(products);

    document.querySelector('.products-filter label[for=all] span.product-amount').textContent = products.length;

    document.querySelector('.products-filter label[for=paid] span.product-amount').textContent = paidProducts.length;

    document.querySelector('.products-filter label[for=free] span.product-amount').textContent = freeProducts.length;

    let productsFilter = document.querySelector('.products-filter');

    productsFilter.addEventListener('click', function(event) {
        if (event.target.id === 'all') {
            populateProducts(products);
        } else if (event.target.id === 'paid') {
            populateProducts(paidProducts)
        } else if (event.target.id === 'free') {
            populateProducts(freeProducts);
        }
    });
}        

function footerHandler() {
    let currentYear = new Date().getFullYear();
    document.querySelector('footer').textContent = `${currentYear} - All rights reserved`
} 


/* navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
}); */


/* HTTP requests using the Fetch method

    navigator.geolocation.getCurrentPosition(position => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => response.json())
    .then(data => console.log(data));
});

*/


//Page Load
menuHandler();

greetingHandler();

weatherHandler();

clockHandler();

galleryHandler();

productsHandler();

footerHandler();

