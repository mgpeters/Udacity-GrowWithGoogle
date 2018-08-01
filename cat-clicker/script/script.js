const   main = document.getElementById('main'),
        counterSpan = document.querySelectorAll('counter__number');

let cat1 = new Animal('tabby', '../img/d8472a04-0d67-4dfe-ba33-faae2ef90ffd.jpg'),
    cat2 = new Animal('isla', '../img/Cat03.jpg'),
    catArray = [cat1, cat2];

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
      