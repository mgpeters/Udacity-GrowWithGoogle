const   main = document.getElementById('main'),
        counterSpan = document.querySelectorAll('counter__number');

let catArray = [tabby = new Animal('tabby', '../img/cat01.jpeg'),
                isla = new Animal('isla', '../img/cat02.jpg.jpg'),
                mittins = new Animal('mittins', '../img/cat03.jpg'),
                blue = new Animal('blue', '../img/cat04.jpeg'),
                red = new Animal('red', "../img/cat05.jpg")
                ];

function Animal(name, photoPath){
    this.counter = 0,
    this.name = name,
    this.photoPath = photoPath,
    this.htmlInject = ` <div class="counter">
                            <span class="counter__number">0</span>
                        </div>
                        <div class="cat-name">
                            <span class="cat-name__inner">${this.name}</span>
                        </div>
                        <div class="main-picture">
                            <img class="cat-photo-main" src="${this.photoPath}" alt="cat-photo">
                        </div>`
}
for(let x = 0; x < catArray.length; x += 1){
    let z = document.createElement('div');
    z.className = `cat${x}`;
    z.innerHTML = catArray[x].htmlInject;
    main.appendChild(z);

let catPhoto = document.querySelectorAll('img'),
    catCounter = document.getElementsByClassName('counter__number');

    catPhoto[x].addEventListener('click', function(){
        //the element has been clicked... do stuff here
          catArray[x].counter += 1;
          catCounter[x].innerHTML = catArray[x].counter;
      }, false);
}
      