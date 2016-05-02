print("started");
(function() {
    var table_id = "bc14486b-c29e-46c9-8da7-24ea6d30e02e";
    var table_position = Entities.getEntityProperties(table_id)["position"];
    print(table_position);
    this.collisionWithEntity = function(myID, otherID, collisionInfo) {
        var myProps = Entities.getEntityProperties(myID);
        var otherProps = Entities.getEntityProperties(otherID);
        print("name: " + otherProps["name"]);
        var pizzaPosition = Vec3.sum(table_position, {
            x: 0,
            y: .6,
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
            gravity: {
                x: 0,
                y: -1,
                z: 0
            },
            dynamic: true,
            shapeType: "box",
            userData: JSON.stringify({
                grabbableKey: {
                    grabbable: true
                }
            })
        };
        var new_plate_properties = {
            type: "Model",
            modelURL: "atp:/pizza.obj",
            position: pizzaPosition,
            name: "new_p",
            dimensions: {
                x: 0.3549,
                y: 0.0325,
                z: 0.3549
            },
            shapeType: 'compound',
            gravity: {
                x: 0,
                y: -1,
                z: 0
            },
            dynamic: true,
            shapeType: "box",
            userData: JSON.stringify({
                grabbableKey: {
                    grabbable: true
                }
            })
        };



        // Add the sphere
        if (otherProps["name"] === "cheese") {
            Entities.editEntity(otherID, {
                acceleration: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(myID, {
                acceleration: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(myID, {
                angularVelocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(otherID, {
                angularVelocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(myID, {
                velocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(otherID, {
                velocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(myID, {
                position: Vec3.sum(pizzaPosition, {
                    x: -.7,
                    y: 0,
                    z: -1,
                })
            });

            Entities.editEntity(otherID, {
                position: Vec3.sum(pizzaPosition, {
                    x: .5,
                    y: 0,
                    z: .7,
                })
            });

            Entities.editEntity(otherID, {
                acceleration: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(myID, {
                acceleration: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(myID, {
                angularVelocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(otherID, {
                angularVelocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(myID, {
                velocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });
            Entities.editEntity(otherID, {
                velocity: {
                    x: 0,
                    y: 0,
                    z: 0,
                }
            });


            var pizza_ent = Entities.addEntity(new_pizza_properties);
            var plate_ent = Entities.addEntity(new_plate_properties);
            Entities.editEntity(plate_ent, {
                position: Vec3.sum(pizzaPosition, {
                    x: -.7,
                    y: 0,
                    z: -1,
                })
            });
            Entities.editEntity(plate_ent, {
                script: "C:\\HighFidelityHackathon\\High_Fidelity_Pizza\\base2.js"
            });

        }
    };

});