print("started");
(function() {
    this.mousePressOnEntity = function(entityID, mouseEvent) {
        print("clicked");

        // Create the sphere properties
        var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
        var properties = {
            type: "Sphere",
            position: pos
        };

        // Add the sphere
        var Ent = Entities.addEntity(properties);
        print("Entity added.");;
    };

});