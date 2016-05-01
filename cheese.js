(function(){
    var black = 0;
  var white = 255;
  var color = white;  
    this.mouseMoveOnEntity = function(entityID, mouseEvent) { 
         if (color == white) {
         color = black;
     }else {
         color = white;
     }
        Entities.editEntity(entityID, { color: { red: color, green: color, blue: color} });
    };
})
