// 1. Copy and paste your prototype in here and refactor into class syntax.


/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

// function CuboidMaker(attribute) {
//     this.length = attribute.length;
//     this.width = attribute.width;
//     this.height = attribute.height;
//   }
  

// ---------- renamed CuboidMaker to CuboidMaker2 because Chrome console was giving
// ---------- an error since CuboidMaker was already defined on prototypes page

  class CuboidMaker2 {
    constructor(attribute) {
        this.length = attribute.length;
        this.width = attribute.width;
        this.height = attribute.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }// volume
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width* this.height);
    }// surfaceArea
}// CuboidMaker2
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  
// ---------- moved up and nested inside of CuboidMaker2 ----------
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   }
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

// ---------- moved up and nested inside of CuboidMaker2 ----------
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width* this.height);
//   }
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
// ---------- renamed Cuboid to Cuboid2 because Chrome console was giving
// ---------- an error since Cuboid was already defined on prototypes page

  const cuboid2 = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:

// ---------- renamed to cuboid2 to use new object, above
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.