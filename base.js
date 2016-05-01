print("started");
(function() {

    this.collisionWithEntity = function(myID, otherID, collisionInfo) {
        print("collision");
        var myProps = Entities.getEntityProperties(myID);
        var otherProps = Entities.getEntityProperties(otherID);
        print("name: "+otherProps["name"]);
        var pizzaPosition = Vec3.sum(myProps.position,{
            x:0,
            y:0,
            z:0,
        })

            var properties = {
            type: "Model",
            modelURL : "atp:/pizza/Pizza.fbx",
            position: pizzaPosition,
            name: "new_pizza",
            dimensions:{x:0.3549,y:0.0325,z:0.3549}
        };

        // Add the sphere
        if (otherProps["name"] === "cheese"){
            var Ent = Entities.addEntity(properties);
            Entities.deleteEntity(otherID);
            Entities.deleteEntity(myID);
        }
    };

});   