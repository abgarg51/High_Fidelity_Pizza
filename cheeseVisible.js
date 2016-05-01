(function(){
    var newProperties = {
      visible: FALSE
    };
    this.mousePressOnEntity = function(entityID, mouseEvent) { 
        
        Entities.editEntity(entityID, newProperties);
    };
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) { 
    
        Entities.editEntity(entityID, newProperties);
    };
}
