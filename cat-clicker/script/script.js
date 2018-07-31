const   main = document.getElementById('main'),
        catPhoto = document.querySelectorAll('cat-photo-main'),
        counterSpan = document.querySelectorAll('counter__number');

let cat1 = new Animal('tabby', '../img/d8472a04-0d67-4dfe-ba33-faae2ef90ffd.jpg'),
    cat2 = new Animal('isla', '../img/Cat03.jpg'),
    catArray = [cat1, cat2];

function Animal(name, photoPath){
    this.counter = 0,
    this.name = name,
    this.photoPath = photoPath,
    this.htmlInject = ` <div class="counter">
                            <span class="counter__number">${this.counter}</span>
                        </div>
                        <div class="cat-name">
                            <span class="cat-name__inner">${this.name}</span>
                        </div>
                        <div class="main-picture">
                            <img class="cat-photo-main" src="${this.photoPath}" alt="cat-photo">
                        </div>`
}
console.log(main);
for(let x = 0; x < catArray.length; x += 1){
    let z = document.createElement('div');
    z.innerHTML = catArray[x].htmlInject;
    main.appendChild(z);
}

catPhoto[0].addEventListener('click', function(){
  //the element has been clicked... do stuff here
    this.counter += 1;

    this.counter__number.innerHTML = this.counter;
}, false);
