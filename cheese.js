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