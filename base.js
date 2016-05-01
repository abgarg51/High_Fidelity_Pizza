print("started");
(function() {
    if ()
    var table_id = "bc14486b-c29e-46c9-8da7-24ea6d30e02e";
    var table_position = Entities.getEntityProperties(table_id)["position"];
    print(table_position);
    this.collisionWithEntity = function(myID, otherID, collisionInfo) {
        print("collision");
        var myProps = Entities.getEntityProperties(myID);
        var otherProps = Entities.getEntityProperties(otherID);
        print("name: " + otherProps["name"]);
        var pizzaPosition = Vec3.sum(table_position, {
            x: 0,
            y: 0.83,
            z: 0,
        })

        var new_pizza_properties = {
            type: "Model",
            modelURL: "atp:/pizza/Pizza.fbx",
            position: pizzaPosition,
            name: "new_pizza",
            dimensions: {
                x: 0.3549,
                y: 0.0325,
                z: 0.3549
            },
            shapeType: 'compound',
        };



        // Add the sphere
        if (otherProps["name"] === "cheese") {
            var pizza_ent = Entities.addEntity(new_pizza_properties);
            var cheese_ent = Entities.addEntity(new_cheese_properties);
            print("moving items");
            Entities.editEntity(myID, {
                position: Vec3.sum(pizzaPosition, {
                    x: 0,
                    y: 0,
                    z: -1,
                })
            });
            Entities.editEntity(otherID, {
                position: Vec3.sum(pizzaPosition, {
                    x: 0,
                    y: 0,
                    z: 1,
                })
            });
            print("moved items");
        }
    };

});