global = {
    catArray: [tabby = new Animal('tabby', '../img/cat01.jpeg'),
                isla = new Animal('isla', '../img/cat02.jpg'),
                mittins = new Animal('mittins', '../img/cat03.jpg'),
                blue = new Animal('blue', '../img/cat04.jpeg'),
                red = new Animal('red', '../img/cat05.jpg')
                ],
    catDisplay: document.getElementById('cat-display'),
    catList: document.getElementById('cat-chart__list'),
    prior: undefined,
    toggle_visibility: function toggle_visibility(input) { // https://css-tricks.com/snippets/javascript/showhide-element/ 08/03/18
                                let idLi = document.getElementById(input);
    
                                if(global.prior != undefined){
                                    global.prior.style.visibility = 'hidden';
                                }
                        
                                if(idLi.style.visibility == 'hidden'){
                                    idLi.style.visibility = 'visible';
                                }else{
                                    idLi.style.visibility = 'hidden';
                                }
                                global.prior = idLi;}
};

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

//Display list of Cats
for(let x = 0; x < global.catArray.length; x += 1){
    let z = document.createElement('li');
    z.className = `cat-chart__list__li`;
    z.innerHTML = global.catArray[x].name;
    global.catList.appendChild(z);

    let catListIndividual = document.getElementsByClassName('cat-chart__list__li');
    
    catListIndividual[x].addEventListener('click', function(event){
        let name = catListIndividual[x].innerHTML;

        global.toggle_visibility(name);
    })

}

// Display Cat Photos
for(let x = 0; x < global.catArray.length; x += 1){
    let z = document.createElement('div');
    z.className = `cat-box`;
    z.id = `${global.catArray[x].name}`;
    z.setAttribute('style', 'visibility: hidden');
    z.innerHTML = global.catArray[x].htmlInject;
    global.catDisplay.appendChild(z);

    let catPhoto = document.querySelectorAll('img'),
        catCounter = document.getElementsByClassName('counter__number');

        catPhoto[x].addEventListener('click', function(){
            //the element has been clicked... do stuff here
            global.catArray[x].counter += 1;
            catCounter[x].innerHTML = global.catArray[x].counter;
        }, false);
}
//mvc implamentation

(function(){

    var data = {
        catArray: [tabby = new Animal('tabby', '../img/cat01.jpeg'),
        isla = new Animal('isla', '../img/cat02.jpg'),
        mittins = new Animal('mittins', '../img/cat03.jpg'),
        blue = new Animal('blue', '../img/cat04.jpeg'),
        red = new Animal('red', '../img/cat05.jpg')
        ],
        catDisplay: document.getElementById('cat-display'),
        catList: document.getElementById('cat-chart__list'),
        prior: undefined,
        toggle_visibility: function toggle_visibility(input) { // https://css-tricks.com/snippets/javascript/showhide-element/ 08/03/18
                                let idLi = document.getElementById(input);
    
                                if(global.prior != undefined){
                                    global.prior.style.visibility = 'hidden';
                                }
                        
                                if(idLi.style.visibility == 'hidden'){
                                    idLi.style.visibility = 'visible';
                                }else{
                                    idLi.style.visibility = 'hidden';
                                }
                                global.prior = idLi;}

    };

    var = octopus {
        
    }

    var view = {
        for(let x = 0; x < global.catArray.length; x += 1){
            let z = document.createElement('li');
            z.className = `cat-chart__list__li`;
            z.innerHTML = global.catArray[x].name;
            global.catList.appendChild(z);
        
            let catListIndividual = document.getElementsByClassName('cat-chart__list__li');
            
            catListIndividual[x].addEventListener('click', function(event){
                let name = catListIndividual[x].innerHTML;
        
                global.toggle_visibility(name);
            })
        }
        for(let x = 0; x < global.catArray.length; x += 1){
            let z = document.createElement('div');
            z.className = `cat-box`;
            z.id = `${global.catArray[x].name}`;
            z.setAttribute('style', 'visibility: hidden');
            z.innerHTML = global.catArray[x].htmlInject;
            global.catDisplay.appendChild(z);
        
            let catPhoto = document.querySelectorAll('img'),
                catCounter = document.getElementsByClassName('counter__number');
        
                catPhoto[x].addEventListener('click', function(){
                    //the element has been clicked... do stuff here
                    global.catArray[x].counter += 1;
                    catCounter[x].innerHTML = global.catArray[x].counter;
                }, false);
        }
    }

})();