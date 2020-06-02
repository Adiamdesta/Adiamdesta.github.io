(function () {
    var createBicyclePrototype = function () {
        return {
            speed: 0,
            applyBrake: function (value) {this.speed -= value;},
            speedup: function (value) { this.speed += value; }             
        }
    };

    function createMoutaninBikePrototype(prototype) {
     newObject = Object.create(prototype);
        newObject.gear=1;
        newObject.setGear=function (x) {
                newObject.gear = x;
            }
           
        return newObject;

    }
    function start() {
        bicyclePrototype = createBicyclePrototype();
        mountainBikePrototype=createMoutaninBikePrototype(bicyclePrototype);
        return  mountainBikePrototype;
    }
    var obj= start();
    obj.speedup(3);
    obj.setGear(3);
    console.log(obj.gear);
    console.log(obj.speed);
    obj.applyBrake(2);
   console.log( obj.speed);
     
    
})();