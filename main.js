//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status) {
  this.name = name;
  this.status = status;
  this.color = "black";
}

let sadie = new Dog("Status", "normal");
sadie.hungry =false;
let moonshine = new Dog();
moonshine.hungry = true;
let atticus = new Dog();
// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, pet) {
  this.name = name;
  this.pet = function(dog){
    dog.status = "happy";
    //console.log(this.pet);
  }
  this.feed = function(dog){
    dog.hungry = false;
  }


}



let mason = new Human("Mason", "Sadie's owner");
let julia = new Human();

julia.cool = true;
mason.cool = false;

// Instances of Human
// Needed: mason, julia
