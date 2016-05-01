(function() {
    this.mousePressOnEntity = function(entityID, mouseEvent) {
        print("clicked");

        Entities.editEntity(entityID, {
            visible: FALSE
        });
    };
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) {

        Entities.editEntity(entityID, {
            visible: TRUE
        });
    };
});