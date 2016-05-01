print("started");
(function() {
    var properties = {
            type: "Model",
            modelURL : "C:\HighFidelityHackathon\High_Fidelity_Pizza\Pizza.fbx",
            position: pos,
            name: "new_pizza"
        };
    this.mousePressOnEntity = function(entityID, mouseEvent) {
        print("clicked2");

        // Create the sphere properties
        var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
        

        // Add the sphere
        var Ent = Entities.addEntity(properties);
    };

});
