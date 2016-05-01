print("started");
(function() {
    this.mousePressOnEntity = function(entityID, mouseEvent) {
        print("clicked");

        // Create the sphere properties
        var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
        var properties = {
            type: "Model",
            modelURL : "https://www.dropbox.com/s/612pgw8woehz5e8/Pizza.fbx?dl=0",
            position: pos,
            name: "new_pizza"
        };

        // Add the sphere
        var Ent = Entities.addEntity(properties);
    };

});
