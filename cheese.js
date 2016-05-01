(function(){
    var change = 12;
    var red = 100;
  var blue = 100;
    this.mousePressOnEntity = function(entityID, mouseEvent) { 
        red = red - change;
        blue = blue + change;
        if (blue >=  255) {
            blue = 255;
        }
        if (red <=  0) {
            red = 0;
        }
        Entities.editEntity(entityID, { color: { red: red, green: 0, blue: blue} });
    };
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) { 
    red = red + change;
      blue = blue - change;
        if (red >=  255) {
            red = 255;
        }
        if (blue <=  0) {
            blue = 0;
        }   
        Entities.editEntity(entityID, { color: { red: red, green: 0, blue: blue} });
    };  

});