print("start new script");
(function() {

    this.collisionWithEntity = function(myID, otherID, collisionInfo) {
        //var myProps = Entities.getEntityProperties(myID);
        var otherProps = Entities.getEntityProperties(otherID);


        var animationSettings = {
            running: false
        }

            print("working");

            Entities.editEntity(myID, {
                //animation: animationSettings
                visible: false

            });
            
            /*
            setTimeout(function() {
                    Entities.editEntity(myID, {
                        //animation: animationSettings
                        visible: true

                    });
                }, 5000);
            */
    };

});