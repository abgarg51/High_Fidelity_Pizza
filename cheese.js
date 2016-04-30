//
//  changeColorOnCollision.js
//  examples/entityScripts
//
//  Created by Brad Hefta-Gaub on 12/8/14.
//  Copyright 2014 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

(function(){ 
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.enterEntity = function(entityID) {
        print("enterEntity("+entityID.id+")");
        change(entityID);
    };
    this.leaveEntity = function(entityID) {
        print("leaveEntity("+entityID.id+")");
        Entities.editEntity(entityID, { angularDamping: 0.5});
        Entities.editEntity(entityID, { color: { red: 255, green: 190, blue: 20} });
    };
    this.collisionWithEntity = function(myID, otherID, collisionInfo) { 
        Entities.editEntity(myID, { color: { red: getRandomInt(128,255), green: getRandomInt(128,255), blue: getRandomInt(128,255)} });
    }; 
})

Console.log("hello world");
print("hello world");

var cow = Entities.addEntity({
  type: "Model",
  modelURL: MODEL_URL,
  name: "example_cow",
  position: center,
  animation: {
    currentFrame: 278,
    running: true,
    url: ANIMATION_URL
  },
  dimensions: {
    x: 0.739,
    y: 1.613,
    z: 2.529
  },
  dynamic: true,
  gravity: {
    x: 0,
    y: -5,
    z: 0
  },
  lifetime: 3600,
  shapeType: "box",
  script: SCRIPT_URL,
  userData: JSON.stringify({
    grabbableKey: {
      grabbable: true
    }
  })
});

Script.stop();
