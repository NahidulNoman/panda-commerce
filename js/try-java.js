// input field disabled
let getInput = document.getElementById('text-field');
getInput.addEventListener('keyup',function(event){
    let newText = event.target.value;
    let getButton = document.getElementById('buttonCall');
    if(newText === 'email'){
        getButton.removeAttribute('disabled')
    }
    else{
        getButton.setAttribute('disabled',true)
    }
})
let radiusTextColor = document.getElementById('radius');
let buttonColor = document.getElementById('color-white')
// shoes radius
let radius = document.getElementById('radius');
radius.addEventListener('mouseenter',function () {
    radius.style.borderRadius = '30px';
    radius.style.backgroundColor = 'orange'
    radiusTextColor.style.color = 'white'
    buttonColor.style.color = 'white'
    // console.log('done')
})
let nikeText = document.getElementById('nike-text');
let nikeButton = document.getElementById('nike-Button')
let nikeShoes = document.getElementById('nike-shoes');
nikeShoes.addEventListener('mouseenter',function(){
    nikeShoes.style.backgroundColor = 'pink';
    nikeShoes.style.borderRadius = '30px';
    nikeText.style.color = 'green';
    nikeButton.style.color = 'white';
})

let nikeAirMax = document.getElementById('airmax');
nikeAirMax.addEventListener('mouseover',function(){
    nikeAirMax.src = 'images/shoes/shoe-1.png'
})
nikeAirMax.addEventListener('mouseout',function(){
    nikeAirMax.src = 'images/shoes/shoe-3.png'
})
let redTextColor = document.getElementById('red-text');
let nikeRedShoes = document.getElementById('red-shoes');
let redButton = document.getElementById('red-Button')
nikeRedShoes.addEventListener('mouseenter',function(){
    nikeRedShoes.style.backgroundColor = 'green';
    nikeRedShoes.style.borderRadius = '30px';
    redTextColor.style.color = 'orange';
    redButton.style.color = 'white';
})


// bagPack bg-color and font-size 

// let bagPack = document.getElementById('Backpack');
// bagPack.style.backgroundColor='tomato';
let textColor = document.getElementById('text-color');
let btnColor = document.getElementById('last-button');
// textColor.addEventListener('click',function(){
//     textColor.style.color='white';
// })
let bagColor = document.getElementById('bag1');
bagColor.addEventListener('mouseenter',function(){
bagColor.style.backgroundColor='tomato';
bagColor.style.borderRadius='30px';
textColor.style.color='white';
// btnColor.style.color='white';
})


// function button(){
//     alert('Yes its clicked!!')
// }
// let getButton = document.getElementById('last-button');
// getButton.addEventListener('click',button);

// subscribe bg-color change
let subscribeText = document.getElementById('sub-text');
let section = document.getElementById('Subscribe');
section.addEventListener('dblclick',function(){
    section.style.backgroundColor = "red";
    section.style.borderRadius = '30px';
    subscribeText.style.color = 'white'
})
let shoes = document.getElementById('red-apex');
let apexBag = document.getElementById('apex');
let apexJut = document.getElementById('apexButton');
apexBag.addEventListener('mouseenter',function(){
    apexBag.style.backgroundColor = 'purple';
    apexBag.style.borderRadius = '30px';
    shoes.style.color = 'white';
    apexJut.style.color = 'white';
})
let caterPil = document.getElementById('cater');
let caterId = document.getElementById('caterid');
caterPil.addEventListener('mouseenter',function(){
    caterPil.style.backgroundColor = 'cyan';
    caterPil.style.borderRadius = '30px';
    caterId.style.color = 'orange';
})




// mouseover and change image
let getImage = document.getElementById('image');
getImage.addEventListener('mouseover',function(){
    getImage.src = 'images/bags/bag-2.png';
    
})
getImage.addEventListener('mouseout',function(){
    getImage.src = 'images/bags/bag-3.png';

})


let getAll = document.getElementsByTagName('h3');
for(get of getAll){
    get.style.color = 'green'
}

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click',function(){
    removeButton.style.display = 'none';
})
