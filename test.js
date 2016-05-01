print("started");
(function() {

    this.clickDownOnEntity = function(entityID, mouseEvent) {
        print("clicked3");

        // Create the sphere properties
        var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
            var properties = {
            type: "Model",
            modelURL : "https://rawgit.com/abgarg51/High_Fidelity_Pizza/v0/Pizza.fbx",
            position: pos,
            name: "new_pizza"
        };

        // Add the sphere
        var Ent = Entities.addEntity(properties);
    };

});
