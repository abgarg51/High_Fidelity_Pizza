print("started");
(function() {

    this.clickDownOnEntity = function(entityID, mouseEvent) {
        print("clicked3");
        var myProps = Entities.getEntityProperties(entityID);
        var pizzaPosition = Vec3.sum(myProps.position,{
            x:0,
            y:1,
            z:0,
        })

        // Create the sphere properties
        var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));

            var properties = {
            type: "Model",
            modelURL : "atp:/pizza/Pizza.fbx",
            position: pizzaPosition,
            name: "new_pizza",
            dimensions:{x:1,y:1,z:1}
        };

        // Add the sphere
        var Ent = Entities.addEntity(properties);
    };

});
 