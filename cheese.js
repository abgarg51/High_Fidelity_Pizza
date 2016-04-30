(function(){ 
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.collisionWithEntity = function(myID, otherID, collisionInfo) { 
        Entities.editEntity(myID, { color: { red: getRandomInt(128,255), 
                                            green: getRandomInt(128,255), 
                                            blue: getRandomInt(128,255)} });
    }; 
})
