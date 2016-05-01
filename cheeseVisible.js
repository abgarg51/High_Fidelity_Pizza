(function(){
    var newProperties = {
      visible: FALSE
    };
    var newProperties2 = {
      visible: TRUE
    };
    this.mousePressOnEntity = function(entityID, mouseEvent) { 
        
        Entities.editEntity(entityID, newProperties);
    };
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) { 
    
        Entities.editEntity(entityID, newProperties2);
    };
})
