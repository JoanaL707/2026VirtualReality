let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
createCloud(-5,4,-10);
createCloud(2,4,-4);
createCloud(-5,4,-2);
   
//Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
createHouse(-3,0,-5);
createHouse(6,0,-8);
createHouse(-7,0,-3);
createHouse(2,0,-10);
createHouse(-4,0,-12);
createHouse(5,0,-6);
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(nx,ny,nz){
let cloud = document.createElement("a-entity");

let circle1 = document.createElement("a-sphere");
circle1.setAttribute("color","white");
circle1.setAttribute("position","0 2 0");
cloud.append( circle1 );

let circle2 = document.createElement("a-sphere");
circle2.setAttribute("color","white");
circle2.setAttribute("position","1 2 0");
cloud.append( circle2 );

let circle3 = document.createElement("a-sphere");
circle3.setAttribute("color","white");
circle3.setAttribute("position","2 2 0");
cloud.append( circle3 );

cloud.setAttribute("scale",{x:0.5, y:0.5, z:0.5});
cloud.setAttribute("position",{x:nx, y:ny, z:nz});
scene.append(cloud);
}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/

function createHouse(nx,ny,nz){
let house = document.createElement("a-entity");

let base = document.createElement("a-box");
base.setAttribute("color","blue");
base.setAttribute("scale","1.5 1 1.5");
base.setAttribute("position" ,"0 0.5 0");
house.append(base);




let roof = document.createElement("a-cone");
roof.setAttribute("color","brown");
roof.setAttribute("radius","1.2");
roof.setAttribute("height", "1");
roof.setAttribute("position", "0 1.5 0");
house.append(roof);


house.setAttribute("position",{x:nx, y:ny, z:nz});

scene.append(house);

}


function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



