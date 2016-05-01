print("started");
(function() {
    this.mousePressOnEntity = function(entityID, mouseEvent) {
        print("clicked");

        Entities.editEntity(entityID, {
            visible: FALSE
        });
    };

});
