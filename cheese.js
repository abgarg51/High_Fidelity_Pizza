(function(){
    function change(entityID) {
        Entities.editEntity(entityID, { angularDamping: 0});
        Entities.editEntity(entityID, { angularVelocity: { x: 0, y: 60, z: 0} });
        Entities.editEntity(entityID, { color: { red: 255, green: 100, blue: 220} });
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