(function(){
    var newProperties = {
      visible: FALSE
    };
    this.mousePressOnEntity = function(entityID, mouseEvent) { 
        
        Entities.editEntity(entityID, { visible: FALSE });
    };
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) { 
    
        Entities.editEntity(entityID, { visible: TRUE });
    };
}
